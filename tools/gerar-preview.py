#!/usr/bin/env python3
"""
Gera uma cópia portátil do site, com tudo embutido em cada arquivo.

Cada página vira um HTML autônomo — estilo, dados, scripts, fontes e imagens
como data URIs, sem nenhuma requisição externa. Os links entre as páginas
continuam funcionando, então a pasta gerada é uma cópia navegável do site que
pode ser compactada, enviada por e-mail ou hospedada em qualquer lugar.

    python3 tools/gerar-preview.py
    python3 tools/gerar-preview.py --pagina galeria.html   # uma página avulsa
    python3 tools/gerar-preview.py --unico                 # as cinco em um arquivo
    python3 tools/gerar-preview.py --destino /caminho/

Padrão: preview/

O modo --unico reúne as cinco páginas em um HTML só, navegável: cada página vira
um <main> e a troca é feita no próprio navegador. Serve para quando é preciso
entregar um endereço único em vez de uma pasta.

Os arquivos gerados são DERIVADOS. Nunca os edite: altere o projeto e gere de
novo. O site de trabalho continua sendo o conjunto de arquivos separados.

As reproduções são reduzidas apenas na cópia; os originais não são tocados.
"""

import argparse
import base64
import json
import pathlib
import re
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent

PAGINAS = ['index.html', 'medicina.html', 'historia.html', 'galeria.html', 'sobre.html']

# 900 px cobrem com folga o card (≈420 px) e a ficha ampliada (≈520 px).
LARGURA_PREVIEW = 900
QUALIDADE_PREVIEW = 72

_cache_imagens = {}


def ler(caminho):
    return (RAIZ / caminho).read_text(encoding='utf-8')


def como_data_uri(caminho, mime):
    dados = (RAIZ / caminho).read_bytes()
    return 'data:%s;base64,%s' % (mime, base64.b64encode(dados).decode('ascii'))


def jpeg_reduzido(caminho):
    """Reduz a reprodução apenas para a cópia. Requer PyMuPDF; sem ele, embute
    o arquivo como está e a cópia apenas fica maior."""
    try:
        import fitz
    except ImportError:
        return None

    documento = fitz.open(str(RAIZ / caminho))
    pagina = documento[0]
    escala = min(1.0, LARGURA_PREVIEW / pagina.rect.width)
    pix = pagina.get_pixmap(matrix=fitz.Matrix(escala, escala))
    dados = pix.tobytes('jpeg', jpg_quality=QUALIDADE_PREVIEW)
    documento.close()
    return 'data:image/jpeg;base64,' + base64.b64encode(dados).decode('ascii')


def embutir_imagens(texto):
    def trocar(m):
        caminho = m.group(1)
        if caminho in _cache_imagens:
            return _cache_imagens[caminho]
        if caminho.endswith('.svg'):
            uri = como_data_uri(caminho, 'image/svg+xml')
        else:
            uri = jpeg_reduzido(caminho) or como_data_uri(caminho, 'image/jpeg')
        _cache_imagens[caminho] = uri
        return uri

    return re.sub(
        r"\./(assets/(?:obras(?:/thumbs)?|logos)/[\w\-.]+\.(?:svg|jpg|jpeg|png))",
        trocar, texto)


def embutir_fontes(css):
    """Converte os @font-face locais em data URIs."""
    return re.sub(
        r"url\('\./(assets/fonts/[^']+)'\)",
        lambda m: "url('%s')" % como_data_uri(m.group(1), 'font/woff2'),
        css)


def montar_pagina(nome, avulsa=False):
    html = ler(nome)

    # Substitui a folha de estilo e os scripts por conteúdo embutido.
    css = embutir_fontes(ler('styles.css'))
    html = html.replace(
        '<link rel="stylesheet" href="./styles.css">',
        '<style>\n%s\n</style>' % css)

    # Fontes já estão embutidas: o preload externo deixa de fazer sentido.
    html = re.sub(r'\s*<link rel="preload" href="\./assets/fonts/[^>]+>', '', html)

    def inserir_script(m):
        return '<script>\n%s\n</script>' % ler(m.group(1))

    html = re.sub(r'<script src="\./([^"]+)"></script>', inserir_script, html)
    html = embutir_imagens(html)

    if avulsa:
        # Página fora do conjunto: a navegação entre páginas não teria destino.
        html = re.sub(
            r'<nav class="menu" id="menu".*?</nav>',
            '<p class="marca__linha">página avulsa — o site completo tem cinco páginas</p>',
            html, flags=re.S)
        html = re.sub(r'<nav class="rodape__nav".*?</nav>', '', html, flags=re.S)
        html = re.sub(r'<button class="menu-botao".*?</button>', '', html, flags=re.S)

    return html


