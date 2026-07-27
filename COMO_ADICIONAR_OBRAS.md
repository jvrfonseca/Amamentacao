# Como adicionar uma obra

Guia para quem vai manter o acervo. Não é preciso conhecer o site inteiro: a
galeria, os filtros, a busca, a ficha individual, a página de história e os
créditos são todos gerados a partir de **um único arquivo**.

Você nunca escreve HTML para acrescentar uma obra.

---

## Resumo em três passos

1. Coloque a imagem em `assets/obras/` com o nome `obra-XX.jpg`.
2. Rode `python3 tools/gerar-miniaturas.py` para criar a versão leve da grade.
3. Acrescente um objeto ao array em `data/obras.js`.

Recarregue o site e a obra estará na galeria, no lugar cronológico correto.

---

## 1. Onde colocar a imagem

```
assets/obras/obra-29.jpg          ← a reprodução, em tamanho cheio
assets/obras/thumbs/obra-29.jpg   ← a miniatura (gerada pelo script)
```

Regras para o nome do arquivo: letras minúsculas, sem espaços, sem acentos,
palavras separadas por hífen. O padrão do projeto é `obra-` seguido do próximo
número livre.

**Nunca sobrescreva um arquivo existente.** Se precisar substituir uma
reprodução por outra melhor, apague a antiga e a miniatura correspondente e
gere tudo de novo.

## 2. Formato, dimensões e otimização

| Item | Recomendação |
| --- | --- |
| Formato | JPEG. É o que as fontes de domínio público fornecem e o que o gerador de miniaturas lê. |
| Largura da imagem cheia | entre 1200 e 2200 px. Abaixo de 1000 px a ampliação fica pobre; acima de 2500 px o ganho é imperceptível e o site fica pesado. |
| Miniatura | 700 px de largura, gerada automaticamente — não faça à mão. |
| Peso da imagem cheia | idealmente abaixo de 800 KB. |
| Recorte | **não recorte a obra.** A grade se adapta a qualquer proporção e nunca corta a imagem. |

Para gerar a miniatura:

```bash
python3 tools/gerar-miniaturas.py            # só as que faltam
python3 tools/gerar-miniaturas.py --forcar   # refaz todas
```

O script depende de PyMuPDF (`pip install pymupdf`). Sem ele o site continua
funcionando — a grade simplesmente usa a imagem cheia, ficando mais pesada.

## 3. Onde inserir os dados

Abra **`data/obras.js`** e acrescente um objeto ao array. A posição no arquivo
não importa: a ordenação é feita pelo campo `anoInicial`.

## 4. Campos obrigatórios

| Campo | O que é |
| --- | --- |
| `id` | identificador único, sem espaços. Ex.: `'obra-29'` |
| `slug` | usado no endereço da obra. Mantenha igual ao `id`, salvo motivo forte |
| `titulo` | título em português |
| `artista` | autoria. Se desconhecida, escreva `'Autoria desconhecida'` |
| `data` | a datação **como será exibida**. Ex.: `'c. 1640'`, `'1776 (a confirmar)'` |
| `anoInicial` | número usado para ordenar. Use `null` se a datação for desconhecida |
| `periodo` | um `id` de `data/periodos.js` — veja o passo 7 |
| `imagem` | `'./assets/obras/obra-29.jpg'` |
| `miniatura` | `'./assets/obras/thumbs/obra-29.jpg'` |
| `altTexto` | descrição do que se vê, para quem não enxerga a imagem |
| `publicado` | `true` para aparecer no site |

Sobre o **`altTexto`**: descreva a cena, não repita o título. "Pintura de uma
mulher sentada amamentando uma criança em um interior escuro" serve; "Madonna
Litta" não serve. Não interprete a obra aqui — isso é papel dos outros campos.

## 5. Campos opcionais

Todos podem ficar como `''` (texto vazio), `null` ou `[]`. **Quando um campo
está vazio, a interface simplesmente não exibe aquela linha** — não aparece
título solto nem espaço em branco.

| Campo | Observação |
| --- | --- |
| `tituloOriginal` | título na língua original, se diferente |
| `anoFinal` | para obras com intervalo de datação |
| `movimento` | denominação estilística precisa: `'Barroco flamengo'`, `'Impressionismo'` |
| `tecnica`, `dimensoes` | ficha técnica |
| `localizacao`, `instituicao` | onde a obra está. `instituicao` tem prioridade na exibição |
| `descricao` | o que se vê, em prosa objetiva |
| `contextoHistorico` | o período, a sociedade, as condições de vida |
| `contextoArtistico` | escola, encomenda, atribuição, comparação com outras obras |
| `relacaoComAmamentacao` | por que esta obra pertence a este acervo |
| `perguntaReflexao` | veja o passo 8 |
| `notaVerificacao` | o que ainda precisa ser conferido. Aparece assinalado na ficha |
| `palavrasChave` | array de termos que alimentam a busca |
| `fonteImagem` | crédito da reprodução: autoria da foto, licença, página de origem |
| `fontesInformacoes` | array de `{ titulo, instituicao, ano, url }` |
| `referencias` | array de `id` de `data/referencias.js` |
| `destaque` | veja o passo 10 |

## 6. Regra editorial

**Não preencha um campo por dedução.** Se você não sabe a data, não estime.
Deixe `data: 'Data a confirmar'`, `anoInicial: null` e explique em
`notaVerificacao` o que falta apurar.

O site foi construído para lidar com informação incompleta de forma honesta.
Um campo vazio é melhor do que um campo inventado.

## 7. Como definir o período histórico

