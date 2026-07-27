/**
 * Marcos cronológicos — Amamentação e Arte
 *
 * Exibidos na página História e Arte, em lista única. A linha do tempo avança
 * além da última obra do acervo de propósito: os marcos médicos e políticos
 * decisivos para o aleitamento vieram depois destas obras.
 *
 * `tipo`: 'arte' | 'historia' | 'medicina' | 'sociedade' | 'religiao' | 'saude-publica'
 * `verificacao`: 'confirmado' (conferido em fonte) | 'a-confirmar' (pendente)
 *
 * Nenhum marco deve entrar sem fonte identificável.
 */

window.Acervo = window.Acervo || {};

window.Acervo.marcos = [
  {
    id: 'evento-01',
    data: 'Século II d.C.',
    titulo: 'Sorano de Éfeso escreve sobre amamentação e escolha de amas',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'O tratado de ginecologia atribuído a Sorano de Éfeso reúne orientações sobre o início da amamentação, a frequência das mamadas, os critérios para a escolha de uma ama de leite e o momento do desmame. É um dos textos antigos mais citados na história da alimentação infantil.'
  },
  {
    id: 'evento-02',
    data: 'Séculos XIII–XV',
    titulo: 'Difusão da iconografia da Virgo lactans na Europa',
    tipo: 'arte',
    verificacao: 'a-confirmar',
    descricao:
      'A representação da Virgem amamentando o menino difunde-se amplamente na pintura e na escultura europeias, tornando-se um dos temas devocionais mais reproduzidos do período.'
  },
  {
    id: 'evento-03',
    data: '1472',
    titulo: 'Publicação de um dos primeiros tratados impressos sobre doenças das crianças',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'O "Libellus de egritudinibus infantium", de Paolo Bagellardo, é frequentemente apontado como um dos primeiros tratados impressos dedicados às doenças infantis, marco citado na constituição do campo que viria a se tornar a pediatria.'
  },
  {
    id: 'evento-04',
    data: '1748',
    titulo: 'Crítica médica ao sistema de amas de leite na Inglaterra',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'O ensaio de William Cadogan sobre os cuidados com as crianças defende a amamentação pela própria mãe e critica práticas correntes de alimentação de lactentes. O texto teve grande circulação e influenciou o debate público sobre o cuidado infantil.'
  },
  {
    id: 'evento-05',
    data: '1762',
    titulo: '"Emílio" e a defesa filosófica da amamentação materna',
    tipo: 'sociedade',
    verificacao: 'a-confirmar',
    descricao:
      'A publicação de "Emílio, ou Da educação", de Jean-Jacques Rousseau, contribui para transformar a amamentação pela própria mãe em dever moral e natural no debate europeu, com efeitos duradouros sobre a expectativa social dirigida às mulheres.'
  },
  {
    id: 'evento-06',
    data: 'Século XIX',
    titulo: 'Amas de leite escravizadas e libertas no Brasil',
    tipo: 'sociedade',
    verificacao: 'a-confirmar',
    descricao:
      'No Brasil escravista, mulheres negras eram sistematicamente empregadas para amamentar crianças de famílias brancas, frequentemente separadas dos próprios filhos. Anúncios de jornal do período documentam a oferta e a procura desse trabalho. Bibliografia específica em levantamento.'
  },
  {
    id: 'evento-07',
    data: 'Década de 1860',
    titulo: 'Primeiros substitutos industriais do leite materno',
    tipo: 'medicina',
    verificacao: 'a-confirmar',
    descricao:
      'A produção industrial de alimentos destinados a lactentes tem início na Europa a partir de formulações desenvolvidas por químicos do período. O acesso a alternativas ao leite humano transforma a alimentação infantil — e introduz novos riscos, sobretudo diante das condições sanitárias e da falta de água segura.'
  },
  {
    id: 'evento-08',
    data: 'Fim do século XIX',
    titulo: 'Consultas de lactentes e serviços de distribuição de leite',
    tipo: 'saude-publica',
    verificacao: 'a-confirmar',
    descricao:
      'Diante da mortalidade infantil urbana, organizam-se em cidades europeias serviços de acompanhamento de lactentes e de distribuição de leite, entre eles as iniciativas associadas a Pierre Budin e ao movimento das "Gotas de Leite". Datas e locais específicos a confirmar.'
  },
  {
    id: 'evento-09',
    data: '1956',
    titulo: 'Organização de grupos de apoio entre mulheres',
    tipo: 'sociedade',
    verificacao: 'a-confirmar',
    descricao:
      'A fundação da La Leche League, nos Estados Unidos, marca a organização de grupos de apoio mútuo entre mulheres em torno da amamentação, em um período de baixa prevalência do aleitamento em países industrializados.'
  },
  {
    id: 'evento-10',
    data: '1981',
    titulo: 'Código Internacional de Comercialização de Substitutos do Leite Materno',
    tipo: 'saude-publica',
    verificacao: 'confirmado',
    descricao:
      'A Assembleia Mundial da Saúde adota o Código Internacional de Comercialização de Substitutos do Leite Materno, que estabelece restrições à promoção comercial desses produtos. É um dos marcos regulatórios mais citados na história recente da alimentação infantil.'
  },
  {
    id: 'evento-11',
    data: 'Década de 1980',
    titulo: 'Programa nacional de incentivo ao aleitamento materno no Brasil',
    tipo: 'saude-publica',
    verificacao: 'a-confirmar',
    descricao:
      'O Brasil estrutura ações nacionais de incentivo ao aleitamento materno, articulando campanhas, formação de profissionais e, posteriormente, a rede de bancos de leite humano. Datas e denominações oficiais a confirmar junto ao Ministério da Saúde.'
  },
  {
    id: 'evento-12',
    data: '1990',
    titulo: 'Declaração de Innocenti',
    tipo: 'saude-publica',
    verificacao: 'confirmado',
    descricao:
      'Documento firmado em encontro promovido por OMS e UNICEF, estabelece metas internacionais de proteção, promoção e apoio ao aleitamento materno, incluindo o compromisso dos serviços de saúde com práticas favoráveis à amamentação.'
  },
  {
    id: 'evento-13',
    data: '1991',
    titulo: 'Iniciativa Hospital Amigo da Criança',
    tipo: 'saude-publica',
    verificacao: 'confirmado',
    descricao:
      'OMS e UNICEF lançam a iniciativa que estabelece práticas hospitalares de apoio ao aleitamento, entre elas o contato precoce entre mãe e recém-nascido e a orientação qualificada no pós-parto imediato.'
  },
  {
    id: 'evento-14',
    data: '2001',
    titulo: 'Recomendação de aleitamento materno exclusivo até os seis meses',
    tipo: 'medicina',
    verificacao: 'confirmado',
    descricao:
      'A Organização Mundial da Saúde passa a recomendar o aleitamento materno exclusivo durante os primeiros seis meses de vida, com continuidade acompanhada de alimentação complementar adequada.'
  },
  {
    id: 'evento-15',
    data: '2016',
    titulo: 'Série sobre amamentação em periódico médico internacional',
    tipo: 'medicina',
    verificacao: 'confirmado',
    descricao:
      'A revista The Lancet publica uma série dedicada à amamentação no século XXI, reunindo dados sobre prevalência, desigualdades entre países e efeitos sobre a saúde materna e infantil.'
  }
];
