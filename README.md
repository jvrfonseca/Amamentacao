# Amamentação e Arte

**Acervo Digital Educativo sobre Arte, História e Medicina**

Exposição digital que reúne obras artísticas, imagens históricas e documentos visuais
relacionados à amamentação, à maternidade, ao cuidado e à saúde materno-infantil. O
objetivo não é montar uma galeria de arte: é usar as imagens como fontes para
compreender como diferentes sociedades representaram, organizaram e interpretaram uma
prática que acompanha a humanidade desde seus períodos mais antigos.

O percurso proposto ao visitante é sempre o mesmo:

> observar a obra → compreender o contexto histórico → identificar relações sociais →
> conectar com a medicina → refletir sobre o presente

---

## Estado desta versão

Esta é a **primeira versão funcional**, feita para ser apresentada, avaliada e revisada.
A estrutura técnica está completa; o conteúdo é parcialmente provisório.

Três estados de conteúdo convivem no site e são **sempre distinguidos na interface**:

| Estado | Como aparece | Significado |
| --- | --- | --- |
| Confirmado | sem selo | conferido em fonte institucional ou bibliográfica |
| Provisório | selo `a confirmar` / `dados a confirmar` / `Texto provisório` | plausível, ainda não conferido |
| Ausente | "Título a confirmar", "Contexto em pesquisa", "Referências em atualização" | informação inexistente — não foi inventada |

Nada foi preenchido por dedução visual. Onde não havia informação verificável, o campo
ficou explicitamente vazio.

---

## Organização por movimentos artísticos

O acervo é organizado por **movimento/estilo**, em ordem cronológica — percorrer os
estilos é também percorrer a história. São nove seções:

| Movimento | Recorte | Obras |
| --- | --- | --- |
| Arte da Antiguidade | até séc. V | 2 |
| Arte medieval e gótica | séc. V–XV | 2 |
| Renascimento e Maneirismo | séc. XV–XVI | 5 |
| Barroco | séc. XVII | 3 |
| Rococó e Neoclassicismo | séc. XVIII | 4 |
| Romantismo, Realismo e pintura acadêmica | séc. XIX e início do XX | 2 |
| Impressionismo e pós-impressionismo | fim do séc. XIX | 4 |
| Modernismo e fotografia documental | 1ª metade do séc. XX | 5 |
| Arte contemporânea | pós-guerra ao presente | 1 |

Cada obra tem dois campos de classificação estilística:

- `movimento` — o `id` que a posiciona no percurso e no filtro (um por obra);
- `estilo` — a denominação precisa exibida na ficha, por exemplo "Barroco flamengo",
  "Gótico — escola sienesa", "Secessão vienense / Simbolismo".

Movimento e estilo não coincidem sempre: obras de datas próximas podem pertencer a
escolas distintas, e a pintura acadêmica brasileira do início do século XX está no
movimento "Romantismo, Realismo e pintura acadêmica" ainda que produzida em 1912.

---

## Como abrir o site

O site é HTML, CSS e JavaScript puros, sem build e sem dependências. Basta abrir
`index.html` no navegador — inclusive com duplo clique, já que os dados são carregados
por `<script>` comuns e as fontes estão no próprio projeto.

Para o comportamento mais próximo do ambiente real, use um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse **http://localhost:8000**.

### Gerar uma versão de página única (para enviar ou apresentar)

```bash
python3 tools/gerar-preview.py
```

Gera `preview/amamentacao-e-arte.html`: um único arquivo com estilo, dados, script,
fontes e imagens embutidos, sem nenhuma requisição externa. Serve para enviar por
e-mail, abrir com duplo clique em qualquer computador ou hospedar em qualquer lugar.

O arquivo é **derivado**: nunca o edite. Altere o projeto e gere de novo.

---

## Trazer as reproduções das obras

O acervo mostra espaços reservados até que as reproduções sejam incorporadas. Para as
obras em domínio público isso é automático — **execute em uma máquina com internet**:

```bash
python3 tools/baixar-obras.py --simular    # mostra o que seria baixado
python3 tools/baixar-obras.py              # baixa de fato
```

O script busca cada obra no Wikimedia Commons, baixa uma versão de até 1600 px para
`assets/obras/<id>.jpg`, lê autoria, licença e fonte dos metadados do próprio Commons e
atualiza `imagem`, `imagemStatus` e `creditoImagem` em `data/obras.js`. Também escreve
`assets/obras/CREDITOS.md` com o arquivo e a página de origem de cada imagem.

**Confira cada imagem antes de publicar.** A busca é automática e pode trazer o arquivo
errado, sobretudo nas obras com várias versões e cópias (Rubens *Caridade Romana*,
Renoir, Vigée Le Brun, Kollwitz, Millet). Para refazer uma só:

