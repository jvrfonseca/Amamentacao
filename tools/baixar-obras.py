#!/usr/bin/env python3
"""
Baixa as reproduções em domínio público do Wikimedia Commons.

Este script precisa ser executado em uma máquina com acesso à internet. Para
cada obra do acervo com reprodução livre conhecida, ele:

  1. procura o arquivo no Wikimedia Commons;
  2. baixa uma versão de até 1600 px;
  3. grava em assets/obras/<id>.jpg;
  4. lê autoria, licença e fonte dos metadados do próprio Commons;
  5. atualiza `imagem`, `imagemStatus` e `creditoImagem` em data/obras.js;
  6. escreve o relatório assets/obras/CREDITOS.md.

Uso:
    python3 tools/baixar-obras.py                  # baixa tudo o que falta
    python3 tools/baixar-obras.py --simular        # só mostra o que faria
    python3 tools/baixar-obras.py --obra obra-17   # uma obra específica
    python3 tools/baixar-obras.py --forcar         # rebaixa o que já existe

IMPORTANTE
----------
A busca é automática e pode trazer o arquivo errado — sobretudo em obras com
muitas versões e cópias. **Confira cada imagem** contra o relatório
CREDITOS.md antes de qualquer publicação. O script nunca inventa crédito:
tudo o que ele grava vem dos metadados do Commons.

As obras ainda protegidas por direitos autorais NÃO são baixadas. O script
lista quais são e por quê.
"""

import argparse
import json
import pathlib
import re
import sys
import time
import urllib.parse
import urllib.request

RAIZ = pathlib.Path(__file__).resolve().parent.parent
PASTA_OBRAS = RAIZ / 'assets' / 'obras'
ARQUIVO_DADOS = RAIZ / 'data' / 'obras.js'
API = 'https://commons.wikimedia.org/w/api.php'
LARGURA = 1600
AGENTE = 'AmamentacaoEArte/1.0 (projeto educativo; contato a definir)'

# id da obra → termo de busca no Commons.
# Os termos usam o título original e o nome do artista, que é como os arquivos
# costumam estar catalogados.
BUSCAS = {
    'obra-01': 'Lupa Capitolina Musei Capitolini bronze',
    'obra-02': 'Isis lactans Horus bronze statuette Egypt',
    'obra-03': 'Ambrogio Lorenzetti Madonna del Latte',
    'obra-05': 'Madonna Litta Leonardo da Vinci Hermitage',
    'obra-13': 'Jean Fouquet Melun Diptych Virgin and Child angels',
    'obra-14': 'Andrea Solario Vierge au coussin vert Louvre',
    'obra-15': 'Giorgione La Tempesta Accademia',
    'obra-16': 'Tintoretto Origin of the Milky Way National Gallery',
    'obra-17': 'Rubens El nacimiento de la Via Lactea Prado',
    'obra-18': 'Caravaggio Sette opere di Misericordia Napoli',
    'obra-19': 'Rubens Roman Charity Cimon Pero',
    'obra-06': 'Etienne Aubry Les adieux a la nourrice',
    'obra-20': 'Jean-Baptiste Greuze La Mere bien-aimee',
    'obra-21': 'Vigee Le Brun autoportrait avec sa fille Julie Louvre',
    'obra-22': 'Jean-Francois Millet La Becquee',
    'obra-09': 'Lucilio de Albuquerque Mae Preta 1912',
    'obra-08': 'Mary Cassatt Maternal Caress drypoint',
    'obra-24': "Mary Cassatt The Child's Bath Art Institute Chicago",
    'obra-23': 'Berthe Morisot Le Berceau Orsay',
    'obra-25': 'Renoir Maternite Aline nursing child',
    'obra-26': 'Gustav Klimt The Three Ages of Woman',
    'obra-27': 'Kathe Kollwitz Frau mit totem Kind 1903',
    'obra-11': 'Dorothea Lange Migrant Mother 1936',
}

