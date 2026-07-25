/**
 * Acervo de obras — Amamentação e Arte
 *
 * COMO USAR
 * ---------
 * Cada objeto deste array gera automaticamente um card na galeria e uma ficha
 * completa na visualização ampliada. Para acrescentar uma obra, copie um bloco
 * inteiro, altere o `id` e preencha os campos. Ver README.md ("Como adicionar
 * uma obra").
 *
 * CAMPO `verificacao`
 * -------------------
 *  "confirmado"  → identificação conferida em fonte institucional.
 *  "a-confirmar" → há campos ainda pendentes de conferência. A interface exibe
 *                  um selo discreto avisando o visitante.
 *
 * CAMPO `imagemStatus`
 * --------------------
 *  "placeholder" → o arquivo em `imagem` é apenas um espaço reservado gráfico.
 *  "definitiva"  → o arquivo é a reprodução da obra; use também `altTexto`.
 *
 * REGRA EDITORIAL
 * ---------------
 * Nenhum campo deve ser preenchido por dedução visual. Quando a informação não
 * existir, utilize os textos neutros: "Título a confirmar", "Autoria a
 * confirmar", "Data a confirmar", "Contexto em pesquisa", "Referências em
 * atualização".
 */

window.AcervoData = window.AcervoData || {};

window.AcervoData.obras = [
  {
    id: 'obra-01',
    titulo: 'Loba Capitolina',
    tituloOriginal: 'Lupa Capitolina',
    artista: 'Autoria desconhecida',
    ano: 'Datação em debate',
    periodo: 'antiguidade',
    tecnica: 'Bronze fundido',
    localizacao: 'Musei Capitolini, Roma',
    imagem: './assets/obras/obra-01.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Escultura em bronze de uma loba em pé, com duas crianças sentadas sob seu ventre em posição de amamentação.',
    creditoImagem: 'Crédito da reprodução a inserir. A obra pertence ao acervo dos Musei Capitolini, Roma.',
    categorias: ['antiguidade', 'escultura', 'mito-fundacao', 'infancia'],
    palavrasChave: ['amamentação', 'aleitamento', 'roma', 'mito', 'bronze', 'nutrição', 'sobrevivência'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'A datação do bronze é objeto de controvérsia acadêmica: durante muito tempo atribuído à arte etrusca (séculos V–IV a.C.), foi posteriormente datado por análises técnicas como possivelmente medieval. As figuras dos gêmeos são acréscimo renascentista. Este ponto deve ser apresentado ao visitante como debate aberto, e não como fato resolvido.',
    descricaoVisual:
      'Uma loba em pé, com a cabeça voltada para o observador, orelhas erguidas e costelas marcadas. Sob seu ventre, duas crianças nuas sentam-se voltadas para as tetas do animal, com os braços erguidos em direção a ele.',
    contextoHistorico:
      'A escultura está associada ao mito de fundação de Roma, no qual os gêmeos Rômulo e Remo, abandonados ainda recém-nascidos, sobrevivem porque são amamentados por uma loba. A imagem tornou-se um dos emblemas visuais da cidade. O grupo que hoje vemos combina elementos de épocas distintas: a loba e as figuras infantis não foram produzidas no mesmo momento.',
    relacaoMedicina:
      'O mito organiza-se em torno de um problema concreto e recorrente na Antiguidade: o que acontece a um recém-nascido privado do leite materno. Antes da existência de substitutos seguros, a alimentação de um lactente dependia de leite humano — da mãe, de uma ama de leite ou de outra mulher da comunidade. A sobrevivência de crianças abandonadas era, na prática, improvável. O aleitamento por um animal funciona, na narrativa, como acontecimento extraordinário justamente porque a alternativa real era a morte.',
    reflexao:
      'Por que a sobrevivência de uma criança abandonada precisou ser explicada, nesse mito, por um acontecimento extraordinário?',
    fontes: [
      { titulo: 'Ficha da obra no acervo dos Musei Capitolini', instituicao: 'Musei Capitolini, Roma', ano: '', url: '' }
    ],
    referencias: ['ref-fildes-1986']
  },

  {
    id: 'obra-02',
    titulo: 'Ísis amamentando Hórus',
    tituloOriginal: 'Isis lactans',
    artista: 'Autoria desconhecida',
    ano: 'Data a confirmar',
    periodo: 'antiguidade',
    tecnica: 'Bronze (estatuetas do tipo também produzidas em faiança e outros materiais)',
    localizacao: 'Coleção a confirmar — o tipo está representado em diversos acervos',
    imagem: './assets/obras/obra-02.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Estatueta de uma figura feminina sentada, com toucado, segurando no colo uma criança que leva a mão ao peito da mulher.',
    creditoImagem: 'Crédito da reprodução a inserir. Selecionar um exemplar específico e registrar coleção e número de inventário.',
    categorias: ['antiguidade', 'escultura', 'espiritualidade', 'maternidade'],
    palavrasChave: ['amamentação', 'egito', 'ísis', 'hórus', 'divindade', 'maternidade', 'estatueta'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'O tipo iconográfico é frequentemente associado à Baixa Época e ao período ptolomaico, com centenas de exemplares conhecidos. Antes da publicação definitiva, é necessário escolher um exemplar concreto e transcrever título, datação, material, coleção e número de inventário conforme a ficha do museu correspondente.',
    descricaoVisual:
      'Figura feminina sentada em um trono, com toucado sobre a cabeça. No colo, uma criança de pequenas dimensões é sustentada por um dos braços, enquanto a outra mão da figura adulta sustenta o seio, aproximando-o da boca da criança.',
    contextoHistorico:
      'A representação da deusa Ísis amamentando seu filho Hórus é um dos tipos figurativos mais reproduzidos do Egito antigo, presente em estatuetas votivas de pequeno porte e em relevos. A cena associa maternidade, legitimidade e proteção divina. Esse modelo visual circulou amplamente pelo Mediterrâneo e é frequentemente citado por historiadores da arte na discussão sobre a longa duração das imagens de mulheres amamentando.',
    relacaoMedicina:
      'A recorrência do gesto — o seio sustentado pela mão, a criança apoiada no antebraço — mostra que a cena de amamentação era um repertório visual estabelecido e reconhecível. Para a história da medicina, imagens desse tipo interessam menos como registro clínico e mais como indício de que o aleitamento era percebido como acontecimento central da primeira infância, digno de representação em objetos de culto. Não se deve, contudo, ler a estatueta como descrição de práticas cotidianas: sua função era religiosa.',
    reflexao:
      'Quando a amamentação aparece associada a uma divindade, o que isso sugere sobre o valor atribuído a ela por aquela sociedade?',
    fontes: [
      { titulo: 'Ficha de exemplar a definir', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: ['ref-yalom-1997']
  },

  {
    id: 'obra-03',
    titulo: 'Madonna del Latte',
    tituloOriginal: 'Madonna del Latte',
    artista: 'Ambrogio Lorenzetti',
    ano: 'c. 1325',
    periodo: 'idade-media',
    tecnica: 'Têmpera sobre madeira',
    localizacao: 'Museo Diocesano, Siena (a confirmar na ficha institucional)',
    imagem: './assets/obras/obra-03.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Pintura de uma mulher com manto, segurando no colo uma criança que mama e olha para fora da cena.',
    creditoImagem: 'Crédito da reprodução a inserir.',
    categorias: ['idade-media', 'pintura', 'arte-sacra', 'maternidade'],
    palavrasChave: ['virgo lactans', 'amamentação', 'religião', 'siena', 'gótico', 'maternidade'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação e localização atual junto à ficha do museu antes da publicação institucional.',
    descricaoVisual:
      'Uma mulher envolta em manto escuro sustenta no colo uma criança de corpo robusto, que se volta para o seio descoberto e ao mesmo tempo dirige o olhar para fora da cena. A mão da mulher sustenta o corpo da criança; o fundo é dourado e sem profundidade.',
    contextoHistorico:
      'O tipo iconográfico da Virgo lactans — a Virgem que amamenta — teve ampla difusão na arte europeia entre os séculos XIII e XV. Em um período em que a mortalidade infantil era elevada e o alimento escasseava com frequência, a imagem da mãe que nutre carregava sentido devocional imediato. A representação também participava de debates teológicos sobre a humanidade de Cristo: um corpo que precisa mamar é um corpo verdadeiramente humano.',
    relacaoMedicina:
      'A medicina medieval europeia herdou da tradição greco-romana a atenção à qualidade do leite e à escolha da ama. Tratados do período discutiam o regime alimentar da nutriz, o momento adequado do desmame e os sinais de que o leite seria ou não conveniente à criança. A imagem não ilustra esse conhecimento, mas pertence ao mesmo mundo em que ele circulava: um mundo em que a nutrição do lactente era assunto de aconselhamento, não apenas de intimidade familiar.',
    reflexao:
      'Nesta cena, a amamentação aparece como prática cotidiana, como símbolo religioso — ou como as duas coisas ao mesmo tempo?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Museo Diocesano, Siena', ano: '', url: '' }
    ],
    referencias: ['ref-fildes-1986', 'ref-yalom-1997']
  },

  {
    id: 'obra-04',
    titulo: 'Título a confirmar',
    tituloOriginal: '',
    artista: 'Autoria a confirmar',
    ano: 'Data a confirmar',
    periodo: 'idade-media',
    tecnica: 'Iluminura sobre pergaminho (a confirmar)',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-04.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Imagem ainda não disponível.',
    creditoImagem: 'Crédito a confirmar.',
    categorias: ['idade-media', 'ilustracao', 'cotidiano', 'infancia'],
    palavrasChave: ['manuscrito', 'iluminura', 'nascimento', 'cuidado', 'idade média'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'Registro criado para receber uma iluminura medieval que represente cena de nascimento, cuidado ou alimentação infantil. Nenhuma informação foi atribuída por dedução. Preencher a partir da ficha do manuscrito escolhido.',
    descricaoVisual: 'Descrição em pesquisa.',
    contextoHistorico: 'Contexto em pesquisa.',
    relacaoMedicina: 'Conteúdo em pesquisa.',
    reflexao:
      'Que aspectos do cuidado infantil aparecem nas imagens de uso cotidiano — e quais permanecem fora do que se considerava digno de representação?',
    fontes: [],
    referencias: []
  },

  {
    id: 'obra-05',
    titulo: 'Madonna Litta',
    tituloOriginal: 'Madonna Litta',
    artista: 'Leonardo da Vinci e/ou sua oficina — atribuição discutida',
    ano: 'c. 1490',
    periodo: 'renascimento',
    tecnica: 'Têmpera sobre tela, transferida de painel de madeira',
    localizacao: 'Museu Hermitage, São Petersburgo',
    imagem: './assets/obras/obra-05.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Pintura de uma jovem mulher em ambiente escuro, com duas janelas ao fundo, amamentando uma criança que olha para o observador.',
    creditoImagem: 'Crédito da reprodução a inserir. Obra do acervo do Museu Hermitage.',
    categorias: ['renascimento', 'pintura', 'arte-sacra', 'maternidade'],
    palavrasChave: ['renascimento', 'amamentação', 'leonardo', 'hermitage', 'maternidade', 'atribuição'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'A atribuição a Leonardo da Vinci é discutida: parte da bibliografia atribui a execução a colaboradores de sua oficina. Apresentar a controvérsia, sem resolvê-la.',
    descricaoVisual:
      'Uma jovem mulher, de perfil inclinado, sustenta no colo uma criança que mama enquanto volta os olhos para fora da cena. O ambiente é escuro e fechado; ao fundo, duas janelas em arco abrem-se para uma paisagem azulada. A criança segura um pequeno pássaro em uma das mãos.',
    contextoHistorico:
      'No Renascimento italiano, a imagem da mãe que amamenta permanece frequente, mas ganha novo tratamento: corpos individualizados, ambientes construídos em perspectiva, atenção ao gesto e à expressão. Ao mesmo tempo, nas famílias abastadas das cidades italianas o envio de recém-nascidos a amas de leite era prática comum, o que abre uma distância significativa entre a imagem devocional e a experiência social das mulheres que a encomendavam ou contemplavam.',
    relacaoMedicina:
      'O período assiste à circulação impressa de tratados dedicados às doenças das crianças, que discutiam alimentação, desmame e critérios para a escolha de amas. A prática de entregar o lactente a uma ama, corrente entre as elites urbanas, teve consequências mensuráveis para a mortalidade infantil, tema retomado com força pela literatura médica dos séculos seguintes. A obra permite observar o contraste entre o ideal representado e as práticas realmente adotadas.',
    reflexao:
      'O que uma imagem idealizada de amamentação pode ocultar sobre a experiência concreta das mulheres do período em que foi produzida?',
    fontes: [
      { titulo: 'Ficha da obra no acervo', instituicao: 'Museu Hermitage, São Petersburgo', ano: '', url: '' }
    ],
    referencias: ['ref-fildes-1988']
  },

  {
    id: 'obra-06',
    titulo: 'A despedida da ama de leite',
    tituloOriginal: 'Les adieux à la nourrice',
    artista: 'Étienne Aubry',
    ano: '1776 (a confirmar)',
    periodo: 'idade-moderna',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-06.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Pintura de um interior rústico com várias figuras reunidas em torno de uma criança pequena, que se volta para uma mulher sentada.',
    creditoImagem: 'Crédito da reprodução a inserir.',
    categorias: ['idade-moderna', 'pintura', 'amas-de-leite', 'familia', 'trabalho'],
    palavrasChave: ['ama de leite', 'nourrice', 'frança', 'século xviii', 'família', 'trabalho', 'separação'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação exata e coleção atual antes da publicação institucional.',
    descricaoVisual:
      'Em um interior modesto, um grupo de adultos e crianças reúne-se em torno de uma criança pequena. Um casal em trajes urbanos ocupa um dos lados da composição; do outro, uma mulher sentada estende os braços em direção à criança, que se volta para ela.',
    contextoHistorico:
      'Na França do século XVIII, o envio de recém-nascidos a amas de leite no campo era prática difundida, incluindo famílias urbanas de recursos modestos. A criança podia permanecer anos longe da casa de origem. A cena da separação entre a criança e a ama tornou-se tema pictórico em um momento em que a literatura, sobretudo a partir de Rousseau, passava a defender a amamentação pela própria mãe como dever natural e moral.',
    relacaoMedicina:
      'O debate sobre amas de leite foi, no século XVIII, também um debate médico. Autores da época associavam a prática ao excesso de mortalidade entre lactentes enviados para longe, apontando as condições de transporte, o número de crianças sob cuidado de uma mesma nutriz e a substituição do leite por papas. A crítica médica ao sistema de amas antecede, assim, as campanhas de puericultura do século XIX.',
    reflexao:
      'Quem, nessa sociedade, tinha a possibilidade de amamentar o próprio filho — e quem amamentava os filhos de outras pessoas para sobreviver?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: ['ref-fildes-1988', 'ref-rousseau-1762']
  },

  {
    id: 'obra-07',
    titulo: 'A mãe que amamenta',
    tituloOriginal: 'La Mère nourrice',
    artista: 'Marguerite Gérard',
    ano: 'Data a confirmar (início do século XIX)',
    periodo: 'idade-moderna',
    tecnica: 'Óleo sobre tela (a confirmar)',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-07.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Imagem ainda não disponível.',
    creditoImagem: 'Crédito a confirmar.',
    categorias: ['idade-moderna', 'pintura', 'maternidade', 'cotidiano'],
    palavrasChave: ['amamentação', 'maternidade', 'frança', 'interior doméstico', 'rousseau'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'Título, datação, técnica e coleção pendentes de conferência. Marguerite Gérard produziu diversas cenas domésticas de maternidade; é necessário identificar a obra específica antes de publicar descrição visual.',
    descricaoVisual: 'Descrição em pesquisa — a ser redigida a partir da reprodução definitiva.',
    contextoHistorico:
      'Entre o final do século XVIII e o início do XIX, cenas domésticas de maternidade ganham espaço na pintura europeia. A valorização do vínculo entre mãe e filho acompanha transformações na compreensão da infância e na organização da família burguesa. Contexto específico desta obra em pesquisa.',
    relacaoMedicina:
      'Conteúdo em pesquisa. A relação a ser desenvolvida diz respeito ao momento em que a amamentação materna passa a ser prescrita como conduta desejável por médicos e moralistas, com efeitos desiguais sobre mulheres de diferentes condições sociais.',
    reflexao:
      'Quando amamentar se torna um dever socialmente esperado, o que acontece com as mulheres que não podem cumpri-lo?',
    fontes: [],
    referencias: ['ref-rousseau-1762']
  },

  {
    id: 'obra-08',
    titulo: 'Carícia materna',
    tituloOriginal: 'Maternal Caress',
    artista: 'Mary Cassatt',
    ano: '1890–1891',
    periodo: 'seculo-xix',
    tecnica: 'Água-forte, ponta-seca e água-tinta',
    localizacao: 'Exemplares em diversas coleções — indicar a coleção da reprodução utilizada',
    imagem: './assets/obras/obra-08.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Gravura em linhas delicadas mostrando uma mulher inclinada sobre uma criança pequena que ela sustenta nos braços.',
    creditoImagem: 'Crédito da reprodução a inserir, conforme a coleção do exemplar escolhido.',
    categorias: ['seculo-xix', 'gravura', 'maternidade', 'cotidiano', 'infancia'],
    palavrasChave: ['mary cassatt', 'gravura', 'maternidade', 'vínculo', 'cuidado', 'século xix'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'A obra integra uma série de gravuras produzida por Cassatt no início da década de 1890. Confirmar coleção e número de inventário do exemplar reproduzido.',
    descricaoVisual:
      'Uma mulher, vista de perfil, inclina-se sobre uma criança pequena que sustenta junto ao corpo. O traço é econômico, com grandes áreas claras e poucos elementos de ambiente. Os rostos aproximam-se até quase se tocarem.',
    contextoHistorico:
      'Mary Cassatt dedicou parte significativa de sua produção às relações entre mulheres e crianças em ambientes domésticos, tratando o cuidado cotidiano — banho, colo, penteado, alimentação — como tema pictórico legítimo. Nesse período, o cuidado infantil passava por crescente atenção pública, com a organização de serviços voltados à alimentação de lactentes nas cidades europeias e norte-americanas.',
    relacaoMedicina:
      'O final do século XIX é decisivo para a saúde da criança: constituem-se a pediatria como especialidade, as consultas de lactentes e os serviços de distribuição de leite nas grandes cidades, em resposta a taxas elevadas de mortalidade infantil. Imagens do cuidado doméstico como esta permitem observar o que ficava a cargo das famílias, num momento em que médicos e instituições começavam a intervir sistematicamente sobre a alimentação das crianças.',
    reflexao:
      'O que muda quando o cuidado infantil deixa de ser assunto exclusivamente doméstico e passa a ser objeto de acompanhamento médico?',
    fontes: [
      { titulo: 'Ficha do exemplar reproduzido', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: ['ref-stevens-2009']
  },

  {
    id: 'obra-09',
    titulo: 'Mãe Preta',
    tituloOriginal: 'Mãe Preta',
    artista: 'Lucílio de Albuquerque',
    ano: '1912 (a confirmar)',
    periodo: 'seculo-xx',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-09.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Pintura de uma mulher negra sentada ao ar livre, amamentando uma criança branca, com outra criança deitada sobre o solo ao seu lado.',
    creditoImagem: 'Crédito da reprodução a inserir. Verificar condições de uso junto à instituição detentora.',
    categorias: ['seculo-xx', 'pintura', 'amas-de-leite', 'trabalho', 'saude-materno-infantil'],
    palavrasChave: ['ama de leite', 'escravidão', 'brasil', 'desigualdade', 'trabalho', 'maternidade', 'racismo'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'Confirmar datação e coleção atual. Esta obra exige tratamento textual cuidadoso: a bibliografia sobre amas de leite escravizadas e libertas no Brasil deve ser incorporada antes da publicação institucional.',
    descricaoVisual:
      'Uma mulher negra, sentada ao ar livre, sustenta ao peito uma criança branca. Ao seu lado, sobre o solo, uma segunda criança, negra, está deitada. A composição coloca as duas crianças em posições visivelmente distintas.',
    contextoHistorico:
      'No Brasil escravista, mulheres negras eram sistematicamente empregadas — sob escravidão ou, após 1888, sob relações de trabalho precárias — para amamentar filhos de famílias brancas. Anúncios de jornal do século XIX ofereciam e procuravam amas de leite, por vezes indicando explicitamente o afastamento de seus próprios filhos. A obra foi produzida poucas décadas após a abolição, período em que essa memória permanecia próxima.',
    relacaoMedicina:
      'A história da amamentação no Brasil não pode ser separada da história da escravidão. O afastamento forçado entre a ama e seu próprio filho teve consequências diretas sobre a sobrevivência das crianças negras, frequentemente entregues a casas de expostos ou alimentadas com substitutos inadequados. Estudos sobre mortalidade infantil no período apontam a dimensão desse processo. Para a saúde coletiva, o caso mostra como o acesso ao leite materno foi historicamente determinado por relações de poder, e não apenas por escolhas individuais.',
    reflexao:
      'Quando o leite de uma mulher se torna trabalho imposto, o que acontece com o direito de seu próprio filho a ser amamentado?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: ['ref-brasil-amas']
  },

  {
    id: 'obra-10',
    titulo: 'A Negra',
    tituloOriginal: 'A Negra',
    artista: 'Tarsila do Amaral',
    ano: '1923',
    periodo: 'seculo-xx',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Museu de Arte Contemporânea da Universidade de São Paulo (a confirmar)',
    imagem: './assets/obras/obra-10.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Imagem ainda não disponível.',
    creditoImagem:
      'Obra protegida por direitos autorais. Reprodução condicionada a autorização dos detentores dos direitos e da instituição depositária.',
    categorias: ['seculo-xx', 'pintura', 'maternidade', 'corpo'],
    palavrasChave: ['tarsila do amaral', 'modernismo', 'brasil', 'corpo', 'ama de leite', 'memória'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'Registro incluído pela relevância para a discussão sobre a representação do corpo da mulher negra e a memória das amas de leite no Brasil. A leitura da obra é objeto de ampla bibliografia crítica, que deve ser consultada antes de redigir os textos definitivos. Reprodução da imagem depende de autorização.',
    descricaoVisual:
      'Descrição em pesquisa — a ser redigida com apoio da bibliografia crítica e da ficha institucional, evitando interpretação apressada.',
    contextoHistorico:
      'Contexto em pesquisa. A obra integra o momento inicial do modernismo brasileiro e é frequentemente discutida em relação às memórias de infância da artista e à representação de mulheres negras na arte do período.',
    relacaoMedicina:
      'Conteúdo em pesquisa. A relação a ser desenvolvida diz respeito à permanência, no imaginário visual brasileiro, da figura da mulher negra associada ao trabalho de amamentar.',
    reflexao:
      'De que maneira a posição social da mulher representada interfere na leitura que fazemos da cena?',
    fontes: [],
    referencias: ['ref-brasil-amas']
  },

  {
    id: 'obra-11',
    titulo: 'Mãe migrante',
    tituloOriginal: 'Migrant Mother',
    artista: 'Dorothea Lange',
    ano: '1936',
    periodo: 'seculo-xx',
    tecnica: 'Fotografia',
    localizacao: 'Library of Congress, Washington (Farm Security Administration/OWI Collection)',
    imagem: './assets/obras/obra-11.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Fotografia em preto e branco de uma mulher sentada, com a mão junto ao rosto, acompanhada de crianças que se apoiam em seus ombros e de um bebê em seu colo.',
    creditoImagem: 'Library of Congress, Prints & Photographs Division, FSA/OWI Collection. Verificar a legenda oficial do registro.',
    categorias: ['seculo-xx', 'fotografia', 'documento', 'nutricao', 'saude-publica'],
    palavrasChave: ['fotografia', 'documento', 'nutrição', 'pobreza', 'saúde pública', 'infância', 'estados unidos'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'Confirmar título, número de identificação e legenda originais junto à Library of Congress. A imagem integra um conjunto de registros feitos na mesma ocasião.',
    descricaoVisual:
      'Fotografia em preto e branco. Uma mulher sentada leva a mão ao rosto, o olhar dirigido para fora do enquadramento. Duas crianças apoiam-se em seus ombros, com os rostos voltados para trás; um bebê repousa em seu colo.',
    contextoHistorico:
      'A imagem foi produzida no âmbito de um programa governamental norte-americano de documentação fotográfica das condições de vida rural durante a Grande Depressão. Fotografias como esta foram usadas para tornar visíveis situações de privação alimentar e sustentar políticas de assistência.',
    relacaoMedicina:
      'A fotografia documental tornou-se, no século XX, instrumento de argumentação em saúde pública. No caso da alimentação infantil, imagens de privação foram mobilizadas para justificar programas de distribuição de alimentos, acompanhamento nutricional e assistência materno-infantil. O registro também levanta uma questão ética permanente: pessoas fotografadas em situação de vulnerabilidade raramente controlam o uso posterior de sua imagem.',
    reflexao:
      'Que responsabilidades acompanham o uso de imagens de pessoas em situação de vulnerabilidade como argumento em saúde pública?',
    fontes: [
      { titulo: 'Registro na FSA/OWI Collection', instituicao: 'Library of Congress', ano: '1936', url: '' }
    ],
    referencias: ['ref-stevens-2009']
  },

  {
    id: 'obra-12',
    titulo: 'Título a confirmar',
    tituloOriginal: '',
    artista: 'Autoria a confirmar',
    ano: 'Data a confirmar',
    periodo: 'contemporaneidade',
    tecnica: 'Técnica a confirmar',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-12.svg',
    imagemStatus: 'placeholder',
    altTexto: 'Imagem ainda não disponível.',
    creditoImagem: 'Crédito a confirmar. Obras contemporâneas exigem autorização expressa para reprodução.',
    categorias: ['contemporaneidade', 'fotografia', 'saude-publica', 'maternidade'],
    palavrasChave: ['contemporâneo', 'aleitamento', 'políticas públicas', 'curadoria'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'Espaço reservado para obra, fotografia ou documento contemporâneo. A seleção depende de curadoria e de autorização de uso. Nenhuma informação foi preenchida por dedução.',
    descricaoVisual: 'Descrição em pesquisa.',
    contextoHistorico: 'Contexto em pesquisa.',
    relacaoMedicina: 'Conteúdo em pesquisa.',
    reflexao:
      'Que imagens da amamentação circulam hoje, quem as produz e a que finalidades elas servem?',
    fontes: [],
    referencias: []
  }
];

/* Rótulos legíveis para as categorias usadas nos filtros. */
window.AcervoData.categorias = {
  periodos: [
    { id: 'antiguidade', rotulo: 'Antiguidade' },
    { id: 'idade-media', rotulo: 'Idade Média' },
    { id: 'renascimento', rotulo: 'Renascimento' },
    { id: 'idade-moderna', rotulo: 'Idade Moderna' },
    { id: 'seculo-xix', rotulo: 'Século XIX' },
    { id: 'seculo-xx', rotulo: 'Século XX' },
    { id: 'contemporaneidade', rotulo: 'Contemporaneidade' }
  ],
  temas: [
    { id: 'arte-sacra', rotulo: 'Arte sacra' },
    { id: 'cotidiano', rotulo: 'Cotidiano' },
    { id: 'maternidade', rotulo: 'Maternidade' },
    { id: 'amas-de-leite', rotulo: 'Amas de leite' },
    { id: 'familia', rotulo: 'Família' },
    { id: 'trabalho', rotulo: 'Trabalho' },
    { id: 'infancia', rotulo: 'Infância' },
    { id: 'espiritualidade', rotulo: 'Espiritualidade' },
    { id: 'nutricao', rotulo: 'Nutrição' },
    { id: 'saude-materno-infantil', rotulo: 'Saúde materno-infantil' },
    { id: 'saude-publica', rotulo: 'Saúde pública' },
    { id: 'corpo', rotulo: 'Corpo' },
    { id: 'mito-fundacao', rotulo: 'Mito e fundação' }
  ],
  linguagens: [
    { id: 'pintura', rotulo: 'Pintura' },
    { id: 'escultura', rotulo: 'Escultura' },
    { id: 'gravura', rotulo: 'Gravura' },
    { id: 'fotografia', rotulo: 'Fotografia' },
    { id: 'ilustracao', rotulo: 'Ilustração' },
    { id: 'documento', rotulo: 'Documento histórico' }
  ]
};
