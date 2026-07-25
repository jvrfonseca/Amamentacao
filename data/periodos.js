/**
 * Percurso histórico — Amamentação e Arte
 *
 * Cada período gera uma seção do percurso cronológico. O campo `obras` aponta
 * para os `id` definidos em data/obras.js; a primeira obra listada é exibida
 * como obra principal do período.
 *
 * Os textos abaixo são de caráter introdutório e estão sujeitos a revisão
 * institucional. Afirmações que dependem de bibliografia específica devem ser
 * acompanhadas de referência antes da publicação definitiva.
 */

window.AcervoData = window.AcervoData || {};

window.AcervoData.periodos = [
  {
    id: 'antiguidade',
    titulo: 'Origens e sociedades antigas',
    intervalo: 'Da pré-história ao século V d.C.',
    introducao:
      'Antes de qualquer registro escrito sobre saúde infantil, a sobrevivência de um recém-nascido dependia inteiramente do leite humano. As primeiras imagens que associam mulheres, crianças e alimentação aparecem em objetos rituais, estatuetas e relevos, distribuídos por regiões e culturas sem contato entre si. A recorrência dessas representações indica que a amamentação era percebida como acontecimento fundamental, e não como detalhe da vida doméstica.',
    contextoMedico:
      'Na Antiguidade greco-romana, textos médicos já discutiam a alimentação do lactente. O tratado de ginecologia atribuído a Sorano de Éfeso, do século II d.C., trata do início da amamentação, do intervalo entre as mamadas, dos critérios para escolher uma ama de leite e do momento do desmame — indicando que o assunto era objeto de aconselhamento técnico, e não apenas de tradição familiar.',
    transformacao:
      'Ponto de partida do percurso: a amamentação aparece como condição de sobrevivência e como tema digno de representação.',
    reflexao:
      'O que significa encontrar imagens de amamentação em sociedades tão distantes entre si no tempo e no espaço?',
    obras: ['obra-01', 'obra-02']
  },
  {
    id: 'idade-media',
    titulo: 'Idade Média',
    intervalo: 'Séculos V–XV',
    introducao:
      'Na Europa medieval, a imagem da mulher que amamenta ganha função devocional. O tipo iconográfico da Virgo lactans difunde-se a partir do século XIII e associa a alimentação da criança à ideia de proteção e de humanidade compartilhada. Fora do universo religioso, iluminuras e cenas de manuscritos registram nascimentos e cuidados infantis — material ainda pouco explorado neste acervo.',
    contextoMedico:
      'A medicina do período retoma e comenta a herança greco-romana e árabe. Discutia-se a qualidade do leite, a alimentação e o comportamento da nutriz, os sinais de que uma ama seria adequada e o momento do desmame. A mortalidade infantil era elevada, e a alimentação do lactente figurava entre as principais preocupações práticas das famílias.',
    transformacao:
      'Em relação ao período anterior, a amamentação passa a ocupar lugar central na imagem religiosa europeia, com forte carga simbólica.',
    reflexao:
      'Quando uma prática cotidiana se torna imagem sagrada, o que se torna mais visível — e o que passa a ser difícil de representar?',
    obras: ['obra-03', 'obra-04']
  },
  {
    id: 'renascimento',
    titulo: 'Renascimento',
    intervalo: 'Séculos XV–XVI',
    introducao:
      'A pintura renascentista mantém o tema da mãe que amamenta, mas o trata com novos recursos: corpos individualizados, ambientes construídos, atenção ao gesto e à expressão. A cena torna-se mais humana e, ao mesmo tempo, mais idealizada. É também o momento em que a distância entre a imagem e a prática social se torna mais nítida nas cidades italianas.',
    contextoMedico:
      'A imprensa permite a circulação de tratados dedicados às doenças e ao regime alimentar das crianças. Entre as famílias abastadas das cidades italianas, o envio de recém-nascidos a amas de leite era prática corrente, com consequências reconhecidas sobre a sobrevivência dos lactentes — tema que a literatura médica retomaria com insistência nos séculos seguintes.',
    transformacao:
      'A representação se humaniza; simultaneamente, amplia-se a distância entre o ideal pintado e a organização real do cuidado infantil.',
    reflexao:
      'Uma imagem pode ser ao mesmo tempo mais realista na forma e mais idealizada no conteúdo?',
    obras: ['obra-05']
  },
  {
    id: 'idade-moderna',
    titulo: 'Idade Moderna',
    intervalo: 'Séculos XVII–XVIII',
    introducao:
      'A cena doméstica ganha espaço na pintura europeia, e com ela aparecem as figuras que organizavam concretamente o cuidado infantil — entre elas, a ama de leite. O período assiste a um debate público sobre quem deve amamentar, alimentado por médicos, filósofos e moralistas.',
    contextoMedico:
      'A crítica médica ao sistema de amas de leite se intensifica no século XVIII, associando-o ao excesso de mortalidade entre lactentes. Textos de grande circulação passam a defender a amamentação pela própria mãe. Essa prescrição, porém, encontrou realidades desiguais: para muitas mulheres, o trabalho fora de casa tornava a recomendação impraticável.',
    transformacao:
      'A amamentação deixa de ser assunto privado e torna-se objeto de debate público e de prescrição.',
    reflexao:
      'Quando uma recomendação de saúde ignora as condições materiais de quem deve segui-la, sobre quem recai a responsabilidade?',
    obras: ['obra-06', 'obra-07']
  },
  {
    id: 'seculo-xix',
    titulo: 'Século XIX',
    intervalo: '1801–1900',
    introducao:
      'A industrialização e o crescimento das cidades transformam a organização familiar e as condições de trabalho das mulheres. A arte do período registra o cuidado cotidiano com atenção inédita, sobretudo em obras de artistas que fizeram da vida doméstica seu tema principal.',
    contextoMedico:
      'É o século em que a pediatria se constitui como especialidade e em que a mortalidade infantil urbana se torna problema público. Surgem os primeiros substitutos industriais do leite materno, as consultas de lactentes e os serviços de distribuição de leite. Alimentar uma criança passa a envolver, de forma crescente, instituições, indústria e Estado.',
    transformacao:
      'A alimentação infantil deixa de depender apenas do leite humano: aparecem alternativas industriais e, com elas, novos riscos e novas disputas.',
    reflexao:
      'O que se ganha e o que se perde quando o cuidado infantil passa a ser acompanhado por instituições?',
    obras: ['obra-08']
  },
  {
    id: 'seculo-xx',
    titulo: 'Século XX',
    intervalo: '1901–2000',
    introducao:
      'O século XX reúne, em torno da amamentação, fotografia documental, publicidade, campanhas sanitárias e políticas públicas. As imagens deixam de circular apenas em museus e passam a ocupar cartazes, jornais e materiais educativos. No Brasil, o período também traz à tona a memória das amas de leite escravizadas e libertas.',
    contextoMedico:
      'Após décadas de queda nas taxas de aleitamento em várias regiões do mundo, organismos internacionais passam a atuar de forma coordenada: normas sobre a comercialização de substitutos do leite materno, iniciativas de apoio hospitalar e programas nacionais de incentivo. A amamentação passa a ser tratada como questão de saúde pública, e não apenas como decisão individual.',
    transformacao:
      'A amamentação entra na agenda internacional de saúde pública e torna-se objeto de regulação.',
    reflexao:
      'Por que foi necessário criar normas internacionais para proteger uma prática tão antiga?',
    obras: ['obra-09', 'obra-10', 'obra-11']
  },
  {
    id: 'contemporaneidade',
    titulo: 'Contemporaneidade',
    intervalo: 'Século XXI',
    introducao:
      'As representações contemporâneas da amamentação circulam sobretudo em fotografia, publicidade e redes digitais. Convivem imagens de idealização, campanhas de saúde, registros documentais e disputas sobre a exposição do corpo. Esta seção do acervo está em curadoria.',
    contextoMedico:
      'A recomendação atual de organismos internacionais é de aleitamento materno exclusivo nos primeiros seis meses de vida, com continuidade acompanhada de alimentação complementar. O debate contemporâneo trata de licença-maternidade, apoio no retorno ao trabalho, bancos de leite humano, assistência qualificada, desigualdade de acesso e respeito às diferentes experiências e possibilidades de cada família.',
    transformacao:
      'A discussão desloca-se do dever individual para as condições sociais que tornam a amamentação possível — ou impossível.',
    reflexao:
      'Que condições concretas precisam existir para que amamentar seja uma escolha, e não uma imposição ou um privilégio?',
    obras: ['obra-12']
  }
];
