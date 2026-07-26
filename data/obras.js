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
 * CAMPO `movimento`
 * -----------------
 * Movimento ou estilo artístico ao qual a obra pertence. Deve corresponder a um
 * `id` definido em data/movimentos.js — é ele que posiciona a obra no percurso
 * e no filtro do acervo. O campo `estilo` complementa com a denominação mais
 * precisa (por exemplo, "Barroco flamengo"), exibida na ficha.
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

  /* ===================== ARTE DA ANTIGUIDADE ===================== */

  {
    id: 'obra-01',
    titulo: 'Loba Capitolina',
    tituloOriginal: 'Lupa Capitolina',
    artista: 'Autoria desconhecida',
    ano: 'Datação em debate',
    movimento: 'antiguidade',
    estilo: 'Escultura antiga — atribuição estilística em debate',
    tecnica: 'Bronze fundido',
    localizacao: 'Musei Capitolini, Roma',
    imagem: './assets/obras/obra-01.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Escultura em bronze de uma loba em pé, com duas crianças sentadas sob seu ventre em posição de amamentação.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
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
    movimento: 'antiguidade',
    estilo: 'Arte egípcia — Baixa Época e período ptolomaico',
    tecnica: 'Bronze (estatuetas do tipo também produzidas em faiança e outros materiais)',
    localizacao: 'Coleção a confirmar — o tipo está representado em diversos acervos',
    imagem: './assets/obras/obra-02.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Estatueta de bronze de uma figura feminina em pé, com toucado, segurando junto ao peito uma pequena figura infantil.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['antiguidade', 'escultura', 'espiritualidade', 'maternidade'],
    palavrasChave: ['amamentação', 'egito', 'ísis', 'hórus', 'divindade', 'maternidade', 'estatueta'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'O tipo iconográfico é frequentemente associado à Baixa Época e ao período ptolomaico, com centenas de exemplares conhecidos. Antes da publicação definitiva, é necessário escolher um exemplar concreto e transcrever título, datação, material, coleção e número de inventário conforme a ficha do museu correspondente.',
    descricaoVisual:
      'Estatueta de bronze de uma figura feminina em pé, com toucado e um elemento circular sobre a cabeça, vestido longo e justo. Com os dois braços ela sustenta, na altura do peito, uma pequena figura infantil. A peça está exposta sobre um suporte cilíndrico claro.',
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

  /* ================== ARTE MEDIEVAL E GÓTICA ==================== */

  {
    id: 'obra-03',
    titulo: 'Madonna del Latte',
    tituloOriginal: 'Madonna del Latte',
    artista: 'Ambrogio Lorenzetti',
    ano: 'c. 1325',
    movimento: 'idade-media',
    estilo: 'Gótico — escola sienesa',
    tecnica: 'Têmpera sobre madeira',
    localizacao: 'Museo Diocesano, Siena (a confirmar na ficha institucional)',
    imagem: './assets/obras/obra-03.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher com manto, segurando no colo uma criança que mama e olha para fora da cena.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
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

/* ================ RENASCIMENTO E MANEIRISMO =================== */

  {
    id: 'obra-05',
    titulo: 'Madonna Litta',
    tituloOriginal: 'Madonna Litta',
    artista: 'Leonardo da Vinci e/ou sua oficina — atribuição discutida',
    ano: 'c. 1490',
    movimento: 'renascimento',
    estilo: 'Renascimento italiano — escola lombarda',
    tecnica: 'Têmpera sobre tela, transferida de painel de madeira',
    localizacao: 'Museu Hermitage, São Petersburgo',
    imagem: './assets/obras/obra-05.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma jovem mulher em ambiente escuro, com duas janelas ao fundo, amamentando uma criança que olha para o observador.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
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
    id: 'obra-13',
    titulo: 'Virgem e o Menino entronizados',
    tituloOriginal: 'Madonna omringd door serafijnen en cherubijnen',
    artista: 'Jean Fouquet',
    ano: 'c. 1452–1455 (a confirmar)',
    movimento: 'renascimento',
    estilo: 'Gótico internacional e primeiro Renascimento francês',
    tecnica: 'Óleo sobre madeira',
    localizacao: 'Koninklijk Museum voor Schone Kunsten, Antuérpia (a confirmar)',
    imagem: './assets/obras/obra-13.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher coroada, sentada em um trono, com uma das mamas descoberta e uma criança nua sobre o joelho, cercada por figuras de anjos vermelhos e azuis.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['renascimento', 'pintura', 'arte-sacra', 'corpo', 'maternidade'],
    palavrasChave: ['fouquet', 'melun', 'virgem', 'seio', 'corpo', 'gótico', 'frança'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'Painel direito de um díptico originalmente destinado à colegiada de Melun. Confirmar datação, título adotado pela instituição e número de inventário. A identificação tradicional do modelo com Agnès Sorel é hipótese historiográfica, não fato documentado: apresentá-la como tal.',
    descricaoVisual:
      'Uma mulher coroada, de rosto pálido e testa muito alta, senta-se em um trono. O corpete está aberto e uma das mamas aparece descoberta, esférica e deslocada em relação à anatomia. Sobre seu joelho, uma criança nua aponta para fora da cena. Ao redor, figuras infantis de anjos, em vermelho e azul intensos, preenchem todo o fundo.',
    contextoHistorico:
      'A obra pertence a um momento de transição entre o gótico tardio e o primeiro Renascimento no norte da Europa. O seio descoberto segue a tradição devocional da Virgo lactans, mas o tratamento é radicalmente diferente do medieval: a figura é mundana, quase heráldica, e a cena perde o caráter íntimo. A obra é frequentemente discutida como exemplo de como a imagem religiosa podia incorporar códigos de beleza cortesã.',
    relacaoMedicina:
      'A obra é útil para discutir um ponto metodológico incontornável: a representação do corpo feminino na arte raramente é anatômica. O seio aqui não descreve uma mama que amamenta — descreve um símbolo. Ler imagens artísticas como se fossem registros anatômicos ou clínicos produz erro histórico. A anatomia da mama e a fisiologia da lactação só seriam descritas com precisão séculos depois, a partir dos estudos anatômicos modernos.',
    reflexao:
      'Quando um corpo é pintado como símbolo, o que se pode e o que não se pode concluir a partir dele?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Koninklijk Museum voor Schone Kunsten, Antuérpia', ano: '', url: '' }
    ],
    referencias: ['ref-yalom-1997']
  },

  {
    id: 'obra-14',
    titulo: 'A Virgem da almofada verde',
    tituloOriginal: 'La Vierge au coussin vert',
    artista: 'Andrea Solario',
    ano: 'c. 1507–1510 (a confirmar)',
    movimento: 'renascimento',
    estilo: 'Renascimento italiano — escola lombarda',
    tecnica: 'Óleo sobre madeira',
    localizacao: 'Musée du Louvre, Paris (a confirmar)',
    imagem: './assets/obras/obra-14.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher inclinada sobre uma criança nua deitada em uma almofada, que mama enquanto segura o corpo da mulher.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['renascimento', 'pintura', 'arte-sacra', 'maternidade', 'cotidiano'],
    palavrasChave: ['solario', 'louvre', 'virgo lactans', 'amamentação', 'renascimento', 'lombardia'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, título adotado pela instituição e número de inventário junto ao museu.',
    descricaoVisual:
      'Uma mulher de manto azul e vestido vermelho inclina-se sobre uma criança nua e robusta, deitada de costas sobre uma almofada verde de borda bordada e borla. A criança mama, com uma das mãos apoiada no corpo da mulher e as pernas dobradas. Ao fundo, à esquerda, abre-se uma paisagem com rio, campos e arvoredo; à direita, troncos de árvores fecham a composição. No canto inferior direito lê-se a assinatura do pintor.',
    contextoHistorico:
      'A obra é um dos exemplos mais difundidos da Virgo lactans renascentista em versão íntima e doméstica. A composição elimina tronos, coroas e anjos: restam dois corpos e um gesto. Esse deslocamento acompanha uma tendência mais ampla do período, em que a devoção privada passa a demandar imagens de escala pequena e assunto próximo da vida familiar.',
    relacaoMedicina:
      'A posição representada — criança deitada de lado, corpo voltado para o da mulher, cabeça apoiada — corresponde a uma das posições que a orientação contemporânea em aleitamento descreve como favoráveis à pega. Isso não faz da pintura um manual: o pintor buscava naturalidade e afeto, não instrução técnica. O interesse histórico está em observar que a cena cotidiana era conhecida o suficiente para ser pintada de modo convincente.',
    reflexao:
      'Que diferença faz, para a leitura da cena, o fato de a imagem ter sido feita para devoção privada e não para um altar público?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Musée du Louvre, Paris', ano: '', url: '' }
    ],
    referencias: ['ref-yalom-1997']
  },

  {
    id: 'obra-15',
    titulo: 'A Tempestade',
    tituloOriginal: 'La Tempesta',
    artista: 'Giorgione',
    ano: 'c. 1505–1508 (a confirmar)',
    movimento: 'renascimento',
    estilo: 'Renascimento veneziano',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Gallerie dell’Accademia, Veneza (a confirmar)',
    imagem: './assets/obras/obra-15.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de paisagem com céu escuro e relâmpago; à direita, uma mulher seminua sentada na grama amamenta uma criança; à esquerda, um homem de pé observa.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['renascimento', 'pintura', 'maternidade', 'cotidiano', 'infancia'],
    palavrasChave: ['giorgione', 'veneza', 'paisagem', 'amamentação', 'enigma', 'interpretação'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'O assunto da obra é objeto de longa controvérsia historiográfica, com dezenas de interpretações propostas e nenhuma consensual. O acervo deve apresentar essa indefinição como tal, sem adotar uma leitura única. Confirmar datação e número de inventário.',
    descricaoVisual:
      'Uma paisagem sob céu escuro, cortado por um relâmpago. À direita, sentada na grama, uma mulher quase nua, coberta apenas por um pano branco sobre os ombros, amamenta uma criança e olha para fora da cena. À esquerda, um homem de pé, vestido, apoia-se em um bastão. Entre as duas figuras corre um curso de água, atravessado por uma ponte, com edifícios ao fundo.',
    contextoHistorico:
      'A obra é um marco da pintura veneziana pela primazia dada à paisagem e à atmosfera sobre a narrativa. A ausência de um tema identificável é justamente sua característica mais discutida: não se sabe quem são as figuras nem o que a cena representa. A mulher que amamenta ao ar livre, sem qualquer atributo religioso, é elemento central dessa indeterminação.',
    relacaoMedicina:
      'A obra serve como advertência metodológica para o uso de imagens na história da medicina: uma cena de amamentação pode aparecer sem que se saiba quem amamenta, em que condição social ou com que finalidade. Extrair daí conclusões sobre práticas de aleitamento no Vêneto do século XVI seria interpretação sem base documental. A imagem só ganha valor de fonte quando confrontada com registros escritos.',
    reflexao:
      'Quando não sabemos quem é a pessoa representada, o que uma imagem ainda pode nos ensinar — e o que ela deixa de poder provar?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Gallerie dell’Accademia, Veneza', ano: '', url: '' }
    ],
    referencias: []
  },

  {
    id: 'obra-16',
    titulo: 'A Origem da Via Láctea',
    tituloOriginal: 'The Origin of the Milky Way',
    artista: 'Jacopo Tintoretto',
    ano: 'c. 1575–1580 (a confirmar)',
    movimento: 'renascimento',
    estilo: 'Maneirismo veneziano',
    tecnica: 'Óleo sobre tela',
    localizacao: 'The National Gallery, Londres (a confirmar)',
    imagem: './assets/obras/obra-16.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher deitada entre nuvens, com jatos de leite saindo de seus seios; uma figura masculina aproxima uma criança de seu peito, cercados por aves e figuras aladas.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['renascimento', 'pintura', 'mito-fundacao', 'nutricao', 'corpo'],
    palavrasChave: ['tintoretto', 'via láctea', 'juno', 'hércules', 'mitologia', 'leite', 'maneirismo'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, dimensões e número de inventário junto à instituição. A tela conhecida hoje pode corresponder a fragmento de composição maior — verificar. A reprodução incorporada corresponde a um recorte da imagem, sem a faixa inferior.',
    descricaoVisual:
      'Uma mulher deitada sobre nuvens, com o corpo em diagonal, tem jatos de leite saindo de ambos os seios: um em direção ao alto, outro para baixo. Uma figura masculina alada aproxima de seu peito uma criança pequena. Ao redor, figuras infantis aladas, pavões e uma águia.',
    contextoHistorico:
      'A pintura representa o mito segundo o qual a Via Láctea teria se formado a partir do leite de Juno, derramado quando a criança Hércules foi aproximada de seu peito. O tema permitiu à pintura do período representar o corpo feminino e o leite fora do enquadramento religioso, em chave erudita e mitológica destinada a um público cortesão.',
    relacaoMedicina:
      'O mito atribui ao leite materno uma função cosmológica: ele origina estrelas e confere imortalidade. Essa ideia de que a substância transmite qualidades de quem a produz atravessa séculos e reaparece, de forma prática, nos critérios usados para escolher amas de leite — que consideravam não apenas a saúde da mulher, mas seu temperamento, seus hábitos e sua condição social, na crença de que tudo isso passaria à criança pelo leite.',
    reflexao:
      'A crença de que o leite transmite qualidades de quem amamenta influenciou quem podia ou não ser escolhida como ama. O que essa ideia produziu socialmente?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'The National Gallery, Londres', ano: '', url: '' }
    ],
    referencias: ['ref-fildes-1988', 'ref-yalom-1997']
  },

  /* ============================ BARROCO ========================= */

  {
    id: 'obra-17',
    titulo: 'O nascimento da Via Láctea',
    tituloOriginal: 'El nacimiento de la Vía Láctea',
    artista: 'Peter Paul Rubens',
    ano: 'c. 1636–1638 (a confirmar)',
    movimento: 'barroco',
    estilo: 'Barroco flamengo',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Museo Nacional del Prado, Madri (a confirmar)',
    imagem: './assets/obras/obra-17.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher sentada entre nuvens, com um jato de leite saindo de seu seio em direção ao céu escuro; ao lado, uma figura masculina, um carro puxado por pavões e uma criança.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['barroco', 'pintura', 'mito-fundacao', 'nutricao', 'corpo'],
    palavrasChave: ['rubens', 'prado', 'via láctea', 'juno', 'hércules', 'barroco', 'leite', 'mitologia'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, dimensões e número de inventário junto ao museu.',
    descricaoVisual:
      'Uma mulher de corpo pleno, sentada sobre nuvens, afasta do peito uma criança; do seio descoberto parte um jato de leite que se dispersa em pontos luminosos contra o céu escuro e estrelado. Atrás dela vê-se a roda dourada de um carro; à direita, dois pavões de asas abertas. À esquerda, uma figura masculina barbada, coroada de raios, apoia-se sobre uma águia. A luz incide fortemente sobre os corpos, deixando o fundo em penumbra.',
    contextoHistorico:
      'Rubens retoma, em pleno Barroco, o mesmo mito tratado por Tintoretto meio século antes, agora com a monumentalidade e o contraste dramático característicos de sua pintura. A obra integra o conjunto de temas mitológicos produzidos para decoração de residências reais, num contexto em que a erudição clássica era instrumento de prestígio político.',
    relacaoMedicina:
      'A comparação entre as duas versões do mesmo mito, separadas por cerca de sessenta anos, é um exercício útil de método: o assunto permanece, mas mudam a composição, a carnalidade dos corpos e a relação com o observador. Isso demonstra que variações na representação não indicam necessariamente mudança nas práticas de alimentação infantil — podem refletir apenas transformações no gosto, na encomenda e na função da imagem.',
    reflexao:
      'Duas obras com o mesmo tema, produzidas com sessenta anos de distância: o que muda pertence à história da amamentação ou à história da pintura?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Museo Nacional del Prado, Madri', ano: '', url: '' }
    ],
    referencias: ['ref-yalom-1997']
  },

