/**
 * Linha do tempo histórica e médica — Amamentação e Arte
 *
 * Tipos aceitos: 'arte' | 'historia' | 'medicina' | 'sociedade' | 'religiao' | 'saude-publica'
 *
 * REGRA EDITORIAL
 * ---------------
 * Nenhum acontecimento deve ser inserido sem fonte identificável. O campo
 * `verificacao` controla o selo exibido na interface:
 *   "confirmado"  → conferido em fonte institucional ou bibliográfica citada.
 *   "a-confirmar" → marco plausível, ainda pendente de conferência documental.
 *
 * O campo `fontes` está preparado para receber referências completas. As URLs
 * foram deixadas em branco propositalmente: devem ser preenchidas com o
 * endereço exato do documento consultado, e não com páginas genéricas.
 */

window.AcervoData = window.AcervoData || {};

window.AcervoData.timeline = [
  {
    id: 'evento-01',
    periodo: 'antiguidade',
    data: 'Século II d.C.',
    titulo: 'Sorano de Éfeso escreve sobre amamentação e escolha de amas',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'O tratado de ginecologia atribuído a Sorano de Éfeso reúne orientações sobre o início da amamentação, a frequência das mamadas, os critérios para a escolha de uma ama de leite e o momento do desmame. É um dos textos antigos mais citados na história da alimentação infantil.',
    fontes: [{ titulo: 'Ginecologia', instituicao: 'Sorano de Éfeso (edições críticas modernas)', ano: 'séc. II d.C.', url: '' }],
    obrasRelacionadas: ['obra-02']
  },
  {
    id: 'evento-02',
    periodo: 'idade-media',
    data: 'Séculos XIII–XV',
    titulo: 'Difusão da iconografia da Virgo lactans na Europa',
    tipo: 'arte',
    verificacao: 'a-confirmar',
    descricao:
      'A representação da Virgem amamentando o menino difunde-se amplamente na pintura e na escultura europeias, tornando-se um dos temas devocionais mais reproduzidos do período.',
    fontes: [{ titulo: 'Bibliografia de história da arte a completar', instituicao: '', ano: '', url: '' }],
    obrasRelacionadas: ['obra-03']
  },
  {
    id: 'evento-03',
    periodo: 'renascimento',
    data: '1472',
    titulo: 'Publicação de um dos primeiros tratados impressos sobre doenças das crianças',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'O "Libellus de egritudinibus infantium", de Paolo Bagellardo, é frequentemente apontado como um dos primeiros tratados impressos dedicados às doenças infantis, marco citado na constituição do campo que viria a se tornar a pediatria.',
    fontes: [{ titulo: 'Libellus de egritudinibus infantium', instituicao: 'Paolo Bagellardo', ano: '1472', url: '' }],
    obrasRelacionadas: ['obra-05']
  },
  {
    id: 'evento-04',
    periodo: 'idade-moderna',
    data: '1748',
    titulo: 'Crítica médica ao sistema de amas de leite na Inglaterra',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'O ensaio de William Cadogan sobre os cuidados com as crianças defende a amamentação pela própria mãe e critica práticas correntes de alimentação de lactentes. O texto teve grande circulação e influenciou o debate público sobre o cuidado infantil.',
    fontes: [{ titulo: 'An Essay upon Nursing and the Management of Children', instituicao: 'William Cadogan', ano: '1748', url: '' }],
    obrasRelacionadas: ['obra-06']
  },
  {
    id: 'evento-05',
    periodo: 'idade-moderna',
    data: '1762',
    titulo: '"Emílio" e a defesa filosófica da amamentação materna',
    tipo: 'sociedade',
    verificacao: 'a-confirmar',
    descricao:
      'A publicação de "Emílio, ou Da educação", de Jean-Jacques Rousseau, contribui para transformar a amamentação pela própria mãe em dever moral e natural no debate europeu, com efeitos duradouros sobre a expectativa social dirigida às mulheres.',
    fontes: [{ titulo: 'Émile ou De l’éducation', instituicao: 'Jean-Jacques Rousseau', ano: '1762', url: '' }],
    obrasRelacionadas: ['obra-06', 'obra-07']
  },
  {
    id: 'evento-06',
    periodo: 'seculo-xix',
    data: 'Século XIX',
    titulo: 'Amas de leite escravizadas e libertas no Brasil',
    tipo: 'sociedade',
    verificacao: 'a-confirmar',
    descricao:
      'No Brasil escravista, mulheres negras eram sistematicamente empregadas para amamentar crianças de famílias brancas, frequentemente separadas dos próprios filhos. Anúncios de jornal do período documentam a oferta e a procura desse trabalho. Bibliografia específica em levantamento.',
    fontes: [{ titulo: 'Levantamento bibliográfico em andamento', instituicao: '', ano: '', url: '' }],
    obrasRelacionadas: ['obra-09']
  },
  {
    id: 'evento-07',
    periodo: 'seculo-xix',
    data: 'Década de 1860',
    titulo: 'Primeiros substitutos industriais do leite materno',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'A produção industrial de alimentos destinados a lactentes tem início na Europa a partir de formulações desenvolvidas por químicos do período. O acesso a alternativas ao leite humano transforma a alimentação infantil — e introduz novos riscos, sobretudo diante das condições sanitárias e da falta de água segura.',
    fontes: [{ titulo: 'Referência a completar', instituicao: '', ano: '', url: '' }],
    obrasRelacionadas: ['obra-08']
  },
  {
    id: 'evento-08',
    periodo: 'seculo-xix',
    data: 'Fim do século XIX',
    titulo: 'Consultas de lactentes e serviços de distribuição de leite',
    tipo: 'saude-publica',
    verificacao: 'a-confirmar',
    descricao:
      'Diante da mortalidade infantil urbana, organizam-se em cidades europeias serviços de acompanhamento de lactentes e de distribuição de leite, entre eles as iniciativas associadas a Pierre Budin e ao movimento das "Gotas de Leite". Datas e locais específicos a confirmar.',
    fontes: [{ titulo: 'Referência a completar', instituicao: '', ano: '', url: '' }],
    obrasRelacionadas: ['obra-08']
  },
  {
    id: 'evento-09',
    periodo: 'seculo-xx',
    data: '1956',
    titulo: 'Organização de grupos de apoio entre mulheres',
    tipo: 'sociedade',
    verificacao: 'a-confirmar',
    descricao:
      'A fundação da La Leche League, nos Estados Unidos, marca a organização de grupos de apoio mútuo entre mulheres em torno da amamentação, em um período de baixa prevalência do aleitamento em países industrializados.',
    fontes: [{ titulo: 'Histórico institucional', instituicao: 'La Leche League International', ano: '', url: '' }],
    obrasRelacionadas: []
  },
  {
    id: 'evento-10',
    periodo: 'seculo-xx',
    data: '1981',
    titulo: 'Código Internacional de Comercialização de Substitutos do Leite Materno',
    tipo: 'saude-publica',
    verificacao: 'confirmado',
    descricao:
      'A Assembleia Mundial da Saúde adota o Código Internacional de Comercialização de Substitutos do Leite Materno, que estabelece restrições à promoção comercial desses produtos. É um dos marcos regulatórios mais citados na história recente da alimentação infantil.',
    fontes: [
      { titulo: 'International Code of Marketing of Breast-milk Substitutes', instituicao: 'Organização Mundial da Saúde', ano: '1981', url: '' }
    ],
    obrasRelacionadas: []
  },
  {
    id: 'evento-11',
    periodo: 'seculo-xx',
    data: 'Década de 1980',
    titulo: 'Programa nacional de incentivo ao aleitamento materno no Brasil',
    tipo: 'saude-publica',
    verificacao: 'a-confirmar',
    descricao:
      'O Brasil estrutura ações nacionais de incentivo ao aleitamento materno, articulando campanhas, formação de profissionais e, posteriormente, a rede de bancos de leite humano. Datas e denominações oficiais a confirmar junto ao Ministério da Saúde.',
    fontes: [{ titulo: 'Documentação oficial a confirmar', instituicao: 'Ministério da Saúde (Brasil)', ano: '', url: '' }],
    obrasRelacionadas: []
  },
  {
    id: 'evento-12',
    periodo: 'seculo-xx',
    data: '1990',
    titulo: 'Declaração de Innocenti',
    tipo: 'saude-publica',
    verificacao: 'confirmado',
    descricao:
      'Documento firmado em encontro promovido por OMS e UNICEF, estabelece metas internacionais de proteção, promoção e apoio ao aleitamento materno, incluindo o compromisso dos serviços de saúde com práticas favoráveis à amamentação.',
    fontes: [{ titulo: 'Innocenti Declaration', instituicao: 'OMS / UNICEF', ano: '1990', url: '' }],
    obrasRelacionadas: []
  },
  {
    id: 'evento-13',
    periodo: 'seculo-xx',
    data: '1991',
    titulo: 'Iniciativa Hospital Amigo da Criança',
    tipo: 'saude-publica',
    verificacao: 'confirmado',
    descricao:
      'OMS e UNICEF lançam a iniciativa que estabelece práticas hospitalares de apoio ao aleitamento, entre elas o contato precoce entre mãe e recém-nascido e a orientação qualificada no pós-parto imediato.',
    fontes: [{ titulo: 'Baby-friendly Hospital Initiative', instituicao: 'OMS / UNICEF', ano: '1991', url: '' }],
    obrasRelacionadas: []
  },
  {
    id: 'evento-14',
    periodo: 'contemporaneidade',
    data: '2001',
    titulo: 'Recomendação de aleitamento materno exclusivo até os seis meses',
    tipo: 'medicina',
    verificacao: 'confirmado',
    descricao:
      'A Organização Mundial da Saúde passa a recomendar o aleitamento materno exclusivo durante os primeiros seis meses de vida, com continuidade acompanhada de alimentação complementar adequada.',
    fontes: [{ titulo: 'Recomendação sobre duração do aleitamento materno exclusivo', instituicao: 'Organização Mundial da Saúde', ano: '2001', url: '' }],
    obrasRelacionadas: ['obra-12']
  },
  {
    id: 'evento-15',
    periodo: 'contemporaneidade',
    data: '2016',
    titulo: 'Série sobre amamentação em periódico médico internacional',
    tipo: 'medicina',
    verificacao: 'confirmado',
    descricao:
      'A revista The Lancet publica uma série dedicada à amamentação no século XXI, reunindo dados sobre prevalência, desigualdades entre países e efeitos sobre a saúde materna e infantil.',
    fontes: [
      { titulo: 'Breastfeeding in the 21st century: epidemiology, mechanisms, and lifelong effect', instituicao: 'The Lancet', ano: '2016', url: '' }
    ],
    obrasRelacionadas: ['obra-12']
  }
];

/* Rótulos e sinais gráficos das categorias da linha do tempo.
   A distinção nunca depende apenas de cor: cada tipo tem rótulo textual e sinal próprio. */
window.AcervoData.tiposTimeline = [
  { id: 'arte', rotulo: 'Arte', sinal: '◆' },
  { id: 'historia', rotulo: 'História', sinal: '■' },
  { id: 'medicina', rotulo: 'Medicina', sinal: '▲' },
  { id: 'sociedade', rotulo: 'Sociedade', sinal: '●' },
  { id: 'religiao', rotulo: 'Religião', sinal: '✦' },
  { id: 'saude-publica', rotulo: 'Saúde pública', sinal: '▬' }
];