```bash
python3 tools/baixar-obras.py --obra obra-17 --forcar
```

Se o resultado não corresponder à obra, ajuste o termo no dicionário `BUSCAS`, no topo
do script, e rode de novo.

### O que o script não baixa, e por quê

| Obra | Motivo |
| --- | --- |
| `obra-10` Tarsila do Amaral | direitos autorais vigentes (falecimento em 1973) |
| `obra-28` Candido Portinari | direitos autorais vigentes (falecimento em 1962) |
| `obra-04` iluminura medieval | obra ainda não identificada |
| `obra-07` Marguerite Gérard | obra específica ainda não identificada |
| `obra-12` obra contemporânea | seleção ainda não feita |

As duas primeiras exigem autorização dos detentores dos direitos e da instituição
depositária. As três últimas exigem decisão de curadoria antes de qualquer download.

### Inserir uma imagem manualmente

Vale para qualquer obra, inclusive as de fora do Commons: siga
"Trocar um espaço reservado pela reprodução real", mais abaixo.

---

## Estrutura dos arquivos

```
index.html                  estrutura e todo o conteúdo institucional fixo
styles.css                  sistema de design completo (tokens + componentes)
script.js                   comportamento: filtros, busca, modal, linha do tempo
data/
  obras.js                  acervo de obras + rótulos das categorias
  movimentos.js             percurso por movimentos artísticos (9 movimentos)
  timeline.js               linha do tempo + tipos de marco
  referencias.js            bibliografia e documentos
assets/
  obras/                    imagens das obras (hoje: espaços reservados .svg)
  images/                   imagens de abertura e faixas
  fonts/                    Crimson Text e Lato (woff2, servidas localmente)
  logos/                    favicon
  icons/                    (reservado)
tools/
  baixar-obras.py           baixa as reproduções em domínio público do Commons
  gerar-placeholders.py     gera os espaços reservados de imagem
  gerar-preview.py          empacota o site em um único HTML autônomo
README.md
```

Conteúdo, estilo, comportamento e dados estão separados. **Não** adicione CSS ou
JavaScript dentro do `index.html`.

---

## Tarefas frequentes

### Adicionar uma obra

Abra `data/obras.js`, copie um bloco inteiro e ajuste. Campos mínimos: `id`, `titulo`,
`artista`, `ano`, `movimento`, `imagem`, `categorias`.

```js
{
  id: 'obra-13',
  titulo: 'Título da obra',
  tituloOriginal: '',
  artista: 'Nome do artista',
  ano: 'Ano ou período',
  movimento: 'barroco',                // deve existir em data/movimentos.js
  estilo: 'Barroco flamengo',          // denominação precisa, exibida na ficha
  tecnica: 'Óleo sobre tela',
  localizacao: 'Museu ou coleção',
  imagem: './assets/obras/obra-13.jpg',
  imagemStatus: 'definitiva',          // 'placeholder' enquanto não houver reprodução
  altTexto: 'Descrição objetiva do que se vê.',
  creditoImagem: 'Crédito da reprodução.',
  categorias: ['barroco', 'pintura', 'maternidade'],
  palavrasChave: ['amamentação', 'cuidado'],
  destaque: false,                     // true = aparece em "Obras em destaque"
  verificacao: 'confirmado',           // ou 'a-confirmar'
  notaVerificacao: '',                 // o que ainda precisa ser conferido
  descricaoVisual: 'Camada 2 — só o que está visível.',
  contextoHistorico: 'Camada 3.',
  relacaoMedicina: 'Camada 4.',
  reflexao: 'Camada 5 — pergunta aberta.',
  fontes: [{ titulo: '', instituicao: '', ano: '', url: '' }],
  referencias: ['ref-fildes-1986']     // ids de data/referencias.js
}
```

O card na galeria, a ficha completa, os filtros, a busca e a seção de reflexões são
gerados a partir daí. Não crie cards à mão no HTML.

### Trocar um espaço reservado pela reprodução real

1. Coloque o arquivo em `assets/obras/` (minúsculas, sem espaços, com hífens:
   `obra-amamentacao-renascimento-01.jpg`).
2. Em `data/obras.js`, atualize `imagem`, mude `imagemStatus` para `'definitiva'` e
   escreva o `altTexto`.
3. Preencha `creditoImagem`.

Sobre o `altTexto`: descreva **apenas o que está visível** — nunca interprete a obra e
nunca use o nome do arquivo. Enquanto `imagemStatus` for `'placeholder'`, o site gera
sozinho um texto alternativo dizendo que a imagem ainda não está disponível.

