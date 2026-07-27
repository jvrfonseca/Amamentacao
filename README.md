# Amamentação e Arte

**Acervo Digital Educativo sobre Arte, História e Medicina**

A amamentação não é apenas um fenômeno biológico nem um tema restrito à saúde
materno-infantil. Ela acompanha a história da humanidade e reaparece na medicina,
na cultura, na religião, nas relações sociais e nas artes visuais. Este site reúne
obras que permitem observar essas conexões.

O site cumpre três funções:

1. explicar por que a amamentação importa para a medicina e para a saúde;
2. mostrar como ela atravessou diferentes períodos e foi representada artisticamente;
3. disponibilizar a galeria completa das obras do projeto.

---

## Estrutura do site

Cinco áreas, sem submenus:

| Página | Papel |
| --- | --- |
| `index.html` | Início — apresentação, três caminhos de exploração, uma obra em destaque |
| `medicina.html` | Amamentação e Medicina — criança, mulher, dimensão coletiva, limites da orientação |
| `historia.html` | História e Arte — narrativa por períodos, marcos cronológicos, limites da leitura |
| `galeria.html` | Galeria — todas as obras, filtros, busca e ficha individual |
| `sobre.html` | Sobre o Projeto — objetivo, escopo, direitos das imagens, referências |

---

## Arquivos

```
index.html  medicina.html  historia.html  galeria.html  sobre.html
styles.css                  sistema visual completo (um arquivo, sem build)

js/
  comum.js                  cabeçalho, menu, ano, revelação, utilidades compartilhadas
  galeria.js                grade, filtros, busca, ficha da obra, ampliação, link direto
  paginas.js                obra em destaque, períodos, marcos, créditos, referências

data/
  obras.js                  FONTE ÚNICA das obras
  periodos.js               períodos históricos: filtros, ordenação e narrativa
  marcos.js                 linha cronológica de arte, sociedade e medicina
  referencias.js            bibliografia

assets/
  obras/                    reproduções em tamanho cheio
  obras/thumbs/             miniaturas da grade (geradas)
  fonts/                    Crimson Text e Lato (woff2, servidas localmente)
  logos/                    favicon

tools/
  gerar-miniaturas.py       cria as miniaturas da grade
  baixar-obras.py           busca reproduções em domínio público no Wikimedia Commons
  gerar-placeholders.py     gera a imagem de reserva para falhas de carregamento
  gerar-preview.py          empacota o site em um único HTML autônomo

COMO_ADICIONAR_OBRAS.md     guia de manutenção do acervo
```

Conteúdo, estilo, comportamento e dados são separados. **Não** acrescente CSS ou
JavaScript dentro dos arquivos HTML.

---

## Como abrir

HTML, CSS e JavaScript puros — sem build, sem dependências, sem instalação.

```bash
python3 -m http.server 8000
```

Depois acesse **http://localhost:8000**.

Abrir `index.html` com duplo clique também funciona para a maior parte do site,
mas a galeria depende de parâmetros de endereço; para testar links de obra use o
servidor local.

### Cópia portátil

```bash
python3 tools/gerar-preview.py
```

Gera a pasta `preview/` com as cinco páginas, cada uma autônoma: estilo, dados,
fontes e imagens embutidos, sem nenhuma requisição externa. Os links entre as
páginas continuam funcionando, então a pasta é uma cópia navegável do site.

```bash
python3 tools/gerar-preview.py --unico     # as cinco páginas em um arquivo só
python3 tools/gerar-preview.py --pagina galeria.html   # uma página avulsa
```

O modo `--unico` produz um HTML único e navegável: cada página vira um `<main>`
e a troca é feita no próprio navegador, por um roteador que só existe nessa
cópia. Serve para quando é preciso entregar **um endereço** em vez de uma pasta.

Os arquivos de `preview/` são **derivados**: nunca os edite. Altere o projeto e
gere de novo.

---

## Como adicionar uma obra

Leia **[COMO_ADICIONAR_OBRAS.md](./COMO_ADICIONAR_OBRAS.md)**. Em resumo:

1. coloque a imagem em `assets/obras/obra-XX.jpg`;
2. rode `python3 tools/gerar-miniaturas.py`;
3. acrescente um objeto ao array de `data/obras.js`.

Nenhum HTML é escrito à mão. A galeria, os filtros, a busca, a ficha individual,
os créditos e as contagens saem todos desse arquivo.

---

## Modelo de dados

Cada obra é um objeto em `data/obras.js`. Os campos que comandam a interface:

| Campo | Efeito |
| --- | --- |
| `periodo` | posiciona a obra no filtro e na página História e Arte |
| `anoInicial` | define a ordenação cronológica; `null` quando a datação é desconhecida |
| `publicado` | `false` remove a obra do site sem apagar o registro |
| `destaque` | habilita a obra a ser a destacada na página inicial |
| `slug` | compõe o endereço próprio da obra |

