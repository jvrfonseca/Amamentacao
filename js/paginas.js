/* =========================================================================
   Blocos gerados a partir dos dados nas páginas que não são a galeria:
   obra em destaque (Início), períodos e marcos (História e Arte),
   créditos e referências (Sobre o Projeto).
   ========================================================================= */

(function () {
  'use strict';

  var S = window.Site;
  if (!S) return;

  /* -------------------- Início: uma única obra em destaque -------------- */

  function montarDestaque() {
    var alvo = S.$('#obra-destaque');
    if (!alvo) return;

    var candidatas = S.obras().filter(function (o) { return o.destaque; });
    var obra = candidatas[0] || S.obras()[0];
    if (!obra) return;

    var slug = obra.slug || obra.id;

    var figura = S.criar('figure', 'destaque-obra__figura');
    figura.appendChild(S.imagem(obra, { lazy: false }));
    alvo.appendChild(figura);

    var texto = S.criar('div');
    texto.appendChild(S.criar('p', 'rotulo', 'Obra em destaque'));
    texto.appendChild(S.criar('h2', 'destaque-obra__titulo', obra.titulo));
    texto.appendChild(S.criar('p', 'destaque-obra__meta', S.legenda(obra)));

    if (obra.perguntaReflexao) {
      texto.appendChild(S.criar('p', 'reflexao', obra.perguntaReflexao));
    }

    var link = S.criar('a', 'botao botao--vazado', 'Conhecer esta obra');
    link.href = './galeria.html?obra=' + encodeURIComponent(slug);
    texto.appendChild(link);

    alvo.appendChild(texto);
  }

  /* ------------- História e Arte: períodos com obra representativa ------- */

  function montarPeriodos() {
    var alvo = S.$('#periodos');
    if (!alvo) return;

    var obras = S.obras();

    S.periodosComObras().forEach(function (periodo, indice) {
      var doPeriodo = obras.filter(function (o) { return o.periodo === periodo.id; });
      var representativa = doPeriodo.filter(function (o) { return o.destaque; })[0] || doPeriodo[0];

      var artigo = S.criar('article', 'periodo revelar');
      artigo.id = 'periodo-' + periodo.id;

      var texto = S.criar('div', 'periodo__texto');
      texto.appendChild(S.criar('span', 'periodo__indice',
        String(indice + 1).padStart(2, '0') + ' · Período'));
      texto.appendChild(S.criar('h2', 'periodo__titulo', periodo.titulo));
      texto.appendChild(S.criar('p', 'periodo__intervalo', periodo.intervalo));
      texto.appendChild(S.criar('p', null, periodo.narrativa));

      if (periodo.comoAparece) {
        var como = S.criar('div', 'periodo__bloco');
        como.appendChild(S.criar('p', 'periodo__bloco-rotulo', 'Como a amamentação aparece'));
        como.appendChild(S.criar('p', null, periodo.comoAparece));
        texto.appendChild(como);
      }

      if (periodo.contextoMedico) {
        var medico = S.criar('div', 'periodo__bloco');
        medico.appendChild(S.criar('p', 'periodo__bloco-rotulo', 'O que a medicina sabia'));
        medico.appendChild(S.criar('p', null, periodo.contextoMedico));
        texto.appendChild(medico);
      }

      var acoes = S.criar('p', 'periodo__acoes');
      var link = S.criar('a', 'elo',
        'Ver as ' + periodo.total + (periodo.total === 1 ? ' obra' : ' obras') + ' deste período');
      link.href = './galeria.html?periodo=' + encodeURIComponent(periodo.id);
      acoes.appendChild(link);
      texto.appendChild(acoes);

      artigo.appendChild(texto);

      if (representativa) {
        var figura = S.criar('figure', 'periodo__figura');
        var botao = S.criar('a');
        botao.href = './galeria.html?obra=' + encodeURIComponent(representativa.slug || representativa.id);
        botao.appendChild(S.imagem(representativa));
        figura.appendChild(botao);
        figura.appendChild(S.criar('figcaption', 'periodo__legenda',
          representativa.titulo + ' · ' + S.legenda(representativa)));
        artigo.appendChild(figura);
      }

      alvo.appendChild(artigo);
    });
  }

  /* ------------------ História e Arte: marcos cronológicos --------------- */

  var ROTULOS_TIPO = {
    arte: 'Arte',
    historia: 'História',
    medicina: 'Medicina',
    sociedade: 'Sociedade',
    religiao: 'Religião',
    'saude-publica': 'Saúde pública'
  };

  function montarMarcos() {
    var alvo = S.$('#marcos');
    if (!alvo) return;

    var eventos = (window.Acervo && window.Acervo.marcos) || [];

    eventos.forEach(function (evento) {
      var item = S.criar('li', 'marco');

      var topo = S.criar('div', 'marco__topo');
      topo.appendChild(S.criar('span', 'marco__data', evento.data));
      topo.appendChild(S.criar('span', 'marco__tipo', ROTULOS_TIPO[evento.tipo] || evento.tipo));
      item.appendChild(topo);

      if (evento.verificacao === 'a-confirmar') {
        topo.appendChild(S.criar('span', 'marco__tipo', 'a confirmar'));
      }

      item.appendChild(S.criar('h3', null, evento.titulo));
      item.appendChild(S.criar('p', null, evento.descricao));
      alvo.appendChild(item);
    });
  }

  /* --------------------- Sobre: créditos e referências ------------------ */

  function montarCreditos() {
    var alvo = S.$('#creditos');
    if (!alvo) return;

    S.obras().forEach(function (obra) {
      var item = S.criar('li');
      item.appendChild(S.criar('span', 'creditos__obra', obra.titulo + ' — ' + obra.artista));
      item.appendChild(S.criar('span', 'creditos__fonte', obra.fonteImagem || 'Crédito a confirmar.'));
      alvo.appendChild(item);
    });
  }

  function montarReferencias() {
    var alvo = S.$('#referencias');
    if (!alvo) return;

    ((window.Acervo && window.Acervo.referencias) || []).forEach(function (ref) {
      var item = S.criar('li');
      var texto = S.criar('p');

      if (ref.autor) texto.appendChild(document.createTextNode(ref.autor + '. '));
      texto.appendChild(S.criar('em', null, ref.titulo));

      var complemento = [ref.publicacao, ref.ano].filter(Boolean).join(', ');
      if (complemento) texto.appendChild(document.createTextNode('. ' + complemento + '.'));

      item.appendChild(texto);
      if (ref.nota) item.appendChild(S.criar('p', 'nota', ref.nota));
      alvo.appendChild(item);
    });
  }

  /* ---------------------------- contagens ------------------------------- */

  function preencherTotais() {
    var total = S.obras().length;
    S.$$('[data-total-obras]').forEach(function (el) { el.textContent = String(total); });
    S.$$('[data-total-periodos]').forEach(function (el) {
      el.textContent = String(S.periodosComObras().length);
    });
  }

  S.aoCarregar(function () {
    montarDestaque();
    montarPeriodos();
    montarMarcos();
    montarCreditos();
    montarReferencias();
    preencherTotais();
  });
})();