Os períodos estão em **`data/periodos.js`**, em ordem cronológica:

| `id` | Título exibido |
| --- | --- |
| `antiguidade` | Antiguidade |
| `idade-media` | Idade Média |
| `renascimento` | Renascimento |
| `barroco` | Barroco |
| `setecentos-oitocentos` | Séculos XVIII e XIX |
| `moderna` | Arte moderna e contemporânea |

O período é **cronológico**, não estilístico. Uma pintura acadêmica de 1912
entra em `moderna`, ainda que o estilo seja oitocentista — a distinção fina vai
no campo `movimento`.

Os filtros da galeria são gerados a partir daqui: **um período sem nenhuma obra
publicada não aparece como filtro**, então nunca haverá um botão que devolve
zero resultados.

Para criar um período novo, acrescente um objeto a `data/periodos.js` na
posição cronológica correta, com `id`, `titulo`, `intervalo`, `narrativa`,
`comoAparece` e `contextoMedico`. A página História e Arte cria a seção sozinha.

## 8. Como escrever a pergunta de reflexão

A pergunta não deve pedir que o visitante descreva o que vê — isso o campo
`descricao` já faz. Ela deve abrir uma questão histórica, médica, cultural ou
social.

Boas direções:

- O que esta imagem revela sobre a maneira como a maternidade era compreendida?
- A amamentação aparece aqui como cuidado íntimo, dever social ou símbolo religioso?
- O que mudou — e o que permaneceu — na forma como esse gesto é observado hoje?
- Quem é o sujeito desta cena e quem permanece invisível nela?
- Como o conhecimento médico da época pode ter influenciado esta representação?

Evite perguntas retóricas com resposta óbvia e evite perguntas que julguem
escolhas individuais.

## 9. Como evitar IDs repetidos

Antes de escolher um `id`, confira o maior número em uso:

```bash
grep -o "id: 'obra-[0-9]*'" data/obras.js | sort -u | tail -3
```

Um `id` repetido faz a obra sumir da ficha individual e quebra o link
compartilhável. **Sempre use um número novo**, mesmo que outro tenha sido
liberado por uma remoção.

## 10. Como marcar uma obra como destaque

```js
destaque: true
```

A página inicial exibe **uma** obra em destaque: a primeira marcada assim, na
ordem cronológica. A página História e Arte usa a marcação para escolher a
imagem representativa de cada período.

Marcar várias obras não quebra nada — apenas a primeira aparece na inicial.

## 11. Como publicar ou ocultar uma obra

```js
publicado: true    // aparece no site
publicado: false   // some do site inteiro, mas o registro é preservado
```

Use `publicado: false` para obras cujos direitos ainda não foram autorizados ou
cuja pesquisa não terminou. É preferível a apagar o registro: o trabalho já
feito fica guardado.

## 12. Como testar

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000` e confira:

- [ ] a obra aparece na galeria, na posição cronológica certa;
- [ ] a imagem carrega na grade e na ficha ampliada;
- [ ] o filtro do período dela devolve a obra;
- [ ] a busca encontra pelo título e pelo artista;
- [ ] a ficha abre e não mostra linhas vazias;
- [ ] o endereço `galeria.html?obra=<id>` abre direto na obra;
- [ ] o console do navegador não acusa erro (F12 → Console).

---

## Exemplo completo

```js
{
  id: 'obra-29',
  slug: 'obra-29',
  titulo: 'A ama de leite',
  tituloOriginal: 'La Nourrice',
  artista: 'Nome do artista',
  data: 'c. 1780',
  anoInicial: 1780,
  anoFinal: 1780,
  periodo: 'setecentos-oitocentos',
  movimento: 'Pintura de gênero francesa',
  tecnica: 'Óleo sobre tela',
  dimensoes: '',
  localizacao: '',
  instituicao: 'Instituição a confirmar',
  imagem: './assets/obras/obra-29.jpg',
  miniatura: './assets/obras/thumbs/obra-29.jpg',
  altTexto: 'Pintura de uma mulher sentada junto a uma janela, amamentando uma criança enrolada em panos claros.',
  descricao: 'Descrição objetiva do que está visível na cena.',
  contextoHistorico: 'O período, a organização social, as condições de vida.',
  contextoArtistico: '',
  relacaoComAmamentacao: 'Por que esta obra interessa à história do aleitamento.',
  perguntaReflexao: 'Quem, nesta sociedade, podia amamentar o próprio filho?',
  notaVerificacao: 'Datação, dimensões e coleção pendentes de conferência.',
  palavrasChave: ['ama de leite', 'frança', 'século xviii'],
  fonteImagem: 'Autoria da fotografia, licença e página de origem.',
  fontesInformacoes: [
    { titulo: 'Ficha da obra', instituicao: 'Museu', ano: '', url: '' }
  ],
  referencias: ['ref-fildes-1988'],
  destaque: false,
  publicado: true
}
```

---

## Onde mais o conteúdo aparece

Ao acrescentar uma obra, estes lugares se atualizam sozinhos:

- a grade e o contador da **galeria**;
- os **filtros** por período;
- a **busca**;
- a **ficha individual** e seu link compartilhável;
- a contagem de obras por período na página **História e Arte**;
- a lista de **créditos por obra** em Sobre o Projeto;
- os totais exibidos na página **inicial**.

Só três coisas continuam sendo escritas à mão, e de propósito, por serem
decisões editoriais:

1. **A imagem do hero**, em `index.html` — é uma escolha curatorial.
2. **Os textos dos períodos**, em `data/periodos.js`.
3. **Os marcos cronológicos**, em `data/marcos.js`.