# Obras deliberadamente não baixadas, com o motivo exibido ao usuário.
NAO_BAIXAR = {
    'obra-04': 'obra ainda não identificada — escolher a iluminura antes',
    'obra-07': 'obra específica de Marguerite Gérard ainda não identificada',
    'obra-10': 'Tarsila do Amaral (1897–1973): protegida por direitos autorais',
    'obra-28': 'Candido Portinari (1903–1962): protegido por direitos autorais',
    'obra-12': 'obra contemporânea ainda não selecionada',
}


# --------------------------------------------------------------------------
# Wikimedia Commons
# --------------------------------------------------------------------------

def consultar(parametros):
    parametros = dict(parametros, format='json', action='query')
    url = API + '?' + urllib.parse.urlencode(parametros)
    pedido = urllib.request.Request(url, headers={'User-Agent': AGENTE})
    with urllib.request.urlopen(pedido, timeout=60) as resposta:
        return json.loads(resposta.read().decode('utf-8'))


def procurar_arquivo(termo):
    """Devolve os dados do primeiro arquivo de imagem que corresponder ao termo."""
    dados = consultar({
        'generator': 'search',
        'gsrsearch': 'filetype:bitmap ' + termo,
        'gsrnamespace': '6',
        'gsrlimit': '1',
        'prop': 'imageinfo',
        'iiprop': 'url|extmetadata|size',
        'iiurlwidth': str(LARGURA),
    })
    paginas = (dados.get('query') or {}).get('pages') or {}
    for pagina in paginas.values():
        info = (pagina.get('imageinfo') or [None])[0]
        if info:
            return pagina.get('title', ''), info
    return None, None


def texto_do_metadado(extra, chave):
    valor = (extra.get(chave) or {}).get('value', '')
    valor = re.sub(r'<[^>]+>', ' ', valor)          # remove marcação HTML
    valor = re.sub(r'\s+', ' ', valor).strip()
    return valor


def montar_credito(titulo_arquivo, info):
    """Monta a linha de crédito exclusivamente a partir dos metadados."""
    extra = info.get('extmetadata') or {}
    partes = []

    autor = texto_do_metadado(extra, 'Artist')
    if autor:
        partes.append(autor)

    instituicao = texto_do_metadado(extra, 'Credit')
    if instituicao and instituicao.lower() not in ('own work',):
        partes.append(instituicao)

    licenca = texto_do_metadado(extra, 'LicenseShortName')
    if licenca:
        partes.append('Licença: ' + licenca)

    partes.append('Via Wikimedia Commons, ' + info.get('descriptionurl', ''))
    return '. '.join(p for p in partes if p) + '.'


def baixar(url, destino):
    pedido = urllib.request.Request(url, headers={'User-Agent': AGENTE})
    with urllib.request.urlopen(pedido, timeout=180) as resposta:
        destino.write_bytes(resposta.read())
    return destino.stat().st_size


# --------------------------------------------------------------------------
# Atualização de data/obras.js
# --------------------------------------------------------------------------

def texto_js(valor):
    """Escapa um valor para string JavaScript entre aspas simples."""
    return valor.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ')


def limites_do_registro(fonte, obra_id):
    marca = "id: '%s'" % obra_id
    inicio = fonte.index(marca)
    proximo = fonte.find("\n    id: '", inicio + len(marca))
    return inicio, (proximo if proximo != -1 else len(fonte))


def definir_campo(bloco, campo, valor):
    """Substitui `campo: '...'` dentro de um registro, mesmo em várias linhas."""
    padrao = re.compile(r"(%s:\s*)(?:\n\s*)?'(?:[^'\\]|\\.)*'" % re.escape(campo))
    if not padrao.search(bloco):
        raise KeyError('campo %s não encontrado no registro' % campo)
    return padrao.sub(lambda m: "%s'%s'" % (m.group(1), texto_js(valor)), bloco, count=1)


def atualizar_dados(fonte, obra_id, caminho_imagem, credito):
    inicio, fim = limites_do_registro(fonte, obra_id)
    bloco = fonte[inicio:fim]
    bloco = definir_campo(bloco, 'imagem', caminho_imagem)
    bloco = definir_campo(bloco, 'imagemStatus', 'definitiva')
    bloco = definir_campo(bloco, 'creditoImagem', credito)
    return fonte[:inicio] + bloco + fonte[fim:]