Os arquivos `.svg` de reserva podem ser regenerados com
`python3 tools/gerar-placeholders.py` (proporções e tons ficam no topo do script).
Nunca sobrescreva um arquivo original de obra.

### Editar movimentos artísticos

`data/movimentos.js`. Cada movimento tem `titulo`, `intervalo`, `estiloResumo`,
`introducao`, `contextoMedico`, `transformacao`, `reflexao` e a lista `obras` (a
primeira é exibida como obra principal). O menu de movimentos, a navegação interna e o
filtro do acervo se atualizam sozinhos.

Mantenha o array em ordem cronológica: é ela que define a sequência das seções. Ao criar
um movimento novo, acrescente o mesmo `id` em `window.AcervoData.categorias.movimentos`
(fim de `data/obras.js`), senão ele não aparece nos filtros.

### Adicionar um marco à linha do tempo

`data/timeline.js`. Use `tipo` entre `arte`, `historia`, `medicina`, `sociedade`,
`religiao`, `saude-publica`, e marque `verificacao: 'a-confirmar'` enquanto a fonte não
for conferida — o selo aparece automaticamente. Os filtros por categoria são montados a
partir dos tipos efetivamente usados.

### Inserir referências

`data/referencias.js`. Preencha `url` com o endereço exato do documento consultado (não
com a home da instituição) e use `estado: 'em-levantamento'` enquanto a referência
estiver incompleta. Para vincular uma referência a uma obra, cite o `id` no array
`referencias` da obra.

### Alterar categorias dos filtros

No fim de `data/obras.js`, em `window.AcervoData.categorias` (movimentos, temas e
linguagens). Os `id` usados ali são os mesmos que devem aparecer no array `categorias`
de cada obra. O `id` de movimento precisa estar em três lugares coerentes: no campo
`movimento` da obra, no array `categorias` da obra e na lista `categorias.movimentos`.

### Alterar perguntas reflexivas

Campo `reflexao` de cada obra (`data/obras.js`) e de cada movimento (`data/movimentos.js`).
A seção "Reflexões" exibe as seis primeiras perguntas de obras.

### Alterar textos institucionais

Estão diretamente no `index.html`, marcados com `<!-- TODO: ... -->`. As seções que
aguardam texto definitivo são: abertura (hero), "Sobre o projeto" e os créditos.

### Trocar a imagem principal

Substitua `assets/images/hero.svg` (ou aponte o `src` da `<img>` da seção `.hero` para o
novo arquivo, em `index.html`) e atualize a legenda `hero__credit` com título, autoria e
crédito reais. Escolha uma obra que represente a proposta do projeto — não uma imagem
qualquer por ser bonita.

### Alterar cores e tipografia

Tudo em `:root`, no início de `styles.css`: `--cor-*`, `--fonte-*`, `--texto-*`,
`--esp-*`, `--largura-*`. Evite valores soltos fora dessas variáveis.

As fontes (Crimson Text e Lato, SIL Open Font License 1.1) são servidas de
`assets/fonts/`, nos subconjuntos `latin` e `latin-ext`. Para trocar de família,
substitua os `@font-face` no topo de `styles.css` e as duas variáveis `--fonte-*`.

---

## Referência visual

O design segue o PDF de referência fornecido (conceito de site de arte, estudo de caso
em formato de apresentação). Foram adotados dele:

- coluna branca de conteúdo sobre fundo neutro, formando moldura;
- paleta quase monocromática, para que a cor venha das obras;
- Crimson Text (títulos) e Lato (texto e interface), a mesma dupla do estudo;
- títulos de seção serifados terminados em ponto;
- faixas de imagem em largura total com título claro sobreposto;
- tira horizontal de obras em destaque com legenda curta sob cada imagem;
- grade de galeria assimétrica e escalonada, em vez de cards uniformes;
- ficha da obra em painel branco: imagem à esquerda, texto à direita, "fechar ✕" no alto.

Foram deliberadamente adaptados: paleta levemente amornada (bege/marfim em vez do cinza
puro), rótulos de camadas e selos de verificação — elementos que a referência não tem e
que o caráter acadêmico deste projeto exige.

---

## Acessibilidade

- HTML semântico, hierarquia de títulos consistente, link "Pular para o conteúdo";
- navegação completa por teclado, foco sempre visível (nunca removido sem substituto);
- menu mobile com `aria-expanded` / `aria-controls`, que fecha ao escolher um item;
- ficha da obra com `role="dialog"`, `aria-modal`, foco preso enquanto aberta, fechamento
  por botão, `Esc` e clique fora, rolagem de fundo bloqueada e foco devolvido ao card;
- setas ← / → navegam entre obras na ficha aberta;
- contador de resultados anunciado por `aria-live`;
- categorias da linha do tempo diferenciadas por rótulo textual e sinal gráfico, nunca só
  por cor;
