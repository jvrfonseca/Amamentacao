/**
 * Percurso por movimentos e estilos artísticos — Amamentação e Arte
 *
 * A organização é simultaneamente estilística e cronológica: cada movimento
 * ocupa um momento histórico, de modo que percorrer os estilos é também
 * percorrer a história. O campo `obras` aponta para os `id` de data/obras.js;
 * a primeira obra listada é exibida como obra principal do movimento.
 *
 * Ao acrescentar um movimento, mantenha a ordem cronológica do array — ela
 * define a ordem das seções e da navegação.
 *
 * Os textos são introdutórios e estão sujeitos a revisão institucional.
 */

window.AcervoData = window.AcervoData || {};

window.AcervoData.movimentos = [
  {
    id: 'antiguidade',
    titulo: 'Arte da Antiguidade',
    intervalo: 'Da pré-história ao século V',
    estiloResumo: 'Arte egípcia, etrusca, grega e romana',
    introducao:
      'Antes de qualquer registro escrito sobre saúde infantil, a sobrevivência de um recém-nascido dependia inteiramente do leite humano. As primeiras imagens que associam mulheres, crianças e alimentação aparecem em estatuetas votivas, relevos e objetos rituais, em regiões e culturas sem contato entre si. A recorrência dessas representações indica que a amamentação era percebida como acontecimento fundamental, e não como detalhe da vida doméstica.',
    contextoMedico:
      'Na Antiguidade greco-romana, textos médicos já discutiam a alimentação do lactente. O tratado de ginecologia atribuído a Sorano de Éfeso, do século II d.C., trata do início da amamentação, do intervalo entre as mamadas, dos critérios para escolher uma ama de leite e do momento do desmame — indício de que o assunto era objeto de aconselhamento técnico, e não apenas de tradição familiar.',
    transformacao:
      'Ponto de partida do percurso: a amamentação aparece como condição de sobrevivência e como tema digno de representação.',
    reflexao:
      'O que significa encontrar imagens de amamentação em sociedades tão distantes entre si no tempo e no espaço?',
    obras: ['obra-01', 'obra-02']
  },

  {
    id: 'idade-media',
    titulo: 'Arte medieval e gótica',
    intervalo: 'Séculos V–XV',
    estiloResumo: 'Bizantino, românico, gótico e gótico internacional',
    introducao:
      'Na Europa medieval, a imagem da mulher que amamenta ganha função devocional. O tipo iconográfico da Virgo lactans — a Virgem que amamenta — difunde-se a partir do século XIII, em painéis de fundo dourado, sem profundidade e sem ambiente naturalista: o que importa não é a cena verossímil, mas o vínculo representado.',
    contextoMedico:
      'A medicina do período retoma e comenta a herança greco-romana e árabe. Discutia-se a qualidade do leite, a alimentação e o comportamento da nutriz, os sinais de que uma ama seria adequada e o momento do desmame. A mortalidade infantil era elevada, e a alimentação do lactente figurava entre as principais preocupações práticas das famílias.',
    transformacao:
      'A amamentação passa a ocupar lugar central na imagem religiosa europeia, com forte carga simbólica e pouca preocupação naturalista.',
    reflexao:
      'Quando uma prática cotidiana se torna imagem sagrada, o que se torna mais visível — e o que passa a ser difícil de representar?',
    obras: ['obra-03']
  },

  {
    id: 'renascimento',
    titulo: 'Renascimento e Maneirismo',
    intervalo: 'Séculos XV–XVI',
    estiloResumo: 'Renascimento italiano e flamengo, Maneirismo',
    introducao:
      'O Renascimento mantém o tema da mãe que amamenta, mas o trata com novos recursos: perspectiva, volume, corpos individualizados, ambientes construídos e atenção ao gesto. A cena torna-se mais humana e, ao mesmo tempo, mais idealizada. Ao lado das madonas, reaparecem temas da mitologia clássica em que o leite explica a origem do mundo — e, no Maneirismo, composições mais dinâmicas e artificiais.',
    contextoMedico:
      'A imprensa permite a circulação de tratados dedicados às doenças e ao regime alimentar das crianças. Entre as famílias abastadas das cidades italianas, o envio de recém-nascidos a amas de leite era prática corrente, com consequências reconhecidas sobre a sobrevivência dos lactentes — tema que a literatura médica retomaria com insistência nos séculos seguintes.',
    transformacao:
      'A representação se humaniza; simultaneamente, amplia-se a distância entre o ideal pintado e a organização real do cuidado infantil.',
    reflexao:
      'Uma imagem pode ser ao mesmo tempo mais realista na forma e mais idealizada no conteúdo?',
    obras: ['obra-05', 'obra-13', 'obra-14', 'obra-15', 'obra-16']
  },

  {
    id: 'barroco',
    titulo: 'Barroco',
    intervalo: 'Século XVII',
    estiloResumo: 'Barroco italiano, flamengo e espanhol',
    introducao:
      'O Barroco trabalha com contrastes intensos de luz e sombra, diagonais, corpos em movimento e apelo direto ao observador. Neste acervo o período é representado pela via do mito: o leite aparece como matéria capaz de originar o mundo, em composição de grande escala destinada à decoração palaciana. Outros usos barrocos do tema — em especial a Caridade Romana, em que uma mulher amamenta um adulto — não integram esta seleção.',
    contextoMedico:
      'A prática de entregar recém-nascidos a amas de leite permanece difundida na Europa, com forte diferenciação social. Multiplicam-se as instituições que recebiam crianças abandonadas — as casas de expostos e a "roda" —, cuja sobrevivência dependia de conseguir nutrizes. Os registros dessas instituições estão entre as fontes mais utilizadas por historiadores para estimar a mortalidade infantil do período.',
    transformacao:
      'O leite deixa de ser apenas símbolo devocional e passa a encenar o mito, em grande escala e com dramaticidade deliberada.',
    reflexao:
      'Por que o leite materno serviu, na pintura erudita do período, para explicar a própria origem do mundo?',
    obras: ['obra-17']
  },

  {
    id: 'rococo-neoclassicismo',
    titulo: 'Rococó e Neoclassicismo',
    intervalo: 'Século XVIII',
    estiloResumo: 'Rococó, pintura de gênero sentimental, Neoclassicismo',
    introducao:
      'A cena doméstica ganha espaço na pintura europeia, tratada ora com leveza decorativa, ora com sentimentalismo moralizante. Aparecem as figuras que organizavam concretamente o cuidado infantil — entre elas, a ama de leite. O período assiste a um debate público sobre quem deve amamentar, alimentado por médicos, filósofos e moralistas, e a pintura participa desse debate: a mãe que amamenta é apresentada como modelo de virtude.',
    contextoMedico:
      'A crítica médica ao sistema de amas de leite se intensifica, associando-o ao excesso de mortalidade entre lactentes enviados para longe das famílias. Textos de grande circulação passam a defender a amamentação pela própria mãe. Essa prescrição, porém, encontrou realidades desiguais: para muitas mulheres, o trabalho tornava a recomendação impraticável.',
    transformacao:
      'A amamentação deixa de ser assunto privado e torna-se objeto de debate público, de prescrição médica e de encenação moral.',
    reflexao:
      'Quando uma recomendação de saúde ignora as condições materiais de quem deve segui-la, sobre quem recai a responsabilidade?',
    obras: ['obra-06', 'obra-20', 'obra-21']
  },

  {
    id: 'romantismo-realismo',
    titulo: 'Romantismo, Realismo e pintura acadêmica',
    intervalo: 'Século XIX e início do XX',
    estiloResumo: 'Romantismo, Realismo, academismo',
    introducao:
      'O Realismo dirige o olhar para o trabalho, a pobreza e a vida rural, e trata a alimentação das crianças como questão material, não como alegoria. A pintura acadêmica, por sua vez, permanece ativa até o início do século XX, inclusive no Brasil, onde produz imagens que registram — e ao mesmo tempo idealizam — a herança da escravidão nas relações de cuidado.',
    contextoMedico:
      'A industrialização e a urbanização transformam as condições de trabalho das mulheres e a organização familiar. A mortalidade infantil urbana torna-se problema público. Surgem os primeiros substitutos industriais do leite materno e, com eles, novos riscos: sem água segura e sem refrigeração, a alimentação artificial esteve associada a graves quadros de diarreia e desnutrição.',
    transformacao:
      'A alimentação infantil deixa de depender apenas do leite humano — e as desigualdades sociais que a determinam tornam-se visíveis na própria pintura.',
    reflexao:
      'O que uma cena de cuidado revela sobre as condições materiais de quem cuida?',
    obras: ['obra-22', 'obra-09']
  },

  {
    id: 'impressionismo',
    titulo: 'Impressionismo e pós-impressionismo',
    intervalo: 'Décadas finais do século XIX',
    estiloResumo: 'Impressionismo, pós-impressionismo, gravura moderna',
    introducao:
      'O Impressionismo abandona o tema histórico e volta-se para a vida moderna e privada. Mulheres artistas do grupo — que tinham acesso restrito aos espaços públicos onde seus colegas pintavam — fizeram do interior doméstico seu campo de trabalho, e transformaram o banho, o colo, o sono e a amamentação em assunto pictórico legítimo, observado de perto e sem solenidade.',
    contextoMedico:
      'É o período em que a pediatria se constitui como especialidade. Organizam-se consultas de lactentes, serviços de distribuição de leite e campanhas de higiene infantil nas grandes cidades europeias e norte-americanas. Alimentar uma criança passa a envolver, de forma crescente, instituições, indústria e Estado.',
    transformacao:
      'O cuidado cotidiano torna-se tema central, observado por quem o vivia de perto — e não mais apenas alegoria religiosa ou moral.',
    reflexao:
      'O que muda quando o cuidado infantil deixa de ser assunto exclusivamente doméstico e passa a ser objeto de acompanhamento médico?',
    obras: ['obra-08', 'obra-24', 'obra-23', 'obra-25']
  },

  {
    id: 'modernismo',
    titulo: 'Modernismo',
    intervalo: 'Início do século XX',
    estiloResumo: 'Simbolismo, Secessão vienense, expressionismo alemão',
    introducao:
      'Os modernismos rompem com a representação naturalista e tratam a maternidade em chave simbólica e política. A pintura vienense a inscreve num ciclo de vida que vai da infância à velhice; a gravura expressionista alemã abandona de vez a serenidade e representa a perda. É o momento em que a arte deixa de idealizar a maternidade — e em que o corpo que cuida aparece envelhecido, exausto ou em luto.',
    contextoMedico:
      'Após décadas de queda nas taxas de aleitamento em vários países, organismos internacionais passam a atuar de forma coordenada. A mortalidade infantil torna-se indicador central de saúde pública, e a desnutrição infantil, objeto de programas de Estado.',
    transformacao:
      'A imagem da maternidade deixa de ser necessariamente serena: o envelhecimento, a exaustão e o luto entram no campo do representável.',
    reflexao:
      'O que uma imagem de luto acrescenta ao que os indicadores de mortalidade infantil já informam?',
    obras: ['obra-26', 'obra-27']
  },

];
