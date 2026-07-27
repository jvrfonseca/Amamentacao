/* =========================================================================
   Núcleo compartilhado por todas as páginas.

   Expõe window.Site com utilidades usadas pelos demais scripts e cuida do
   cabeçalho, do ano do rodapé e da revelação suave das seções.
   ========================================================================= */

window.Site = (function () {
  'use strict';

  function $(seletor, escopo) { return (escopo || document).querySelector(seletor); }

  function $$(seletor, escopo) {
    return Array.prototype.slice.call((escopo || document).querySelectorAll(seletor));
  }

  function criar(tag, classe, texto) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto !== undefined && texto !== null) el.textContent = texto;
    return el;
  }

  /* Só entram no site as obras marcadas como publicadas, já em ordem
     cronológica pelo ano inicial. Obras sem datação abrem seu período. */
  function obras() {
    var dados = (window.Acervo && window.Acervo.obras) || [];
    var ordemPeriodo = periodos().map(function (p) { return p.id; });

    return dados
      .filter(function (o) { return o.publicado !== false; })
      .slice()
      .sort(function (a, b) {
        var pa = ordemPeriodo.indexOf(a.periodo);
        var pb = ordemPeriodo.indexOf(b.periodo);
        if (pa !== pb) return pa - pb;
        var ia = a.anoInicial === null || a.anoInicial === undefined ? -Infinity : a.anoInicial;
        var ib = b.anoInicial === null || b.anoInicial === undefined ? -Infinity : b.anoInicial;
        return ia - ib;
      });
  }

  function periodos() {
    return (window.Acervo && window.Acervo.periodos) || [];
  }

  /* Períodos que realmente têm obra publicada — é daqui que saem os filtros. */
  function periodosComObras() {
    var contagem = {};
    obras().forEach(function (o) { contagem[o.periodo] = (contagem[o.periodo] || 0) + 1; });
    return periodos()
      .filter(function (p) { return contagem[p.id]; })
      .map(function (p) {
        var copia = Object.assign({}, p);
        copia.total = contagem[p.id];
        return copia;
      });
  }

  function periodoPorId(id) {
    var achado = periodos().filter(function (p) { return p.id === id; })[0];
    return achado || null;
  }

  function rotuloPeriodo(id) {
    var p = periodoPorId(id);
    return p ? p.titulo : id;
  }

  function obraPorSlug(slug) {
    return obras().filter(function (o) { return (o.slug || o.id) === slug; })[0] || null;
  }

  /* Legenda curta usada nos cards e nos blocos de destaque. */
  function legenda(obra) {
    return [obra.artista, obra.data].filter(Boolean).join(', ');
  }

  function textoAlternativo(obra) {
    return obra.altTexto || ('Reprodução da obra ' + obra.titulo + '.');
  }

  function imagem(obra, opcoes) {
    opcoes = opcoes || {};
    var img = criar('img');
    img.src = opcoes.cheia ? obra.imagem : (obra.miniatura || obra.imagem);
    img.alt = textoAlternativo(obra);
    img.decoding = 'async';
    if (opcoes.lazy !== false) img.loading = 'lazy';

    img.addEventListener('error', function () {
      if (img.dataset.falhou) return;
      img.dataset.falhou = '1';
      // Se a miniatura faltar, tenta a imagem cheia antes de desistir.
      img.src = img.src.indexOf('/thumbs/') !== -1 ? obra.imagem : './assets/obras/sem-imagem.svg';
    });
    return img;
  }

  function normalizar(texto) {
    return String(texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /* ------------------------------ cabeçalho ---------------------------- */

  function iniciarCabecalho() {
    var topo = $('.topo');
    var botao = $('#menu-botao');
    var menu = $('#menu');
    if (!topo || !botao || !menu) return;

    botao.addEventListener('click', function () {
      var aberto = botao.getAttribute('aria-expanded') === 'true';
      botao.setAttribute('aria-expanded', String(!aberto));
      menu.classList.toggle('aberto', !aberto);
    });

    menu.addEventListener('click', function (evento) {
      if (evento.target.closest('a')) {
        botao.setAttribute('aria-expanded', 'false');
        menu.classList.remove('aberto');
      }
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
        botao.setAttribute('aria-expanded', 'false');
        menu.classList.remove('aberto');
        botao.focus();
      }
    });

    var aguardando = false;
    window.addEventListener('scroll', function () {
      if (aguardando) return;
      aguardando = true;
      window.requestAnimationFrame(function () {
        topo.classList.toggle('compacto', window.scrollY > 24);
        aguardando = false;
      });
    }, { passive: true });
  }

  function iniciarAno() {
    var alvo = $('#ano');
    if (alvo) alvo.textContent = String(new Date().getFullYear());
  }

  function iniciarRevelacao() {
    var alvos = $$('.secao, .revelar');
    if (!alvos.length) return;

    var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (semMovimento || !('IntersectionObserver' in window)) {
      alvos.forEach(function (a) { a.classList.add('visivel'); });
      return;
    }

    alvos.forEach(function (a) { a.classList.add('revelar'); });

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

    alvos.forEach(function (a) { observador.observe(a); });
  }

  function aoCarregar(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  aoCarregar(function () {
    iniciarCabecalho();
    iniciarAno();
    iniciarRevelacao();
  });

  return {
    $: $, $$: $$, criar: criar, aoCarregar: aoCarregar,
    obras: obras, periodos: periodos, periodosComObras: periodosComObras,
    periodoPorId: periodoPorId, rotuloPeriodo: rotuloPeriodo, obraPorSlug: obraPorSlug,
    legenda: legenda, imagem: imagem, textoAlternativo: textoAlternativo,
    normalizar: normalizar
  };
})();