# Ordem de carregamento: dados, núcleo compartilhado, páginas, galeria.
SCRIPTS = [
    'data/obras.js', 'data/periodos.js', 'data/marcos.js', 'data/referencias.js',
    'js/comum.js', 'js/paginas.js', 'js/galeria.js',
]

# Nome curto de cada página no endereço do arquivo único.
ROTAS = {
    'index.html': 'inicio',
    'medicina.html': 'medicina',
    'historia.html': 'historia',
    'galeria.html': 'galeria',
    'sobre.html': 'sobre',
}

ROTEADOR = """
/* ------------------------------------------------------------------ *
 * Roteador do arquivo único.
 *
 * Só existe nesta cópia: no site as páginas são arquivos separados e o
 * navegador faz a navegação sozinho. Aqui as cinco convivem no mesmo
 * documento e a troca é feita trocando qual <main> está visível.
 * ------------------------------------------------------------------ */
(function () {
  'use strict';

  var ROTAS = __ROTAS__;
  var TITULOS = __TITULOS__;
  var PAGINAS = Object.keys(ROTAS);

  var mains = {};
  PAGINAS.forEach(function (nome) {
    mains[nome] = document.querySelector('main[data-pagina="' + nome + '"]');
  });

  var atual = 'index.html';

  function porRota(rota) {
    for (var i = 0; i < PAGINAS.length; i++) {
      if (ROTAS[PAGINAS[i]] === rota) return PAGINAS[i];
    }
    return null;
  }

  function nomeDoEndereco() {
    var rota = (window.location.hash || '').replace(/^#\\/?/, '');
    return porRota(rota) || 'index.html';
  }

  function marcarMenu(nome) {
    var links = document.querySelectorAll('.menu__lista a, .rodape__nav a');
    Array.prototype.forEach.call(links, function (link) {
      var alvo = (link.getAttribute('href') || '').replace('./', '').split('?')[0];
      if (alvo === nome) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function aplicarFiltro(periodo) {
    var filtro = document.querySelector('.filtro[data-periodo="' + periodo + '"]');
    if (filtro) filtro.click();
  }

  function abrirObra(slug) {
    var card = document.querySelector('#grade [data-obra="' + slug + '"]');
    if (!card) {
      // A obra pode estar fora do filtro ativo; limpa e procura de novo.
      var limpar = document.querySelector('[data-limpar]');
      if (limpar) limpar.click();
      card = document.querySelector('#grade [data-obra="' + slug + '"]');
    }
    if (card) card.click();
  }

  function mostrar(nome, opcoes) {
    opcoes = opcoes || {};
    if (!mains[nome]) nome = 'index.html';

    PAGINAS.forEach(function (n) { mains[n].hidden = (n !== nome); });
    atual = nome;
    document.title = TITULOS[nome];
    marcarMenu(nome);

    var menu = document.getElementById('menu');
    var botao = document.getElementById('menu-botao');
    if (menu && botao) {
      menu.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
    }

    if (opcoes.periodo) aplicarFiltro(opcoes.periodo);
    if (opcoes.obra) abrirObra(opcoes.obra);
    if (!opcoes.manterPosicao) window.scrollTo(0, 0);
  }

  function irPara(nome, opcoes) {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '#' + ROTAS[nome]);
    }
    mostrar(nome, opcoes);
  }

  document.addEventListener('click', function (evento) {
    if (evento.defaultPrevented || evento.button !== 0) return;
    if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
    if (!evento.target || typeof evento.target.closest !== 'function') return;

    var link = evento.target.closest('a[href]');
    if (!link) return;

    var partes = (link.getAttribute('href') || '').match(/^\\.\\/([a-z]+\\.html)(?:\\?(.*))?$/);
    if (!partes || !mains[partes[1]]) return;

    evento.preventDefault();
    var busca = new URLSearchParams(partes[2] || '');
    irPara(partes[1], { periodo: busca.get('periodo'), obra: busca.get('obra') });
  });

  window.addEventListener('popstate', function () {
    mostrar(nomeDoEndereco(), {});
  });

  /* Ao fechar, a ficha devolve o título que a página tinha quando carregou —
     que aqui é o do documento inteiro, não o da galeria. Repõe o correto. */
  var ficha = document.getElementById('ficha');
  if (ficha && window.MutationObserver) {
    new MutationObserver(function () {
      if (ficha.hidden) document.title = TITULOS[atual];
    }).observe(ficha, { attributes: true, attributeFilter: ['hidden'] });
  }

  // Estado inicial: o endereço manda; sem ele, um link de obra abre a galeria.
  var busca = new URLSearchParams(window.location.search);
  var inicial = nomeDoEndereco();
  if (!window.location.hash && (busca.get('obra') || busca.get('periodo'))) {
    inicial = 'galeria.html';
  }
  mostrar(inicial, { manterPosicao: true });
})();
"""