- `prefers-reduced-motion` respeitado (animações desligadas);
- áreas clicáveis com no mínimo 38–44 px.

## Desempenho

Sem frameworks e sem bibliotecas. `loading="lazy"` e `decoding="async"` fora da primeira
dobra, fontes locais com `font-display: swap` e `preload` das duas mais usadas, evento de
rolagem com `requestAnimationFrame`, revelação de seções por `IntersectionObserver`,
proporções declaradas para evitar deslocamento de layout. Toda a galeria é montada a
partir dos dados, de modo que o acervo pode crescer sem mudanças no HTML.

---

## Pendências para a próxima etapa

**Conteúdo — obrigatório antes de qualquer publicação**

0. **Conferir o acervo contra a lista de referência do projeto.** A seleção de obras foi
   feita por curadoria a partir de obras canônicas sobre amamentação, maternidade e
   cuidado: o documento de referência indicado pela coordenação (link do Canva) não pôde
   ser acessado no ambiente em que o site foi construído. É necessário comparar as duas
   listas e sinalizar o que deve ser acrescentado, substituído ou removido. As dezesseis
   obras acrescentadas nesta etapa são: Fouquet, Solario, Giorgione, Tintoretto, Rubens
   (duas), Caravaggio, Greuze, Vigée Le Brun, Millet, Morisot, Cassatt (*O banho da
   criança*), Renoir, Klimt, Kollwitz e Portinari.
1. Reproduções das obras: nenhuma imagem real foi incorporada ainda. Para as 23 obras em
   domínio público, rode `python3 tools/baixar-obras.py` em uma máquina com internet e
   confira cada resultado. Para Tarsila do Amaral e Portinari, é preciso obter
   autorização dos detentores dos direitos.
2. Obra de abertura: definir qual obra representa o projeto e substituir o espaço
   reservado do hero.
3. Registros incompletos por decisão editorial: `obra-04` (iluminura medieval),
   `obra-07` (Marguerite Gérard), `obra-10` (Tarsila do Amaral), `obra-28` (Portinari)
   e `obra-12` (contemporânea) estão com descrição, contexto e relação com a medicina
   em pesquisa.
4. Datações e coleções marcadas "a confirmar" nas demais obras — conferir na ficha da
   instituição depositária. Atenção especial às obras com múltiplas versões conhecidas
   (Rubens, *Caridade Romana*; Renoir, *Maternidade*; Vigée Le Brun; Kollwitz; Millet):
   é preciso identificar exatamente qual versão será reproduzida.
5. Bibliografia sobre amas de leite escravizadas e libertas no Brasil (`ref-brasil-amas`):
   levantamento indispensável para os textos das obras 09 e 10.
6. Linha do tempo: os marcos com selo "a confirmar" precisam de fonte documental; os
   campos `url` das fontes estão vazios de propósito.
7. Texto institucional: apresentação, objetivos, justificativa, metodologia, equipe,
   coordenação, instituição, parceiros e contato — todos com placeholder.
8. Normalização bibliográfica (ABNT, Vancouver ou APA) ainda não foi escolhida.
9. URL canônica e imagem de compartilhamento (Open Graph) são provisórias.

**Técnico**

- Não há imagens em `srcset`: quando houver reproduções em mais de uma resolução, gerar as
  variantes e preencher o atributo.
- A ficha da obra é um modal; se o acervo crescer muito, avaliar migrar para rotas
  próprias por obra (melhor para compartilhamento e indexação).
- Não há testes automatizados. A verificação desta versão foi feita manualmente em
  navegador (desktop, tablet e celular), incluindo teclado, filtros, busca, estado vazio,
  modal e ausência de erros de console e de rolagem horizontal.

---

## Compromissos editoriais do projeto

Estes princípios guiaram a redação e devem guiar as próximas revisões:

- a amamentação é tratada como presença histórica contínua, não como tendência recente;
- obras de arte não são tratadas como registro literal da realidade — a seção "Arte como
  documento da saúde" explicita os limites dessa leitura;
- a experiência da amamentação não é idealizada: cuidado e vínculo aparecem ao lado de
  trabalho, dor, dificuldade, desigualdade e imposição;
- o site não culpabiliza nem moraliza escolhas individuais, e reconhece que as condições
  para amamentar sempre foram distribuídas de forma desigual;
- não há recomendação clínica individualizada; o aviso de finalidade educativa está na
  seção "Hoje" e no rodapé;
- nenhuma informação histórica, médica, institucional ou de crédito foi inventada para
  preencher espaço vazio.

---

Projeto de finalidade educativa, sem fins comerciais.
Instituição, coordenação e equipe **a confirmar**.
