#!/usr/bin/env python3
"""
Gera uma versão de página única do site, para compartilhar como preview.

O arquivo resultante embute folha de estilo, dados, script, fontes e imagens
em um único HTML, sem nenhuma requisição externa. Serve para enviar por e-mail,
hospedar em qualquer lugar ou abrir sem servidor local.

    python3 tools/gerar-preview.py [destino.html]

Padrão: preview/amamentacao-e-arte.html

Este arquivo é DERIVADO. Nunca edite o resultado: altere o projeto e gere de
novo. O site de trabalho continua sendo o index.html com arquivos separados.
"""

import base64
import pathlib
import re
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent

SCRIPTS = [
    'data/obras.js',
    'data/movimentos.js',
    'data/timeline.js',
    'data/referencias.js',
    'script.js',
]


def ler(caminho):
    return (RAIZ / caminho).read_text(encoding='utf-8')


def como_data_uri(caminho, mime):
    dados = (RAIZ / caminho).read_bytes()
    return 'data:%s;base64,%s' % (mime, base64.b64encode(dados).decode('ascii'))


def embutir_fontes(css):
    """Converte os @font-face locais em data URIs.

    Os subconjuntos latin-ext são descartados: o subconjunto latin já cobre
    todos os caracteres do português e o preview fica na metade do tamanho.
    """
    blocos = re.split(r'(?=@font-face)', css)
    saida = []
    for bloco in blocos:
        if '@font-face' not in bloco:
            saida.append(bloco)
            continue
        if 'latin-ext' in bloco:
            # remove o bloco, preservando o que vier depois dele
            fim = bloco.index('}') + 1
            saida.append(bloco[fim:])
            continue
        bloco = re.sub(
            r"url\('\./(assets/fonts/[^']+)'\)",
            lambda m: "url('%s')" % como_data_uri(m.group(1), 'font/woff2'),
            bloco,
        )
        saida.append(bloco)
    return ''.join(saida)


def embutir_imagens(texto):
    """Troca os caminhos de assets/*.svg por data URIs, no HTML e nos dados."""
    return re.sub(
        r"\./(assets/(?:obras|images|logos)/[\w\-.]+\.svg)",
        lambda m: como_data_uri(m.group(1), 'image/svg+xml'),
        texto,
    )


def corpo_do_html(html):
    """Extrai o conteúdo de <body>, sem as tags <script src>.

    O anfitrião do preview fornece o esqueleto <html>/<head>/<body>.
    """
    corpo = html.split('<body>', 1)[1].rsplit('</body>', 1)[0]
    return re.sub(r'\s*<script src="[^"]+"></script>', '', corpo).strip()


def main():
    destino = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else RAIZ / 'preview' / 'amamentacao-e-arte.html'
    destino.parent.mkdir(parents=True, exist_ok=True)

    css = embutir_fontes(ler('styles.css'))
    corpo = embutir_imagens(corpo_do_html(ler('index.html')))
    js = embutir_imagens('\n\n'.join(ler(caminho) for caminho in SCRIPTS))

    partes = [
        '<title>Amamentação e Arte — Acervo Digital Educativo</title>',
        '<style>\n%s\n</style>' % css,
        corpo,
        '<script>\n%s\n</script>' % js,
    ]
    destino.write_text('\n\n'.join(partes) + '\n', encoding='utf-8')

    tamanho = destino.stat().st_size / 1024
    print('%s (%.0f KB)' % (destino, tamanho))


if __name__ == '__main__':
    main()