/* ================= ROCOCÓ E NEOCLASSICISMO =================== */

  {
    id: 'obra-06',
    titulo: 'A despedida da ama de leite',
    tituloOriginal: 'Les adieux à la nourrice',
    artista: 'Gravura segundo Étienne Aubry — gravador a confirmar',
    ano: '1776 (a confirmar)',
    movimento: 'rococo-neoclassicismo',
    estilo: 'Gravura de reprodução francesa do século XVIII',
    tecnica: 'Gravura sobre papel, segundo pintura de Étienne Aubry',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-06.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Gravura mostrando, ao ar livre, uma mulher montada em um burro com uma criança no colo, enquanto outra mulher estende os braços em sua direção.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['rococo-neoclassicismo', 'pintura', 'amas-de-leite', 'familia', 'trabalho'],
    palavrasChave: ['ama de leite', 'nourrice', 'frança', 'século xviii', 'família', 'trabalho', 'separação'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'ATENÇÃO: a reprodução incorporada é uma gravura de reprodução, e não a pintura de Étienne Aubry. A legenda gravada traz o título e uma dedicatória à Condessa de Merle. É preciso decidir se o acervo exibe a gravura (registrando gravador, data e coleção) ou se busca a reprodução da pintura original. Datação e coleção a confirmar em ambos os casos.',
    descricaoVisual:
      'Gravura em preto e branco. Ao ar livre, diante de uma construção rústica de telhado de palha, uma mulher em trajes urbanos e chapéu de plumas está montada em um burro, segurando uma criança pequena no colo. Outra mulher, de vestes simples, estende os braços em direção à criança. À esquerda, um homem de casaca observa, apoiado em um bastão; à direita, um segundo homem e uma vaca. Na margem inferior corre a legenda gravada com o título e uma dedicatória.',
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
    id: 'obra-20',
    titulo: 'A mãe bem-amada',
    tituloOriginal: 'La Mère bien-aimée',
    artista: 'Jean-Baptiste Greuze',
    ano: '1765 (a confirmar)',
    movimento: 'rococo-neoclassicismo',
    estilo: 'Pintura de gênero sentimental francesa',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-20.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher sentada, recostada e cercada por várias crianças pequenas que se agarram a seu corpo, enquanto um homem entra na cena com os braços abertos.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['rococo-neoclassicismo', 'pintura', 'familia', 'maternidade', 'cotidiano'],
    palavrasChave: ['greuze', 'família', 'maternidade', 'rousseau', 'sentimentalismo', 'frança'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, dimensões e coleção atual. A obra teve versões e gravuras de reprodução — identificar qual será reproduzida. A imagem incorporada corresponde a um recorte da composição, e não ao quadro inteiro.',
    descricaoVisual:
      'Uma mulher recostada, de vestido claro, é cercada por seis crianças pequenas que se agarram a seus braços, colo, ombros e vestido; uma delas encosta o rosto no dela. Ao alto, à direita, um homem inclina-se sobre o grupo. À esquerda, um cesto de vime; ao pé da cena, tecidos caídos no chão.',
    contextoHistorico:
      'A pintura de gênero sentimental do século XVIII transformou a família em espetáculo moral: cenas domésticas eram exibidas em salões e comentadas por críticos como lições de virtude. Nesse contexto, a mãe cercada de filhos torna-se imagem de mérito, em oposição direta às práticas aristocráticas de delegar o cuidado a amas e criados.',
    relacaoMedicina:
      'A valorização da maternidade "natural" no discurso setecentista coincide com a crítica médica ao sistema de amas de leite, e ambas convergem na prescrição da amamentação materna. É importante notar o efeito colateral dessa convergência: a responsabilidade pela sobrevivência infantil passa a recair sobre o comportamento individual das mulheres, e não sobre as condições de vida, o trabalho e a assistência disponível.',
    reflexao:
      'Que efeitos tem, sobre as mulheres, transformar o cuidado infantil em medida de virtude pessoal?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: ['ref-rousseau-1762']
  },

  {
    id: 'obra-21',
    titulo: 'Autorretrato com a filha',
    tituloOriginal: 'Madame Vigée Le Brun et sa fille, Jeanne-Lucie, dite Julie',
    artista: 'Élisabeth Louise Vigée Le Brun',
    ano: 'Data a confirmar',
    movimento: 'rococo-neoclassicismo',
    estilo: 'Neoclassicismo francês',
    tecnica: 'Óleo sobre madeira',
    localizacao: 'Musée du Louvre, Paris (a confirmar)',
    imagem: './assets/obras/obra-21.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher sentada abraçando uma criança que se apoia em seu colo e encosta o rosto no dela; ambas olham para fora da cena.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['rococo-neoclassicismo', 'pintura', 'maternidade', 'familia'],
    palavrasChave: ['vigée le brun', 'autorretrato', 'maternidade', 'louvre', 'neoclassicismo', 'mulheres artistas'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'A artista pintou mais de uma composição com o mesmo tema, entre 1786 e 1789. Existem ao menos duas versões com datas próximas. Identificar com precisão qual será reproduzida, com título, data e número de inventário da instituição.',
    descricaoVisual:
      'Uma mulher sentada envolve com os braços uma criança que se apoia em seu colo e encosta o rosto no dela. As duas olham para fora da cena. As vestes são simples, de inspiração clássica, e o fundo é neutro e escuro.',
    contextoHistorico:
      'A obra foi produzida por uma das poucas mulheres admitidas na Academia Real francesa, retratista de destaque na corte. Ao pintar a si mesma como mãe, a artista participa da construção visual de um novo ideal de maternidade afetiva, ao mesmo tempo em que afirma sua posição profissional — combinação incomum e socialmente tensa no período.',
    relacaoMedicina:
      'A obra é útil para observar como o ideal de proximidade física entre mãe e criança — abraço, contato, olhar — se estabelece culturalmente muito antes de existir qualquer formulação científica sobre vínculo, contato pele a pele ou desenvolvimento afetivo. A pesquisa médica sobre esses temas é do século XX; a imagem que a antecipa é do XVIII.',
    reflexao:
      'Um ideal cultural pode preceder — e depois influenciar — o que a ciência escolhe investigar?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Musée du Louvre, Paris', ano: '', url: '' }
    ],
    referencias: []
  },

/* ========= ROMANTISMO, REALISMO E PINTURA ACADÊMICA ========== */

  {
    id: 'obra-22',
    titulo: 'A refeição',
    tituloOriginal: 'La Becquée',
    artista: 'Jean-François Millet',
    ano: 'c. 1860 (a confirmar)',
    movimento: 'romantismo-realismo',
    estilo: 'Realismo francês — Escola de Barbizon',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-22.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher sentada à porta de uma casa rústica, dando de comer com uma colher a três crianças pequenas sentadas lado a lado em um degrau.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['romantismo-realismo', 'pintura', 'nutricao', 'infancia', 'trabalho', 'cotidiano'],
    palavrasChave: ['millet', 'realismo', 'campo', 'alimentação', 'pobreza', 'infância', 'barbizon'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, título adotado e coleção atual. O artista tratou o tema em mais de uma versão e técnica.',
    descricaoVisual:
      'Diante da porta de uma casa rústica, uma mulher sentada leva uma colher à boca de crianças pequenas, sentadas lado a lado em um degrau, com as mãos no colo. Ao fundo, um homem trabalha no terreno. A luz é fraca e as roupas, gastas.',
    contextoHistorico:
      'O Realismo francês deslocou o olhar da pintura para o trabalho rural e a pobreza, tratados sem idealização heroica nem alegoria. A cena representa a alimentação de crianças já desmamadas, em uma família camponesa — assunto que a pintura anterior raramente considerava digno de tela de grande formato.',
    relacaoMedicina:
      'A transição do leite materno para outros alimentos foi, historicamente, o período de maior risco para a criança. Papas de farinha e água, comuns no campo europeu, ofereciam pouco valor nutricional e alto risco de contaminação. Em contextos sem água segura, o desmame precoce esteve associado a diarreias graves e desnutrição — uma das principais causas de mortalidade infantil no século XIX.',
    reflexao:
      'O que a cena revela sobre a alimentação infantil quando o leite materno já não é a única fonte de nutrição?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: ['ref-stevens-2009']
  },

  {
    id: 'obra-09',
    titulo: 'Mãe Preta',
    tituloOriginal: 'Mãe Preta',
    artista: 'Lucílio de Albuquerque',
    ano: '1912 (a confirmar)',
    movimento: 'romantismo-realismo',
    estilo: 'Pintura acadêmica brasileira',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-09.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher negra sentada ao ar livre, amamentando uma criança branca, com outra criança deitada sobre o solo ao seu lado.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['romantismo-realismo', 'pintura', 'amas-de-leite', 'trabalho', 'saude-materno-infantil'],
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

  /* ========== IMPRESSIONISMO E PÓS-IMPRESSIONISMO ============== */

  {
    id: 'obra-08',
    titulo: 'Carícia materna',
    tituloOriginal: 'Maternal Caress',
    artista: 'Mary Cassatt',
    ano: '1890–1891',
    movimento: 'impressionismo',
    estilo: 'Impressionismo — gravura de inspiração japonesa',
    tecnica: 'Água-forte, ponta-seca e água-tinta',
    localizacao: 'Exemplares em diversas coleções — indicar a coleção da reprodução utilizada',
    imagem: './assets/obras/obra-08.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Gravura em linhas delicadas mostrando uma mulher inclinada sobre uma criança pequena que ela sustenta nos braços.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['impressionismo', 'gravura', 'maternidade', 'cotidiano', 'infancia'],
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
    id: 'obra-24',
    titulo: 'O banho da criança',
    tituloOriginal: 'The Child’s Bath',
    artista: 'Mary Cassatt',
    ano: '1893 (a confirmar)',
    movimento: 'impressionismo',
    estilo: 'Impressionismo — influência da gravura japonesa',
    tecnica: 'Óleo sobre tela',
    localizacao: 'The Art Institute of Chicago (a confirmar)',
    imagem: './assets/obras/obra-24.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura vista de cima mostrando uma mulher de vestido listrado sentada, com uma criança nua no colo, lavando um dos pés da criança em uma bacia.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['impressionismo', 'pintura', 'infancia', 'cotidiano', 'saude-materno-infantil'],
    palavrasChave: ['cassatt', 'banho', 'higiene', 'cuidado', 'chicago', 'impressionismo'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, dimensões e número de inventário junto à instituição.',
    descricaoVisual:
      'Vista de cima, uma mulher de vestido listrado senta-se com uma criança nua sobre o colo. Com uma das mãos ela segura o pé da criança dentro de uma bacia; com a outra, sustenta seu corpo. Ambas olham para a água. Os padrões do tapete, do vestido e da jarra ocupam grande parte da superfície.',
    contextoHistorico:
      'O ponto de vista elevado e os planos achatados revelam o interesse de Cassatt pelas gravuras japonesas, então recém-difundidas na Europa. O assunto — o banho de uma criança — pertence ao repertório de tarefas cotidianas que a artista tratou sistematicamente, sem sentimentalismo e com atenção aos gestos concretos do cuidado.',
    relacaoMedicina:
      'A higiene infantil tornou-se, no final do século XIX, tema central das campanhas de puericultura. A compreensão de que limpeza, água limpa e cuidados básicos reduziam drasticamente a mortalidade infantil transformou práticas domésticas em conteúdo de orientação médica. A cena permite observar esse cuidado no momento em que ele passava a ser objeto de ensino sistemático às famílias.',
    reflexao:
      'Que gestos cotidianos de cuidado passaram a ser ensinados por profissionais de saúde — e o que se transformou nessa passagem?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'The Art Institute of Chicago', ano: '', url: '' }
    ],
    referencias: ['ref-stevens-2009']
  },

  {
    id: 'obra-23',
    titulo: 'O berço',
    tituloOriginal: 'Le Berceau',
    artista: 'Berthe Morisot',
    ano: '1872 (a confirmar)',
    movimento: 'impressionismo',
    estilo: 'Impressionismo francês',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Musée d’Orsay, Paris (a confirmar)',
    imagem: './assets/obras/obra-23.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher sentada ao lado de um berço coberto por um véu translúcido, com a mão apoiada no rosto, observando um bebê que dorme.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['impressionismo', 'pintura', 'maternidade', 'infancia', 'cotidiano'],
    palavrasChave: ['morisot', 'berço', 'sono', 'maternidade', 'orsay', 'impressionismo', 'mulheres artistas'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, dimensões e número de inventário junto à instituição.',
    descricaoVisual:
      'Uma mulher sentada, de perfil, apoia o rosto em uma das mãos e mantém a outra sobre um véu translúcido que cobre um berço. Sob o véu, distingue-se um bebê adormecido com o braço dobrado. A pincelada é solta e a luz, difusa. A expressão da mulher é contida, difícil de classificar.',
    contextoHistorico:
      'Morisot foi uma das figuras centrais do grupo impressionista e expôs na primeira mostra do movimento. As restrições sociais impostas às mulheres de sua classe limitavam seu acesso aos espaços públicos frequentados pelos colegas homens; o interior doméstico tornou-se, por isso, seu principal campo de observação — tratado com o mesmo rigor formal que outros aplicavam a paisagens e cafés.',
    relacaoMedicina:
      'A obra permite observar algo que a iconografia da maternidade quase sempre omite: o cansaço, a vigília e a ambivalência de quem cuida. A atenção contemporânea à saúde mental materna, ao puerpério e ao esgotamento de quem cuida encontra aqui uma imagem anterior a qualquer formulação clínica do tema — e mais honesta do que a maioria das representações idealizadas de sua época.',
    reflexao:
      'O que esta imagem mostra sobre a experiência de cuidar que as representações idealizadas de maternidade costumam deixar de fora?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Musée d’Orsay, Paris', ano: '', url: '' }
    ],
    referencias: []
  },

  {
    id: 'obra-25',
    titulo: 'Maternidade',
    tituloOriginal: 'Maternité / L’Enfant au sein',
    artista: 'Pierre-Auguste Renoir',
    ano: 'A partir de 1885',
    movimento: 'impressionismo',
    estilo: 'Impressionismo francês',
    tecnica: 'Técnica a confirmar conforme a versão (óleo, pastel e desenho)',
    localizacao: 'Coleção a confirmar',
    imagem: './assets/obras/obra-25.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher sentada ao ar livre, com chapéu de palha, amamentando um bebê enrolado em panos brancos que segura o próprio pé.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['impressionismo', 'pintura', 'maternidade', 'cotidiano', 'familia'],
    palavrasChave: ['renoir', 'amamentação', 'maternidade', 'impressionismo', 'frança', 'família'],
    destaque: false,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'O artista retomou este tema em diversas versões e técnicas, distribuídas por diferentes coleções. É indispensável identificar exatamente a versão reproduzida — com título, data, técnica, dimensões e coleção — antes da publicação.',
    descricaoVisual:
      'Uma mulher sentada sobre um tronco, ao ar livre, com chapéu de palha e blusa alaranjada aberta no peito, sustenta no colo um bebê enrolado em panos brancos, que mama enquanto segura o próprio pé com a mão. Ela veste saia azul e botinas. Ao fundo, um muro claro e vegetação. No canto inferior direito lê-se a assinatura.',
    contextoHistorico:
      'A cena retoma um repertório visual antiquíssimo — a mulher que amamenta ao ar livre — despojado agora de qualquer atributo religioso ou mitológico. Trata-se de assunto doméstico e familiar, tratado como episódio da vida moderna. A insistência do artista no tema ao longo de anos indica seu interesse em fixar a cena como motivo pictórico, e não como registro documental.',
    relacaoMedicina:
      'A obra é útil para discutir a normalização visual da amamentação em espaço aberto. Ao longo do século XX, essa naturalidade se reduziu em muitos contextos urbanos, e amamentar em público voltou a ser objeto de constrangimento e regulação — questão que persiste no debate contemporâneo sobre o direito de amamentar em espaços coletivos.',
    reflexao:
      'O que mudou, entre esta cena e hoje, na maneira como a sociedade reage a uma mulher amamentando em público?',
    fontes: [
      { titulo: 'Ficha da versão reproduzida', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: []
  },

  /* ========= MODERNISMO E FOTOGRAFIA DOCUMENTAL =============== */

{
    id: 'obra-26',
    titulo: 'As Três Idades da Mulher',
    tituloOriginal: 'Le tre età della donna',
    artista: 'Gustav Klimt',
    ano: '1905 (a confirmar)',
    movimento: 'modernismo',
    estilo: 'Secessão vienense / Simbolismo',
    tecnica: 'Óleo sobre tela',
    localizacao: 'Galleria Nazionale d’Arte Moderna e Contemporanea, Roma (a confirmar)',
    imagem: './assets/obras/obra-26.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Pintura de uma mulher jovem de pé segurando no colo uma criança adormecida; ao lado, uma mulher idosa de cabeça baixa, sobre fundo ornamentado.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['modernismo', 'pintura', 'maternidade', 'corpo', 'infancia'],
    palavrasChave: ['klimt', 'viena', 'simbolismo', 'idades', 'maternidade', 'corpo', 'envelhecimento'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao: 'Confirmar datação, dimensões e número de inventário junto à instituição.',
    descricaoVisual:
      'Uma mulher jovem, de olhos fechados, segura junto ao corpo uma criança pequena que dorme com o rosto encostado no dela. À esquerda, uma mulher idosa, de corpo curvado e rosto oculto por uma das mãos, está de pé. O fundo é ornamental, com faixas de padrões geométricos e florais.',
    contextoHistorico:
      'A obra apresenta as fases da vida feminina como sequência: infância, juventude e velhice. A composição associa maternidade e beleza jovem em um bloco luminoso, enquanto separa visualmente a figura idosa, tratada com naturalismo cru. Esse contraste é característico do simbolismo vienense e de sua ambivalência diante do corpo feminino.',
    relacaoMedicina:
      'A obra permite discutir como a cultura visual associa maternidade a um período restrito da vida, deixando fora do enquadramento a saúde da mulher antes e depois dele. Na prática clínica e nas políticas de saúde, essa redução tem consequências: a atenção à saúde feminina tende a concentrar-se no ciclo gravídico-puerperal, com menor investimento em outras fases da vida.',
    reflexao:
      'Quando a saúde da mulher é pensada sobretudo em função da maternidade, o que deixa de ser cuidado?',
    fontes: [
      { titulo: 'Ficha da obra', instituicao: 'Galleria Nazionale d’Arte Moderna e Contemporanea, Roma', ano: '', url: '' }
    ],
    referencias: []
  },

  {
    id: 'obra-27',
    titulo: 'Mulher com criança morta',
    tituloOriginal: 'Frau mit totem Kind',
    artista: 'Käthe Kollwitz',
    ano: '1903 (a confirmar)',
    movimento: 'modernismo',
    estilo: 'Expressionismo alemão — gravura',
    tecnica: 'Água-forte e ponta-seca (exemplares em diversos estados)',
    localizacao: 'Exemplares em diversas coleções — indicar a do exemplar reproduzido',
    imagem: './assets/obras/obra-27.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Gravura em tons escuros de uma mulher nua, curvada e agachada, envolvendo com os braços e o rosto o corpo de uma criança.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['modernismo', 'gravura', 'saude-materno-infantil', 'infancia', 'maternidade'],
    palavrasChave: ['kollwitz', 'luto', 'mortalidade infantil', 'expressionismo', 'alemanha', 'pobreza'],
    destaque: true,
    verificacao: 'a-confirmar',
    notaVerificacao:
      'A artista produziu diversos estados e versões desta imagem. Confirmar título, datação, estado e coleção do exemplar reproduzido.',
    descricaoVisual:
      'Em tons muito escuros, uma mulher nua, agachada e curvada sobre si mesma, envolve com os braços e as pernas o corpo de uma criança, pressionando o rosto contra ele. Os dois corpos formam uma massa quase indistinta. Não há cenário.',
    contextoHistorico:
      'Kollwitz viveu e trabalhou em um bairro operário de Berlim, onde seu marido era médico de uma sociedade de socorro mútuo. Sua obra acompanha de perto as condições de vida das famílias trabalhadoras e trata sistematicamente de fome, doença, luto e guerra — temas que a arte oficial do período raramente representava sem heroísmo.',
    relacaoMedicina:
      'A mortalidade infantil na Europa urbana do início do século XX ainda era muito elevada, concentrada nas famílias mais pobres e associada a desnutrição, diarreias e doenças infecciosas. Esta imagem torna visível o que as estatísticas de saúde pública registram como número. Para o ensino em saúde, ela permite discutir a experiência do luto — dimensão que os indicadores não expressam.',
    reflexao:
      'O que uma imagem de luto acrescenta ao que as estatísticas de mortalidade infantil já informam?',
    fontes: [
      { titulo: 'Ficha do exemplar reproduzido', instituicao: 'Instituição a confirmar', ano: '', url: '' }
    ],
    referencias: []
  },

{
    id: 'obra-11',
    titulo: 'Mãe migrante',
    tituloOriginal: 'Migrant Mother',
    artista: 'Dorothea Lange',
    ano: '1936',
    movimento: 'modernismo',
    estilo: 'Fotografia documental',
    tecnica: 'Fotografia',
    localizacao: 'Library of Congress, Washington (Farm Security Administration/OWI Collection)',
    imagem: './assets/obras/obra-11.jpg',
    imagemStatus: 'definitiva',
    altTexto: 'Fotografia em preto e branco de uma mulher sentada, com a mão junto ao rosto, acompanhada de crianças que se apoiam em seus ombros e de um bebê em seu colo.',
    creditoImagem: 'Reprodução obtida no Wikimedia Commons. Autoria da fotografia, licença e página de origem a registrar individualmente antes da publicação.',
    categorias: ['modernismo', 'fotografia', 'documento', 'nutricao', 'saude-publica'],
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

];

/* Rótulos legíveis para as categorias usadas nos filtros.
   Os `id` de `movimentos` devem coincidir com os de data/movimentos.js. */
window.AcervoData.categorias = {
  movimentos: [
    { id: 'antiguidade', rotulo: 'Antiguidade' },
    { id: 'idade-media', rotulo: 'Medieval e gótico' },
    { id: 'renascimento', rotulo: 'Renascimento e Maneirismo' },
    { id: 'barroco', rotulo: 'Barroco' },
    { id: 'rococo-neoclassicismo', rotulo: 'Rococó e Neoclassicismo' },
    { id: 'romantismo-realismo', rotulo: 'Romantismo e Realismo' },
    { id: 'impressionismo', rotulo: 'Impressionismo' },
    { id: 'modernismo', rotulo: 'Modernismo' }
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
    { id: 'mito-fundacao', rotulo: 'Mito e alegoria' }
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