# --------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(description='Baixa reproduções em domínio público do Wikimedia Commons.')
    ap.add_argument('--obra', help='baixa apenas o id indicado (ex.: obra-17)')
    ap.add_argument('--simular', action='store_true', help='mostra o que faria, sem gravar nada')
    ap.add_argument('--forcar', action='store_true', help='rebaixa mesmo se o arquivo já existir')
    args = ap.parse_args()

    alvos = {args.obra: BUSCAS[args.obra]} if args.obra else dict(BUSCAS)
    if args.obra and args.obra not in BUSCAS:
        motivo = NAO_BAIXAR.get(args.obra, 'id desconhecido')
        sys.exit('%s não é baixável: %s' % (args.obra, motivo))

    PASTA_OBRAS.mkdir(parents=True, exist_ok=True)
    fonte = ARQUIVO_DADOS.read_text(encoding='utf-8')
    relatorio = []
    baixadas = 0

    for obra_id, termo in alvos.items():
        destino = PASTA_OBRAS / ('%s.jpg' % obra_id)
        if destino.exists() and not args.forcar:
            print('· %-9s já existe, pulando (use --forcar para rebaixar)' % obra_id)
            continue

        print('· %-9s procurando: %s' % (obra_id, termo))
        try:
            titulo, info = procurar_arquivo(termo)
        except Exception as erro:                      # rede, API fora do ar
            print('  ! falha na consulta: %s' % erro)
            continue

        if not info:
            print('  ! nada encontrado — ajuste o termo em BUSCAS e rode de novo')
            continue

        url = info.get('thumburl') or info.get('url')
        credito = montar_credito(titulo, info)
        print('  → %s' % titulo)

        if args.simular:
            print('    (simulação) gravaria %s' % destino.relative_to(RAIZ))
            print('    crédito: %s' % credito[:110])
            continue

        try:
            tamanho = baixar(url, destino)
        except Exception as erro:
            print('  ! falha no download: %s' % erro)
            continue

        fonte = atualizar_dados(fonte, obra_id, './assets/obras/%s.jpg' % obra_id, credito)
        relatorio.append((obra_id, titulo, info.get('descriptionurl', ''), credito))
        baixadas += 1
        print('  ✓ %s (%.0f KB)' % (destino.relative_to(RAIZ), tamanho / 1024))
        time.sleep(0.5)                                 # cortesia com a API

    if not args.simular and baixadas:
        ARQUIVO_DADOS.write_text(fonte, encoding='utf-8')
        escrever_relatorio(relatorio)
        print('\n%d imagem(ns) baixada(s). data/obras.js e CREDITOS.md atualizados.' % baixadas)
        print('CONFIRA cada imagem antes de publicar: a busca é automática e pode errar.')

    if NAO_BAIXAR and not args.obra:
        print('\nNão baixadas de propósito:')
        for obra_id, motivo in NAO_BAIXAR.items():
            print('  %-9s %s' % (obra_id, motivo))


def escrever_relatorio(itens):
    caminho = PASTA_OBRAS / 'CREDITOS.md'
    linhas = [
        '# Créditos das reproduções',
        '',
        'Gerado por `tools/baixar-obras.py` a partir dos metadados do Wikimedia Commons.',
        'Confira cada item: a busca é automática e pode ter trazido o arquivo errado.',
        '',
    ]
    if caminho.exists():
        anterior = caminho.read_text(encoding='utf-8')
        corpo = anterior.split('\n---\n', 1)[-1] if '\n---\n' in anterior else ''
        linhas.append(corpo.strip())
        linhas.append('')
    linhas.append('---')
    linhas.append('')
    for obra_id, titulo, pagina, credito in itens:
        linhas.append('## %s' % obra_id)
        linhas.append('')
        linhas.append('- Arquivo no Commons: %s' % titulo)
        linhas.append('- Página: %s' % pagina)
        linhas.append('- Crédito gravado: %s' % credito)
        linhas.append('')
    caminho.write_text('\n'.join(linhas), encoding='utf-8')


if __name__ == '__main__':
    main()
