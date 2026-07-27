#!/usr/bin/env python3
"""
Gera as miniaturas usadas na grade da galeria.

A grade carrega miniaturas leves; a reprodução em tamanho cheio só é buscada
quando o visitante abre a ficha da obra. Isso mantém a galeria rápida mesmo
com muitas obras.

    python3 tools/gerar-miniaturas.py            # gera o que estiver faltando
    python3 tools/gerar-miniaturas.py --forcar   # refaz todas

Origem : assets/obras/<id>.jpg
Destino: assets/obras/thumbs/<id>.jpg

Depende de PyMuPDF (`pip install pymupdf`). Sem ele, o script avisa e não
grava nada — a galeria continua funcionando, apenas usando as imagens cheias.
"""

import argparse
import pathlib
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
ORIGEM = RAIZ / 'assets' / 'obras'
DESTINO = ORIGEM / 'thumbs'
LARGURA = 700
QUALIDADE = 78


def main():
    ap = argparse.ArgumentParser(description='Gera miniaturas para a grade da galeria.')
    ap.add_argument('--forcar', action='store_true', help='refaz miniaturas já existentes')
    args = ap.parse_args()

    try:
        import fitz
    except ImportError:
        sys.exit('PyMuPDF não encontrado. Instale com: pip install pymupdf')

    DESTINO.mkdir(parents=True, exist_ok=True)
    feitas = 0

    for origem in sorted(ORIGEM.glob('*.jpg')):
        destino = DESTINO / origem.name
        if destino.exists() and not args.forcar:
            continue

        documento = fitz.open(str(origem))
        pagina = documento[0]
        escala = min(1.0, LARGURA / pagina.rect.width)
        pix = pagina.get_pixmap(matrix=fitz.Matrix(escala, escala))
        destino.write_bytes(pix.tobytes('jpeg', jpg_quality=QUALIDADE))
        documento.close()

        feitas += 1
        print('%s  %d×%d  %.0f KB' % (destino.relative_to(RAIZ), pix.width, pix.height,
                                      destino.stat().st_size / 1024))

    print('\n%d miniatura(s) gerada(s).' % feitas if feitas else '\nNada a fazer.')


if __name__ == '__main__':
    main()
