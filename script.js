/* =========================================================================
   Amamentação e Arte — comportamento da interface

   Este arquivo não contém conteúdo editorial. Todo texto sobre obras,
   movimentos artísticos, linha do tempo e referências vive em data/*.js.

   Módulos internos
   1. Utilidades
   2. Cabeçalho e navegação
   3. Percurso por movimentos artísticos
   4. Linha do tempo
   5. Destaques
   6. Acervo: filtros, busca e galeria
   7. Reflexões
   8. Referências
   9. Ficha da obra (modal)
   10. Revelação de seções e inicialização
   ========================================================================= */

(function () {
  'use strict';

  var dados = window.AcervoData || {};
  var OBRAS = dados.obras || [];
  var MOVIMENTOS = dados.movimentos || [];
  var TIMELINE = dados.timeline || [];
  var TIPOS = dados.tiposTimeline || [];
  var REFERENCIAS = dados.referencias || [];
  var CATEGORIAS = dados.categorias || { movimentos: [], temas: [], linguagens: [] };

  /* ========================== 1. UTILIDADES ============================ */

  function $(seletor, escopo) { return (escopo || document).querySelector(seletor); }
  function $$(seletor, escopo) { return Array.prototype.slice.call((escopo || document).querySelectorAll(seletor)); }

  function criar(tag, classe, texto) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto !== undefined && texto !== null) el.textContent = texto;
    return el;
  }

  function obraPorId(id) {
    for (var i = 0; i < OBRAS.length; i++) {
      if (OBRAS[i].id === id) return OBRAS[i];
    }
    return null;
  }

  function rotuloMovimento(id) {
    var lista = CATEGORIAS.movimentos || [];
    for (var i = 0; i < lista.length; i++) {
      if (lista[i].id === id) return lista[i].rotulo;
    }
    return id;
  }

  function tipoTimeline(id) {
    for (var i = 0; i < TIPOS.length; i++) {
      if (TIPOS[i].id === id) return TIPOS[i];
    }
    return { id: id, rotulo: id, sinal: '·' };
  }

  /* Normaliza acentuação e caixa para que a busca funcione com ou sem acentos. */
  function normalizar(texto) {
    return String(texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function pendente(valor) {
    return /a confirmar|em pesquisa|em atualiza|a definir|a completar|desconhecid/i.test(String(valor || ''));
  }

  /* Cada obra recebe um texto alternativo honesto: enquanto a imagem é apenas
     um espaço reservado, o alt informa isso em vez de descrever uma obra que
     não está sendo exibida. */
  function textoAlternativo(obra) {
    if (obra.imagemStatus === 'placeholder') {
      return 'Espaço reservado: a reprodução da obra "' + obra.titulo + '" ainda não está disponível.';
    }
    return obra.altTexto || 'Reprodução da obra ' + obra.titulo + '.';
  }

  function montarImagem(obra, lazy) {
    var img = criar('img');
    img.src = obra.imagem;
    img.alt = textoAlternativo(obra);
    img.decoding = 'async';
    if (lazy) img.loading = 'lazy';
    img.addEventListener('error', function () {
      if (img.dataset.falhou) return;
      img.dataset.falhou = '1';
      img.src = './assets/obras/obra-12.svg';
      img.alt = 'Imagem indisponível para a obra ' + obra.titulo + '.';
    });
    return img;
  }

  /* ==================== 2. CABEÇALHO E NAVEGAÇÃO ======================= */

  function iniciarCabecalho() {
    var header = $('.site-header');
    var toggle = $('#nav-toggle');
    var nav = $('#nav-principal');
    if (!header || !toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var aberto = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!aberto));
      nav.classList.toggle('is-aberto', !aberto);
    });

    // O menu se fecha ao escolher um item, comportamento esperado em telas pequenas.
    nav.addEventListener('click', function (evento) {
      if (evento.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-aberto');
      }
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && nav.classList.contains('is-aberto')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-aberto');
        toggle.focus();
      }
    });

    var aguardando = false;
    window.addEventListener('scroll', function () {
      if (aguardando) return;
      aguardando = true;
      window.requestAnimationFrame(function () {
        header.classList.toggle('is-compacto', window.scrollY > 40);
        aguardando = false;
      });
    }, { passive: true });
  }

  /* Marca no menu a seção visível no momento. */
  function iniciarSecaoAtual() {
    var links = $$('.nav__list a');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var mapa = {};
    var alvos = [];

    links.forEach(function (link) {
      var id = link.getAttribute('href');
      if (!id || id.charAt(0) !== '#') return;
      var secao = document.querySelector(id);
      if (!secao) return;
      mapa[id.slice(1)] = link;
      alvos.push(secao);
    });

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('is-atual'); });
        var atual = mapa[entrada.target.id];
        if (atual) atual.classList.add('is-atual');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    alvos.forEach(function (alvo) { observador.observe(alvo); });
  }

  /* =============== 3. PERCURSO POR MOVIMENTOS ARTÍSTICOS =============== */

  function montarMovimentos() {
    var container = $('#movimentos');
    var navLista = $('#movimento-nav-list');
    if (!container) return;

    MOVIMENTOS.forEach(function (movimento, indice) {
      if (navLista) {
        var item = criar('li');
        var atalho = criar('a', null, movimento.titulo);
        atalho.href = '#movimento-' + movimento.id;
        item.appendChild(atalho);
        navLista.appendChild(item);
      }

      var artigo = criar('article', 'movimento reveal');
      artigo.id = 'movimento-' + movimento.id;

      var texto = criar('div', 'movimento__texto');
      texto.appendChild(criar('span', 'movimento__numero', String(indice + 1).padStart(2, '0') + ' · Movimento'));

      var titulo = criar('h3', 'movimento__titulo', movimento.titulo);
      texto.appendChild(titulo);
      texto.appendChild(criar('p', 'movimento__intervalo',
        movimento.intervalo + (movimento.estiloResumo ? ' · ' + movimento.estiloResumo : '')));
      texto.appendChild(criar('p', null, movimento.introducao));

      var medico = criar('div', 'movimento__bloco');
      medico.appendChild(criar('p', 'movimento__bloco-rotulo', 'Conhecimentos médicos do período'));
      medico.appendChild(criar('p', null, movimento.contextoMedico));
      texto.appendChild(medico);

      if (movimento.transformacao) {
        var mudanca = criar('div', 'movimento__bloco');
        mudanca.appendChild(criar('p', 'movimento__bloco-rotulo', 'O que muda em relação ao período anterior'));
        mudanca.appendChild(criar('p', null, movimento.transformacao));
        texto.appendChild(mudanca);
      }

      if (movimento.reflexao) {
        texto.appendChild(criar('p', 'movimento__reflexao', movimento.reflexao));
      }

      var media = criar('div', 'movimento__media');
      var obras = (movimento.obras || []).map(obraPorId).filter(Boolean);

      if (obras.length) {
        media.appendChild(figuraObra(obras[0], 'principal'));

        if (obras.length > 1) {
          var secundarias = criar('div', 'movimento__secundarias');
          obras.slice(1).forEach(function (obra) {
            secundarias.appendChild(figuraObra(obra, 'secundaria'));
          });
          media.appendChild(secundarias);
        }
      }

      artigo.appendChild(texto);
      artigo.appendChild(media);
      container.appendChild(artigo);
    });
  }

  function figuraObra(obra, escala) {
    var figura = criar('figure', 'destaque');
    figura.style.margin = '0';

    var botao = criar('button', 'destaque__botao');
    botao.type = 'button';
    botao.dataset.obra = obra.id;

    var moldura = criar('span', 'destaque__moldura');
    if (escala === 'principal') moldura.style.aspectRatio = '4 / 5';
    moldura.appendChild(montarImagem(obra, true));
    botao.appendChild(moldura);

    var legenda = criar('span', 'destaque__titulo', obra.titulo);
    legenda.style.textAlign = 'left';
    botao.appendChild(legenda);

    var meta = criar('span', 'destaque__meta', obra.artista + ' · ' + obra.ano);
    meta.style.textAlign = 'left';
    botao.appendChild(meta);

    figura.appendChild(botao);
    return figura;
  }

  /* ======================= 4. LINHA DO TEMPO =========================== */

  var filtroTimeline = 'todos';

  function montarFiltrosTimeline() {
    var container = $('#timeline-filtros');
    if (!container) return;

    var usados = {};
    TIMELINE.forEach(function (evento) { usados[evento.tipo] = true; });

    var opcoes = [{ id: 'todos', rotulo: 'Todas', sinal: '·' }].concat(
      TIPOS.filter(function (tipo) { return usados[tipo.id]; })
    );

    opcoes.forEach(function (opcao) {
      var botao = criar('button', 'chip');
      botao.type = 'button';
      botao.setAttribute('aria-pressed', String(opcao.id === filtroTimeline));
      botao.dataset.tipo = opcao.id;

      var sinal = criar('span', 'chip__sinal', opcao.sinal);
      sinal.setAttribute('aria-hidden', 'true');
      botao.appendChild(sinal);
      botao.appendChild(criar('span', null, opcao.rotulo));

      botao.addEventListener('click', function () {
        filtroTimeline = opcao.id;
        $$('.chip', container).forEach(function (chip) {
          chip.setAttribute('aria-pressed', String(chip.dataset.tipo === filtroTimeline));
        });
        montarTimeline();
      });

      container.appendChild(botao);
    });
  }

  function montarTimeline() {
    var lista = $('#timeline');
    var vazio = $('#timeline-vazio');
    if (!lista) return;

    lista.innerHTML = '';

    var eventos = TIMELINE.filter(function (evento) {
      return filtroTimeline === 'todos' || evento.tipo === filtroTimeline;
    });

    if (vazio) vazio.hidden = eventos.length > 0;
    lista.hidden = eventos.length === 0;

    eventos.forEach(function (evento) {
      var tipo = tipoTimeline(evento.tipo);
      var item = criar('li', 'timeline-event');

      var topo = criar('div', 'timeline-event__topo');
      topo.appendChild(criar('span', 'timeline-event__data', evento.data));

      var etiqueta = criar('span', 'timeline-event__tipo');
      var sinal = criar('span', null, tipo.sinal);
      sinal.setAttribute('aria-hidden', 'true');
      etiqueta.appendChild(sinal);
      etiqueta.appendChild(criar('span', null, tipo.rotulo));
      topo.appendChild(etiqueta);

      if (evento.verificacao === 'a-confirmar') {
        topo.appendChild(criar('span', 'selo-pendente', 'a confirmar'));
      }

      item.appendChild(topo);
      item.appendChild(criar('h3', 'timeline-event__titulo', evento.titulo));
      item.appendChild(criar('p', 'timeline-event__descricao', evento.descricao));

      var fontes = (evento.fontes || []).filter(function (fonte) { return fonte.titulo; });
      if (fontes.length) {
        var meta = criar('p', 'timeline-event__meta');
        meta.appendChild(criar('span', null, 'Fonte: ' + fontes.map(function (fonte) {
          return fonte.titulo + (fonte.instituicao ? ' — ' + fonte.instituicao : '');
        }).join(' · ')));
        item.appendChild(meta);
      }

      var relacionadas = (evento.obrasRelacionadas || []).map(obraPorId).filter(Boolean);
      if (relacionadas.length) {
        var caixa = criar('div', 'timeline-event__obras');
        relacionadas.forEach(function (obra) {
          caixa.appendChild(botaoObra(obra, 'Ver obra: ' + obra.titulo));
        });
        item.appendChild(caixa);
      }

      lista.appendChild(item);
    });
  }

  function botaoObra(obra, rotulo) {
    var botao = criar('button', 'obra-link');
    botao.type = 'button';
    botao.dataset.obra = obra.id;
    botao.textContent = rotulo || obra.titulo;
    return botao;
  }

  /* ========================= 5. DESTAQUES ============================== */

  function montarDestaques() {
    var lista = $('#destaques-lista');
    if (!lista) return;

    var selecao = OBRAS.filter(function (obra) { return obra.destaque; }).slice(0, 6);

    selecao.forEach(function (obra) {
      var item = criar('li', 'destaque reveal');
      var botao = criar('button', 'destaque__botao');
      botao.type = 'button';
      botao.dataset.obra = obra.id;

      var moldura = criar('span', 'destaque__moldura');
      moldura.appendChild(montarImagem(obra, true));
      botao.appendChild(moldura);
      botao.appendChild(criar('span', 'destaque__titulo', obra.titulo));
      botao.appendChild(criar('span', 'destaque__meta', obra.artista + ' · ' + obra.ano));

      item.appendChild(botao);
      lista.appendChild(item);
    });
  }

  /* =================== 6. ACERVO: FILTROS E GALERIA ==================== */

  var estadoFiltros = { movimento: 'todos', tema: 'todos', linguagem: 'todos', busca: '' };
  var resultadoAtual = OBRAS.slice();

  function montarChipsFiltro(containerId, opcoes, chave) {
    var container = $(containerId);
    if (!container) return;

    var todas = [{ id: 'todos', rotulo: 'Todos' }].concat(opcoes);

    todas.forEach(function (opcao) {
      var botao = criar('button', 'chip');
      botao.type = 'button';
      botao.textContent = opcao.rotulo;
      botao.dataset.valor = opcao.id;
      botao.setAttribute('aria-pressed', String(estadoFiltros[chave] === opcao.id));

      botao.addEventListener('click', function () {
        estadoFiltros[chave] = opcao.id;
        $$('.chip', container).forEach(function (chip) {
          chip.setAttribute('aria-pressed', String(chip.dataset.valor === estadoFiltros[chave]));
        });
        aplicarFiltros();
      });

      container.appendChild(botao);
    });
  }

  function correspondeBusca(obra, termo) {
    if (!termo) return true;
    var campos = [
      obra.titulo, obra.tituloOriginal, obra.artista, obra.ano, obra.tecnica,
      obra.localizacao, rotuloMovimento(obra.movimento), obra.estilo, obra.descricaoVisual,
      obra.contextoHistorico, obra.relacaoMedicina, obra.reflexao
    ].concat(obra.palavrasChave || [], obra.categorias || []);

    var texto = normalizar(campos.join(' '));
    return normalizar(termo).split(/\s+/).every(function (parte) {
      return !parte || texto.indexOf(parte) !== -1;
    });
  }

  function aplicarFiltros() {
    resultadoAtual = OBRAS.filter(function (obra) {
      var categorias = obra.categorias || [];
      if (estadoFiltros.movimento !== 'todos' && obra.movimento !== estadoFiltros.movimento) return false;
      if (estadoFiltros.tema !== 'todos' && categorias.indexOf(estadoFiltros.tema) === -1) return false;
      if (estadoFiltros.linguagem !== 'todos' && categorias.indexOf(estadoFiltros.linguagem) === -1) return false;
      return correspondeBusca(obra, estadoFiltros.busca);
    });

    montarGaleria(resultadoAtual);
    atualizarContador(resultadoAtual.length);
  }

  function atualizarContador(quantidade) {
    var contador = $('#contador');
    if (!contador) return;

    var filtrando =
      estadoFiltros.movimento !== 'todos' ||
      estadoFiltros.tema !== 'todos' ||
      estadoFiltros.linguagem !== 'todos' ||
      estadoFiltros.busca !== '';

    contador.innerHTML = '';
    var forte = criar('strong', null, String(quantidade));
    contador.appendChild(forte);
    contador.appendChild(document.createTextNode(
      (quantidade === 1 ? ' obra encontrada' : ' obras encontradas') +
      (filtrando ? ' de ' + OBRAS.length + ' no acervo.' : ' no acervo.')
    ));
  }

  function montarGaleria(obras) {
    var galeria = $('#galeria');
    var vazio = $('#galeria-vazio');
    if (!galeria) return;

    galeria.innerHTML = '';
    if (vazio) vazio.hidden = obras.length > 0;
    galeria.hidden = obras.length === 0;

    obras.forEach(function (obra) {
      var item = criar('li', 'artwork-card');

      var botao = criar('button', 'artwork-card__botao');
      botao.type = 'button';
      botao.dataset.obra = obra.id;
      botao.setAttribute('aria-label', 'Abrir ficha completa da obra ' + obra.titulo + ', ' + obra.artista);

      var moldura = criar('span', 'artwork-card__moldura');
      moldura.appendChild(montarImagem(obra, true));
      botao.appendChild(moldura);

      var legenda = criar('span', 'artwork-card__legenda');
      legenda.appendChild(criar('span', 'artwork-card__titulo', obra.titulo));
      legenda.appendChild(criar('span', 'artwork-card__meta', obra.artista + ', ' + obra.ano));
      botao.appendChild(legenda);

      var rodape = criar('span', 'artwork-card__rodape');
      rodape.appendChild(criar('span', 'artwork-card__movimento', rotuloMovimento(obra.movimento)));
      if (obra.verificacao === 'a-confirmar') {
        rodape.appendChild(criar('span', 'selo-pendente', 'dados a confirmar'));
      }
      rodape.appendChild(criar('span', 'artwork-card__ver', 'ver ficha'));
      botao.appendChild(rodape);

      item.appendChild(botao);
      galeria.appendChild(item);
    });
  }

  function limparFiltros() {
    estadoFiltros = { movimento: 'todos', tema: 'todos', linguagem: 'todos', busca: '' };
    var busca = $('#busca');
    if (busca) busca.value = '';
    $$('.filtros .chip').forEach(function (chip) {
      chip.setAttribute('aria-pressed', String(chip.dataset.valor === 'todos'));
    });
    aplicarFiltros();
  }

  function iniciarAcervo() {
    montarChipsFiltro('#filtro-movimentos', CATEGORIAS.movimentos || [], 'movimento');
    montarChipsFiltro('#filtro-temas', CATEGORIAS.temas || [], 'tema');
    montarChipsFiltro('#filtro-linguagens', CATEGORIAS.linguagens || [], 'linguagem');

    var busca = $('#busca');
    if (busca) {
      var temporizador;
      busca.addEventListener('input', function () {
        window.clearTimeout(temporizador);
        temporizador = window.setTimeout(function () {
          estadoFiltros.busca = busca.value.trim();
          aplicarFiltros();
        }, 160);
      });
    }

    $$('#limpar-filtros, [data-limpar]').forEach(function (botao) {
      botao.addEventListener('click', limparFiltros);
    });

    var total = $('#acervo-total');
    if (total) total.textContent = String(OBRAS.length);

    aplicarFiltros();
  }

  /* ========================= 7. REFLEXÕES ============================== */

  function montarReflexoes() {
    var lista = $('#reflexoes-lista');
    if (!lista) return;

    OBRAS.filter(function (obra) { return obra.reflexao; })
      .slice(0, 6)
      .forEach(function (obra) {
        var item = criar('li', 'reflexao-item reveal');
        item.appendChild(criar('p', 'reflexao-item__pergunta', '“' + obra.reflexao + '”'));
        item.appendChild(criar('p', 'reflexao-item__origem',
          'A partir de: ' + obra.titulo + ' · ' + rotuloMovimento(obra.movimento)));
        item.appendChild(botaoObra(obra, 'Ver a obra'));
        lista.appendChild(item);
      });
  }

  /* ======================== 8. REFERÊNCIAS ============================= */

  function montarReferencias() {
    var lista = $('#referencias-lista');
    if (!lista) return;

    REFERENCIAS.forEach(function (ref) {
      var item = criar('li', 'referencia');

      var texto = criar('p', 'referencia__texto');
      texto.appendChild(document.createTextNode(ref.autor ? ref.autor + '. ' : ''));

      var titulo = criar('em', null, ref.titulo);
      texto.appendChild(titulo);

      var complemento = [ref.publicacao, ref.ano].filter(Boolean).join(', ');
      if (complemento) texto.appendChild(document.createTextNode('. ' + complemento + '.'));

      if (ref.url) {
        texto.appendChild(document.createTextNode(' '));
        var link = criar('a', 'link-arrow', 'Acessar');
        link.href = ref.url;
        link.rel = 'noopener';
        texto.appendChild(link);
      }

      if (ref.estado === 'em-levantamento') {
        texto.appendChild(document.createTextNode(' '));
        texto.appendChild(criar('span', 'selo-pendente', 'em levantamento'));
      }

      item.appendChild(texto);
      if (ref.nota) item.appendChild(criar('p', 'referencia__nota', ref.nota));

      lista.appendChild(item);
    });
  }

  /* ==================== 9. FICHA DA OBRA (MODAL) ======================= */

  var modal = $('#modal');
  var modalDialog = $('#modal-dialog');
  var modalCorpo = $('#modal-corpo');
  var modalContador = $('#modal-contador');
  var botaoAnterior = $('#modal-anterior');
  var botaoProxima = $('#modal-proxima');

  var contextoModal = [];
  var indiceModal = 0;
  var elementoAnterior = null;

  function camada(rotulo, conteudo, modificador) {
    var bloco = criar('section', 'camada' + (modificador ? ' ' + modificador : ''));
    bloco.appendChild(criar('h4', 'camada__rotulo', rotulo));

    if (Array.isArray(conteudo)) {
      var ul = criar('ul', 'camada__lista');
      conteudo.forEach(function (linha) { ul.appendChild(criar('li', null, linha)); });
      bloco.appendChild(ul);
    } else {
      bloco.appendChild(criar('p', null, conteudo));
    }
    return bloco;
  }

  function montarFicha(obra) {
    modalCorpo.innerHTML = '';

    var ficha = criar('article', 'ficha-obra');

    /* Coluna da imagem */
    var media = criar('figure', 'ficha-obra__media');
    media.style.margin = '0';
    media.appendChild(montarImagem(obra, false));

    var credito = criar('figcaption', 'ficha-obra__credito');
    credito.textContent = obra.imagemStatus === 'placeholder'
      ? 'Espaço reservado — a reprodução ainda não foi incorporada ao acervo. ' + (obra.creditoImagem || '')
      : (obra.creditoImagem || 'Crédito a confirmar.');
    media.appendChild(credito);
    ficha.appendChild(media);

    /* Coluna do texto */
    var texto = criar('div', 'ficha-obra__texto');

    var titulo = criar('h3', 'ficha-obra__titulo', obra.titulo);
    titulo.id = 'modal-titulo';
    texto.appendChild(titulo);

    if (obra.tituloOriginal && obra.tituloOriginal !== obra.titulo) {
      texto.appendChild(criar('p', 'ficha-obra__titulo-original', obra.tituloOriginal));
    }

    texto.appendChild(criar('p', 'ficha-obra__autoria', obra.artista + ' · ' + obra.ano));

    /* Camada 1 — identificação */
    var identificacao = criar('dl', 'ficha-obra__identificacao');
    [
      ['Movimento', rotuloMovimento(obra.movimento)],
      ['Estilo', obra.estilo],
      ['Técnica', obra.tecnica],
      ['Localização', obra.localizacao],
      ['Verificação', obra.verificacao === 'confirmado' ? 'Identificação conferida' : 'Campos pendentes de conferência']
    ].forEach(function (par) {
      if (!par[1]) return;
      var linha = criar('div');
      linha.appendChild(criar('dt', null, par[0]));
      var dd = criar('dd', null, par[1]);
      // Campos pendentes recebem sinalização textual, não apenas gráfica.
      if (pendente(par[1])) dd.classList.add('valor-pendente');
      linha.appendChild(dd);
      identificacao.appendChild(linha);
    });
    texto.appendChild(identificacao);

    if (obra.notaVerificacao) {
      var aviso = criar('div', 'camada camada__aviso');
      aviso.appendChild(criar('h4', 'camada__rotulo', 'Nota de verificação'));
      aviso.appendChild(criar('p', null, obra.notaVerificacao));
      texto.appendChild(aviso);
    }

    texto.appendChild(camada('Camada 2 · Observe', obra.descricaoVisual));
    texto.appendChild(camada('Camada 3 · Contexto histórico', obra.contextoHistorico));
    texto.appendChild(camada('Camada 4 · Relação com a medicina', obra.relacaoMedicina));
    texto.appendChild(camada('Camada 5 · Para refletir', obra.reflexao, 'camada--reflexao'));

    /* Fontes e referências */
    var fontes = (obra.fontes || []).filter(function (fonte) { return fonte.titulo; }).map(function (fonte) {
      return [fonte.titulo, fonte.instituicao, fonte.ano].filter(Boolean).join(' — ') +
        (fonte.url ? ' (' + fonte.url + ')' : ' (URL a inserir)');
    });

    (obra.referencias || []).forEach(function (id) {
      for (var i = 0; i < REFERENCIAS.length; i++) {
        if (REFERENCIAS[i].id !== id) continue;
        var ref = REFERENCIAS[i];
        fontes.push([ref.autor, ref.titulo, ref.publicacao, ref.ano].filter(Boolean).join('. '));
      }
    });

    texto.appendChild(camada('Referências', fontes.length ? fontes : 'Referências em atualização.'));

    ficha.appendChild(texto);
    modalCorpo.appendChild(ficha);
    modalCorpo.scrollTop = 0;

    if (modalContador) {
      modalContador.textContent = 'Obra ' + (indiceModal + 1) + ' de ' + contextoModal.length;
    }

    botaoAnterior.disabled = contextoModal.length < 2;
    botaoProxima.disabled = contextoModal.length < 2;
  }

  function abrirModal(id, contexto) {
    var lista = (contexto && contexto.length ? contexto : OBRAS).slice();
    var posicao = -1;

    for (var i = 0; i < lista.length; i++) {
      if (lista[i].id === id) { posicao = i; break; }
    }

    // Obra fora do recorte filtrado: abre no contexto do acervo completo.
    if (posicao === -1) {
      lista = OBRAS.slice();
      for (var j = 0; j < lista.length; j++) {
        if (lista[j].id === id) { posicao = j; break; }
      }
    }
    if (posicao === -1) return;

    contextoModal = lista;
    indiceModal = posicao;
    elementoAnterior = document.activeElement;

    montarFicha(contextoModal[indiceModal]);

    modal.hidden = false;
    document.body.classList.add('modal-aberto');
    $('#modal-fechar').focus();
  }

  function fecharModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-aberto');
    if (elementoAnterior && typeof elementoAnterior.focus === 'function') {
      elementoAnterior.focus();
    }
    elementoAnterior = null;
  }

  function navegarModal(passo) {
    if (contextoModal.length < 2) return;
    indiceModal = (indiceModal + passo + contextoModal.length) % contextoModal.length;
    montarFicha(contextoModal[indiceModal]);
    modalCorpo.focus({ preventScroll: true });
  }

  function iniciarModal() {
    if (!modal || !modalDialog || !modalCorpo) return;

    modalCorpo.setAttribute('tabindex', '-1');

    // Um único ouvinte cobre todos os botões que abrem obras, inclusive os
    // criados dinamicamente depois desta chamada.
    document.addEventListener('click', function (evento) {
      if (!evento.target || typeof evento.target.closest !== 'function') return;

      var gatilho = evento.target.closest('[data-obra]');
      if (gatilho) {
        var contexto = gatilho.closest('#galeria') ? resultadoAtual : null;
        abrirModal(gatilho.dataset.obra, contexto);
        return;
      }
      if (evento.target.closest('[data-fechar-modal]')) fecharModal();
    });

    botaoAnterior.addEventListener('click', function () { navegarModal(-1); });
    botaoProxima.addEventListener('click', function () { navegarModal(1); });

    document.addEventListener('keydown', function (evento) {
      if (modal.hidden) return;

      if (evento.key === 'Escape') {
        evento.preventDefault();
        fecharModal();
        return;
      }

      if (evento.key === 'ArrowLeft') { navegarModal(-1); return; }
      if (evento.key === 'ArrowRight') { navegarModal(1); return; }

      if (evento.key !== 'Tab') return;

      // Mantém o foco dentro da ficha enquanto ela estiver aberta.
      var focaveis = $$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])', modalDialog)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!focaveis.length) return;

      var primeiro = focaveis[0];
      var ultimo = focaveis[focaveis.length - 1];

      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
      }
    });
  }

  /* ================ 10. REVELAÇÃO E INICIALIZAÇÃO ====================== */

  function iniciarRevelacao() {
    var alvos = $$('.section, .reveal, .movimento, .destaque, .reflexao-item');
    if (!alvos.length) return;

    var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (semMovimento || !('IntersectionObserver' in window)) {
      alvos.forEach(function (alvo) { alvo.classList.add('is-visivel'); });
      return;
    }

    alvos.forEach(function (alvo) { alvo.classList.add('reveal'); });

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visivel');
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    alvos.forEach(function (alvo) { observador.observe(alvo); });
  }

  function iniciarAno() {
    var ano = $('#ano-atual');
    if (ano) ano.textContent = String(new Date().getFullYear());
  }

  function iniciar() {
    iniciarCabecalho();
    montarMovimentos();
    montarFiltrosTimeline();
    montarTimeline();
    montarDestaques();
    iniciarAcervo();
    montarReflexoes();
    montarReferencias();
    iniciarModal();
    iniciarRevelacao();
    iniciarSecaoAtual();
    iniciarAno();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
