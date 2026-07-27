#!/usr/bin/env python3
"""
Gera uma cópia portátil do site, com tudo embutido em cada arquivo.

Cada página vira um HTML autônomo — estilo, dados, scripts, fontes e imagens
como data URIs, sem nenhuma requisição externa. Os links entre as páginas
continuam funcionando, então a pasta gerada é uma cópia navegável do site que
pode ser compactada, enviada por e-mail ou hospedada em qualquer lugar.

    python3 tools/gerar-preview.py
    python3 tools/gerar-preview.py --pagina galeria.html   # uma página avulsa
    python3 tools/gerar-preview.py --destino /caminho/

Padrão: preview/

Os arquivos gerados são DERIVADOS. Nunca os edite: altere o projeto e gere de
novo. O site de trabalho continua sendo o conjunto de arquivos separados.

As reproduções são reduzidas apenas na cópia; os originais não são tocados.
"""

import argparse
import base64
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


def main():
    ap = argparse.ArgumentParser(description='Gera uma cópia portátil do site.')
    ap.add_argument('--destino', default=str(RAIZ / 'preview'), help='pasta de saída')
    ap.add_argument('--pagina', help='gera apenas esta página, sem navegação entre páginas')
    args = ap.parse_args()

    destino = pathlib.Path(args.destino)

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