Campos vazios não geram linhas vazias na interface: a ficha só exibe o que existe.

A lista completa de campos, com obrigatórios e opcionais, está em
COMO_ADICIONAR_OBRAS.md.

---

## Endereço próprio de cada obra

Cada obra pode ser compartilhada por um link:

```
galeria.html?obra=obra-17
```

O link abre a galeria já com a ficha da obra aberta e ajusta o título da aba. A
página História e Arte usa o mesmo mecanismo para filtrar por período:

```
galeria.html?periodo=barroco
```

**Limite conhecido:** como o site é estático e sem etapa de build, a descrição de
compartilhamento (Open Graph) é a da galeria, não a da obra específica. Resolver
isso exigiria gerar um arquivo HTML por obra, o que contraria o requisito de
acrescentar obras editando apenas o arquivo de dados.

---

## Escopo do acervo

O recorte foi fechado a partir das obras efetivamente disponíveis:

- **Tempo:** da Antiguidade ao início do século XX — a obra mais recente é de 1912.
- **Linguagens:** pintura, escultura e gravura.
- **Geografia:** predominantemente europeia — Egito antigo, Itália, França,
  Flandres, Áustria e Alemanha —, com uma obra brasileira.

Ficam de fora a fotografia, a arte contemporânea e as tradições visuais de fora do
eixo mediterrâneo e europeu. O site declara isso em Sobre o Projeto: são ausências
que dizem respeito à formação deste acervo, não à história da amamentação.

---

## Acessibilidade

- HTML semântico, um `h1` por página, hierarquia de títulos sem saltos;
- link "Pular para o conteúdo" em todas as páginas;
- navegação completa por teclado, foco sempre visível;
- menu e filtros com `aria-expanded` / `aria-controls`;
- ficha da obra com `role="dialog"`, `aria-modal`, foco preso, fechamento por
  botão, `Escape` e clique fora, rolagem de fundo bloqueada e foco devolvido;
- setas ← / → navegam entre obras; a imagem ampliada fecha com `Escape`;
- contador de resultados anunciado por `aria-live`;
- textos alternativos que descrevem a cena, não repetem o título;
- `prefers-reduced-motion` respeitado.

## Desempenho

Sem frameworks e sem bibliotecas. A grade carrega miniaturas de 700 px
(≈900 KB no total); a reprodução cheia só é buscada quando a ficha abre.
`loading="lazy"` e `decoding="async"` fora da primeira dobra, fontes locais com
`font-display: swap` e `preload` das duas mais usadas, rolagem com
`requestAnimationFrame`.

---

## Pendências

1. **Créditos individuais das imagens.** As 20 reproduções vieram do Wikimedia
   Commons, mas o campo `fonteImagem` traz um texto genérico. É preciso registrar,
   obra a obra, a autoria da fotografia, a licença e a URL de origem. **Não publique
   sem isso.**
2. **Texto institucional.** Apresentação, objetivos, metodologia, equipe,
   coordenação, instituição e contato seguem como placeholder em `sobre.html`,
   marcados com `TODO` e com o selo "Texto provisório".
3. **Fontes da página de medicina.** O conteúdo é qualitativo por decisão editorial
   — nenhum número, percentual ou recomendação clínica foi inserido —, mas cada
   bloco precisa das referências que a coordenação adotar.
4. **`obra-06` é uma gravura de reprodução**, não a pintura de Étienne Aubry.
   Decidir se o acervo exibe a gravura, registrando gravador e coleção, ou se busca
   a pintura original.
5. **Datações e coleções** marcadas "a confirmar" nas fichas — conferir junto às
   instituições depositárias.
6. **Normalização bibliográfica** (ABNT, Vancouver ou APA) ainda não escolhida.
7. **URL canônica e imagem de compartilhamento** são provisórias.

---

## Compromissos editoriais

- a amamentação é tratada como presença histórica contínua, não como tendência;
- obras de arte não são registro literal da realidade — a página História e Arte
  explicita os limites dessa leitura;
- informação documentada, leitura da obra e pergunta em aberto são visualmente
  distintas em cada ficha;
- o site não culpabiliza nem moraliza escolhas individuais, e reconhece que as
  condições para amamentar sempre foram distribuídas de forma desigual;
- não há recomendação clínica individualizada;
- nenhuma informação histórica, médica, institucional ou de crédito foi inventada
  para preencher espaço vazio. Campo sem informação fica vazio, e a interface
  simplesmente não o exibe.

---

Projeto educativo, sem fins comerciais.
Instituição, coordenação e equipe **a confirmar**.