def _entre(texto, abertura, fechamento):
    inicio = texto.index(abertura) + len(abertura)
    return texto[inicio:texto.index(fechamento, inicio)]


def montar_arquivo_unico():
    """Reúne as cinco páginas em um documento navegável."""
    paginas = {nome: ler(nome) for nome in PAGINAS}

    titulos = {nome: _entre(html, '<title>', '</title>').strip()
               for nome, html in paginas.items()}

    # Cada página vira um <main>; só um fica visível por vez.
    corpos = []
    for nome in PAGINAS:
        miolo = _entre(paginas[nome], '<main id="conteudo">', '</main>')
        corpos.append('<main class="pagina" data-pagina="%s"%s>%s</main>'
                      % (nome, '' if nome == 'index.html' else ' hidden', miolo))

    # A ficha e a lupa da galeria vivem fora do <main> e valem para o documento.
    extras = _entre(paginas['galeria.html'], '</footer>', '<script')

    html = paginas['index.html']
    main_original = '<main id="conteudo">%s</main>' % _entre(
        html, '<main id="conteudo">', '</main>')
    html = html.replace(
        main_original,
        '<div id="conteudo">\n%s\n</div>\n%s' % ('\n'.join(corpos), extras))

    html = html.replace('<title>%s</title>' % titulos['index.html'],
                        '<title>Amamentação e Arte</title>')

    # Estilo embutido, mais a garantia de que [hidden] vence qualquer display.
    css = embutir_fontes(ler('styles.css'))
    css += ('\n\n/* arquivo único: página inativa não ocupa espaço */\n'
            '[hidden] { display: none !important; }\n')
    html = html.replace('<link rel="stylesheet" href="./styles.css">',
                        '<style>\n%s\n</style>' % css)
    html = re.sub(r'\s*<link rel="preload" href="\./assets/fonts/[^>]+>', '', html)

    # Os scripts da página inicial dão lugar ao conjunto completo.
    roteador = (ROTEADOR
                .replace('__ROTAS__', json.dumps(ROTAS, ensure_ascii=False))
                .replace('__TITULOS__', json.dumps(titulos, ensure_ascii=False)))
    juntos = '\n'.join('<script>\n%s\n</script>' % ler(c) for c in SCRIPTS)
    bloco = juntos + '\n<script>\n' + roteador + '\n</script>\n'
    # lambda: o conteúdo dos scripts tem barras invertidas que re.sub
    # interpretaria como escapes se fosse passado como texto de substituição.
    html = re.sub(r'(<script src="\./[^"]+"></script>\s*)+', lambda _: bloco, html)

    return embutir_imagens(html)


def main():
    ap = argparse.ArgumentParser(description='Gera uma cópia portátil do site.')
    ap.add_argument('--destino', default=str(RAIZ / 'preview'), help='pasta de saída')
    ap.add_argument('--pagina', help='gera apenas esta página, sem navegação entre páginas')
    ap.add_argument('--unico', action='store_true',
                    help='reúne as cinco páginas em um HTML só, navegável')
    args = ap.parse_args()

    destino = pathlib.Path(args.destino)

    if args.unico:
        alvo = destino if destino.suffix == '.html' else destino / 'amamentacao-e-arte.html'
        alvo.parent.mkdir(parents=True, exist_ok=True)
        alvo.write_text(montar_arquivo_unico(), encoding='utf-8')
        print('%s (%.0f KB) — cinco páginas em um arquivo'
              % (alvo, alvo.stat().st_size / 1024))
        return

    if args.pagina:
        if args.pagina not in PAGINAS:
            sys.exit('página desconhecida: %s (esperado: %s)' % (args.pagina, ', '.join(PAGINAS)))
        alvo = destino if destino.suffix == '.html' else destino / args.pagina
        alvo.parent.mkdir(parents=True, exist_ok=True)
        alvo.write_text(montar_pagina(args.pagina, avulsa=True), encoding='utf-8')
        print('%s (%.0f KB)' % (alvo, alvo.stat().st_size / 1024))
        return

    destino.mkdir(parents=True, exist_ok=True)
    total = 0
    for nome in PAGINAS:
        caminho = destino / nome
        caminho.write_text(montar_pagina(nome), encoding='utf-8')
        tamanho = caminho.stat().st_size / 1024
        total += tamanho
        print('%-16s %6.0f KB' % (nome, tamanho))
    print('\n%d páginas em %s (%.1f MB no total)' % (len(PAGINAS), destino, total / 1024))


if __name__ == '__main__':
    main()
