#!/usr/bin/env python3
"""
Gera os espaços reservados (placeholders) de imagem do acervo.

Enquanto as reproduções definitivas das obras não estiverem disponíveis e
autorizadas, o site exibe retângulos tipográficos neutros, com a proporção
aproximada de cada obra. Eles nunca simulam a obra: apenas reservam o espaço
e informam que a imagem está pendente.

Uso:
    python3 tools/gerar-placeholders.py

Os arquivos são gravados em assets/obras/ e assets/images/.
Substituir um placeholder por uma reprodução real NÃO exige rodar este script:
basta colocar o arquivo em assets/obras/ e atualizar os campos `imagem`,
`imagemStatus` e `altTexto` em data/obras.js (ver README.md).
"""

import pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent

# tom de fundo, tom da moldura interna, tom do texto
PALETAS = {
    "antiguidade": ("#DCD5C7", "#C4BBA9", "#6B6255"),
    "idade-media": ("#D6CFC4", "#BEB5A6", "#665D50"),
    "renascimento": ("#DED6C9", "#C6BCAB", "#6A6153"),
    "barroco": ("#D3C9B8", "#B9AD98", "#5F5749"),
    "rococo-neoclassicismo": ("#D9D4CB", "#C0B9AC", "#655E53"),
    "romantismo-realismo": ("#D5D2CC", "#BBB6AE", "#615D57"),
    "impressionismo": ("#DBD8D1", "#C1BDB3", "#63605A"),
    "modernismo": ("#D2D0CC", "#B7B4AF", "#5E5B57"),
    "contemporaneidade": ("#D8D7D4", "#BEBCB8", "#605E5B"),
    "editorial": ("#CFC7B8", "#B6AC99", "#5C554A"),
}

# Todas as obras do acervo possuem reprodução. Esta lista existe para o caso de
# uma obra nova entrar sem imagem: acrescente ("obra-99", "barroco", 1000, 1250)
# e aponte o campo `imagem` para o .svg gerado.
OBRAS = []

# id, paleta, largura, altura, legenda
AMBIENTES = [
    ("faixa-medicina", "romantismo-realismo", 1800, 900, "Imagem de apoio a definir"),
    ("faixa-contemporanea", "contemporaneidade", 1800, 900, "Imagem de apoio a definir"),
]

MODELO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="Espaço reservado para imagem">
  <defs>
    <pattern id="tramaP{uid}" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="16" stroke="{linha}" stroke-width="1" opacity="0.5"/>
    </pattern>
  </defs>
  <rect width="{w}" height="{h}" fill="{fundo}"/>
  <rect width="{w}" height="{h}" fill="url(#tramaP{uid})"/>
  <rect x="{mx}" y="{my}" width="{iw}" height="{ih}" fill="none" stroke="{linha}" stroke-width="2"/>
  <g fill="{texto}" text-anchor="middle" font-family="Lato, 'Helvetica Neue', Arial, sans-serif">
    <text x="{cx}" y="{cy}" font-size="{fs}" letter-spacing="{ls}">{rotulo}</text>
  </g>
</svg>
"""


def gerar(nome, paleta, w, h, rotulo, destino):
    fundo, linha, texto = PALETAS[paleta]
    margem_x = round(w * 0.06)
    margem_y = round(h * 0.06)
    corpo = MODELO.format(
        uid=nome.replace("-", ""),
        w=w,
        h=h,
        fundo=fundo,
        linha=linha,
        texto=texto,
        mx=margem_x,
        my=margem_y,
        iw=w - margem_x * 2,
        ih=h - margem_y * 2,
        cx=w // 2,
        cy=h // 2 + 8,
        fs=round(min(w, h) * 0.028),
        ls=round(min(w, h) * 0.006, 1),
        rotulo=rotulo,
    )
    caminho = destino / f"{nome}.svg"
    caminho.write_text(corpo, encoding="utf-8")
    return caminho


def main():
    pasta_obras = RAIZ / "assets" / "obras"
    pasta_imagens = RAIZ / "assets" / "images"
    pasta_obras.mkdir(parents=True, exist_ok=True)
    pasta_imagens.mkdir(parents=True, exist_ok=True)

    for nome, paleta, w, h in OBRAS:
        print(gerar(nome, paleta, w, h, "IMAGEM A INSERIR", pasta_obras).relative_to(RAIZ))

    print(gerar("sem-imagem", "editorial", 1000, 750, "IMAGEM INDISPONÍVEL", pasta_obras).relative_to(RAIZ))

    for nome, paleta, w, h, rotulo in AMBIENTES:
        print(gerar(nome, paleta, w, h, rotulo.upper(), pasta_imagens).relative_to(RAIZ))


if __name__ == "__main__":
    main()
