/* =========================================================================
   Galeria: grade, filtros, busca e ficha da obra.

   Tudo é gerado a partir de data/obras.js. Não há card nem ficha escritos à
   mão: acrescentar uma obra ao arquivo de dados basta para ela aparecer aqui.

   Cada obra tem endereço próprio — galeria.html?obra=<slug> —, o que permite
   compartilhar o link de uma obra específica.
   ========================================================================= */

(function () {
  'use strict';

  var S = window.Site;
  if (!S) return;

  var grade, vazio, contador, campoBusca, filtros;
  var ficha, fichaCorpo, fichaPosicao, botaoAnterior, botaoProxima;
  var lupa, lupaImagem;

  var estado = { periodo: 'todos', busca: '' };
  var resultado = [];
  var indiceAtual = 0;
  var focoAnterior = null;
  var tituloOriginalDaPagina = document.title;

  /* --------------------------- filtros e grade -------------------------- */

  function montarFiltros() {
    if (!filtros) return;

    var opcoes = [{ id: 'todos', titulo: 'Todas' }].concat(S.periodosComObras());

    opcoes.forEach(function (opcao) {
      var botao = S.criar('button', 'filtro', opcao.titulo);
      botao.type = 'button';
      botao.dataset.periodo = opcao.id;
      botao.setAttribute('aria-pressed', String(estado.periodo === opcao.id));

      botao.addEventListener('click', function () {
        estado.periodo = opcao.id;
        S.$$('.filtro', filtros).forEach(function (f) {
          f.setAttribute('aria-pressed', String(f.dataset.periodo === estado.periodo));
        });
        aplicar();
      });

      filtros.appendChild(botao);
    });
  }

  function corresponde(obra, termo) {
    if (!termo) return true;
    var campos = [
      obra.titulo, obra.tituloOriginal, obra.artista, obra.data, obra.movimento,
      obra.tecnica, obra.localizacao, obra.instituicao, S.rotuloPeriodo(obra.periodo),
      obra.descricao, obra.contextoHistorico, obra.relacaoComAmamentacao
    ].concat(obra.palavrasChave || []);

    var texto = S.normalizar(campos.filter(Boolean).join(' '));
    return S.normalizar(termo).split(/\s+/).every(function (parte) {
      return !parte || texto.indexOf(parte) !== -1;
    });
  }

  function aplicar() {
    var todas = S.obras();
    resultado = todas.filter(function (obra) {
      if (estado.periodo !== 'todos' && obra.periodo !== estado.periodo) return false;
      return corresponde(obra, estado.busca);
    });

    montarGrade();
    atualizarContador(resultado.length, todas.length);
  }

  function atualizarContador(quantidade, total) {
    if (!contador) return;
    var filtrando = estado.periodo !== 'todos' || estado.busca !== '';
    contador.innerHTML = '';
    contador.appendChild(S.criar('strong', null, String(quantidade)));
    contador.appendChild(document.createTextNode(
      (quantidade === 1 ? ' obra' : ' obras') + (filtrando ? ' de ' + total + ' no acervo.' : ' no acervo.')
    ));
  }

  function montarGrade() {
    if (!grade) return;
    grade.innerHTML = '';
    grade.hidden = resultado.length === 0;
    if (vazio) vazio.hidden = resultado.length > 0;

    resultado.forEach(function (obra) {
      var item = S.criar('li', 'card');
      var botao = S.criar('button', 'card__botao');
      botao.type = 'button';
      botao.dataset.obra = obra.slug || obra.id;
      botao.setAttribute('aria-label', 'Abrir a ficha de ' + obra.titulo + ', ' + obra.artista);

      var moldura = S.criar('span', 'card__moldura');
      moldura.appendChild(S.imagem(obra));
      botao.appendChild(moldura);

      var legenda = S.criar('span', 'card__legenda');
      legenda.appendChild(S.criar('span', 'card__titulo', obra.titulo));
      legenda.appendChild(S.criar('span', 'card__meta', S.legenda(obra)));
      botao.appendChild(legenda);

      item.appendChild(botao);
      grade.appendChild(item);
    });
  }

  function limpar() {
    estado = { periodo: 'todos', busca: '' };
    if (campoBusca) campoBusca.value = '';
    S.$$('.filtro', filtros).forEach(function (f) {
      f.setAttribute('aria-pressed', String(f.dataset.periodo === 'todos'));
    });
    aplicar();
  }

  /* ----------------------------- ficha da obra -------------------------- */

  function camada(rotulo, conteudo, modificador) {
    if (!conteudo || (Array.isArray(conteudo) && !conteudo.length)) return null;

    var bloco = S.criar('section', 'camada' + (modificador ? ' ' + modificador : ''));
    bloco.appendChild(S.criar('h3', 'camada__rotulo', rotulo));

    if (Array.isArray(conteudo)) {
      var lista = S.criar('ul', 'camada__fontes');
      conteudo.forEach(function (linha) { lista.appendChild(S.criar('li', null, linha)); });
      bloco.appendChild(lista);
    } else {
      bloco.appendChild(S.criar('p', null, conteudo));
    }
    return bloco;
  }

  function fontesDaObra(obra) {
    var linhas = (obra.fontesInformacoes || []).map(function (f) {
      var base = [f.titulo, f.instituicao, f.ano].filter(Boolean).join(' — ');
      return base + (f.url ? ' (' + f.url + ')' : '');
    });

    var refs = (window.Acervo && window.Acervo.referencias) || [];
    (obra.referencias || []).forEach(function (id) {
      refs.forEach(function (ref) {
        if (ref.id === id) {
          linhas.push([ref.autor, ref.titulo, ref.publicacao, ref.ano].filter(Boolean).join('. '));
        }
      });
    });
    return linhas;
  }

  function montarFicha(obra) {
    fichaCorpo.innerHTML = '';

    var artigo = S.criar('article', 'obra');

    /* Imagem: a grade usa miniatura, a ficha carrega a reprodução cheia. */
    var figura = S.criar('figure', 'obra__figura');
    var botaoImagem = S.criar('button', 'obra__imagem');
    botaoImagem.type = 'button';
    botaoImagem.setAttribute('aria-label', 'Ampliar a imagem de ' + obra.titulo);
    botaoImagem.appendChild(S.imagem(obra, { cheia: true, lazy: false }));
    botaoImagem.addEventListener('click', function () { abrirLupa(obra); });
    figura.appendChild(botaoImagem);

    if (obra.fonteImagem) {
      figura.appendChild(S.criar('figcaption', 'obra__credito', obra.fonteImagem));
    }
    artigo.appendChild(figura);

    var texto = S.criar('div', 'obra__texto');

    var titulo = S.criar('h2', 'obra__titulo', obra.titulo);
    titulo.id = 'ficha-titulo';
    texto.appendChild(titulo);

    if (obra.tituloOriginal) {
      texto.appendChild(S.criar('p', 'obra__original', obra.tituloOriginal));
    }
    texto.appendChild(S.criar('p', 'obra__autoria', S.legenda(obra)));

    /* Ficha técnica: linhas sem valor simplesmente não são criadas. */
    var tecnica = S.criar('dl', 'obra__ficha-tecnica');
    [
      ['Período', S.rotuloPeriodo(obra.periodo)],
      ['Movimento', obra.movimento],
      ['Técnica', obra.tecnica],
      ['Dimensões', obra.dimensoes],
      ['Localização', obra.instituicao || obra.localizacao]
    ].forEach(function (par) {
      if (!par[1]) return;
      var linha = S.criar('div');
      linha.appendChild(S.criar('dt', null, par[0]));
      linha.appendChild(S.criar('dd', null, par[1]));
      tecnica.appendChild(linha);
    });
    if (tecnica.children.length) texto.appendChild(tecnica);

    [
      camada('O que se vê', obra.descricao),
      camada('Contexto histórico', obra.contextoHistorico),
      camada('Contexto artístico', obra.contextoArtistico),
      camada('Relação com a amamentação', obra.relacaoComAmamentacao)
    ].forEach(function (bloco) { if (bloco) texto.appendChild(bloco); });

    if (obra.perguntaReflexao) {
      var reflexao = S.criar('section', 'camada');
      reflexao.appendChild(S.criar('h3', 'camada__rotulo', 'Para refletir'));
      reflexao.appendChild(S.criar('p', 'reflexao', obra.perguntaReflexao));
      texto.appendChild(reflexao);
    }

    var fontes = camada('Fontes', fontesDaObra(obra));
    if (fontes) texto.appendChild(fontes);

    if (obra.notaVerificacao) {
      var nota = S.criar('div', 'nota-verificacao');
      nota.appendChild(S.criar('strong', null, 'Informação a confirmar'));
      nota.appendChild(S.criar('p', null, obra.notaVerificacao));
      texto.appendChild(nota);
    }

    artigo.appendChild(texto);
    fichaCorpo.appendChild(artigo);
    fichaCorpo.scrollTop = 0;

    if (fichaPosicao) {
      fichaPosicao.textContent = 'Obra ' + (indiceAtual + 1) + ' de ' + resultado.length;
    }
    botaoAnterior.disabled = resultado.length < 2;
    botaoProxima.disabled = resultado.length < 2;

    document.title = obra.titulo + ' — Amamentação e Arte';
  }

  function abrir(slug) {
    var lista = resultado.length ? resultado : S.obras();
    var posicao = -1;

    for (var i = 0; i < lista.length; i++) {
      if ((lista[i].slug || lista[i].id) === slug) { posicao = i; break; }
    }

    // Obra fora do recorte filtrado: abre no contexto do acervo inteiro.
    if (posicao === -1) {
      lista = S.obras();
      for (var j = 0; j < lista.length; j++) {
        if ((lista[j].slug || lista[j].id) === slug) { posicao = j; break; }
      }
    }
    if (posicao === -1) return;

    resultado = lista;
    indiceAtual = posicao;
    focoAnterior = document.activeElement;

    montarFicha(resultado[indiceAtual]);
    ficha.hidden = false;
    document.body.classList.add('sem-rolagem');
    S.$('#ficha-fechar').focus();
    registrarEndereco(slug);
  }

  function fechar() {
    if (ficha.hidden) return;
    ficha.hidden = true;
    document.body.classList.remove('sem-rolagem');
    document.title = tituloOriginalDaPagina;
    registrarEndereco(null);
    if (focoAnterior && typeof focoAnterior.focus === 'function') focoAnterior.focus();
    focoAnterior = null;
  }

  function navegar(passo) {
    if (resultado.length < 2) return;
    indiceAtual = (indiceAtual + passo + resultado.length) % resultado.length;
    var obra = resultado[indiceAtual];
    montarFicha(obra);
    registrarEndereco(obra.slug || obra.id);
    fichaCorpo.focus({ preventScroll: true });
  }

  /* Mantém o endereço da barra em sincronia com a obra aberta, sem recarregar
     a página, para que o link possa ser copiado e compartilhado. */
  function registrarEndereco(slug) {
    if (!window.history || !window.history.replaceState) return;
    var url = window.location.pathname +
      (slug ? '?obra=' + encodeURIComponent(slug) : '') +
      window.location.hash;
    window.history.replaceState({}, '', url);
  }

  /* ------------------------------- lupa --------------------------------- */

  function abrirLupa(obra) {
    if (!lupa) return;
    lupaImagem.src = obra.imagem;
    lupaImagem.alt = S.textoAlternativo(obra);
    lupa.hidden = false;
    S.$('#lupa-fechar').focus();
  }

  function fecharLupa() {
    if (!lupa || lupa.hidden) return;
    lupa.hidden = true;
    var botao = S.$('.obra__imagem');
    if (botao) botao.focus();
  }

  /* ---------------------------- inicialização --------------------------- */

  S.aoCarregar(function () {
    grade = S.$('#grade');
    if (!grade) return;

    vazio = S.$('#vazio');
    contador = S.$('#contador');
    campoBusca = S.$('#busca');
    filtros = S.$('#filtros');
    ficha = S.$('#ficha');
    fichaCorpo = S.$('#ficha-corpo');
    fichaPosicao = S.$('#ficha-posicao');
    botaoAnterior = S.$('#ficha-anterior');
    botaoProxima = S.$('#ficha-proxima');
    lupa = S.$('#lupa');
    lupaImagem = S.$('#lupa-imagem');

    if (fichaCorpo) fichaCorpo.setAttribute('tabindex', '-1');

    montarFiltros();
    aplicar();

    if (campoBusca) {
      var temporizador;
      campoBusca.addEventListener('input', function () {
        window.clearTimeout(temporizador);
        temporizador = window.setTimeout(function () {
          estado.busca = campoBusca.value.trim();
          aplicar();
        }, 160);
      });
    }

    S.$$('[data-limpar]').forEach(function (b) { b.addEventListener('click', limpar); });

    var botaoFiltros = S.$('#filtros-botao');
    if (botaoFiltros) {
      botaoFiltros.addEventListener('click', function () {
        var aberto = botaoFiltros.getAttribute('aria-expanded') === 'true';
        botaoFiltros.setAttribute('aria-expanded', String(!aberto));
        filtros.classList.toggle('aberto', !aberto);
      });
    }

    document.addEventListener('click', function (evento) {
      if (!evento.target || typeof evento.target.closest !== 'function') return;
      var gatilho = evento.target.closest('[data-obra]');
      if (gatilho) { abrir(gatilho.dataset.obra); return; }
      if (evento.target.closest('[data-fechar-ficha]')) fechar();
      if (evento.target.closest('[data-fechar-lupa]')) fecharLupa();
    });

    botaoAnterior.addEventListener('click', function () { navegar(-1); });
    botaoProxima.addEventListener('click', function () { navegar(1); });

    document.addEventListener('keydown', function (evento) {
      if (lupa && !lupa.hidden) {
        if (evento.key === 'Escape') { evento.preventDefault(); fecharLupa(); }
        return;
      }
      if (ficha.hidden) return;

      if (evento.key === 'Escape') { evento.preventDefault(); fechar(); return; }
      if (evento.key === 'ArrowLeft') { navegar(-1); return; }
      if (evento.key === 'ArrowRight') { navegar(1); return; }
      if (evento.key !== 'Tab') return;

      // Mantém o foco dentro da ficha enquanto ela estiver aberta.
      var focaveis = S.$$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
        S.$('.ficha__caixa')).filter(function (el) { return el.offsetParent !== null; });
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

    // Abertura direta por link: galeria.html?obra=<slug>
    var pedida = new URLSearchParams(window.location.search).get('obra');
    if (pedida) abrir(pedida);

    // Filtro pré-selecionado a partir da página História e Arte.
    var periodoPedido = new URLSearchParams(window.location.search).get('periodo');
    if (periodoPedido) {
      var alvo = S.$('.filtro[data-periodo="' + periodoPedido + '"]', filtros);
      if (alvo) alvo.click();
    }
  });
})();
