/**
 * Períodos históricos — Amamentação e Arte
 *
 * Esta lista comanda três coisas ao mesmo tempo:
 *   1. os filtros da galeria (só aparecem períodos que tenham obra publicada);
 *   2. a ordem cronológica das obras;
 *   3. as seções narrativas da página História e Arte.
 *
 * A ordem do array é a ordem cronológica. Ao criar um período novo, insira-o
 * na posição correta e use o mesmo `id` no campo `periodo` das obras.
 *
 * `narrativa` é o texto curto da página História e Arte. `contextoMedico`
 * aparece logo abaixo, como uma linha de contexto. Ambos são introdutórios e
 * estão sujeitos a revisão institucional.
 */

window.Acervo = window.Acervo || {};

window.Acervo.periodos = [
  {
    id: 'antiguidade',
    titulo: 'Antiguidade',
    intervalo: 'Até o século V',
    narrativa:
      'Antes de qualquer registro escrito sobre saúde infantil, a sobrevivência de um recém-nascido dependia inteiramente do leite humano. As imagens mais antigas que associam mulheres, crianças e alimentação aparecem em estatuetas votivas e objetos de culto, em culturas sem contato entre si — sinal de que amamentar era percebido como acontecimento fundamental, e não como detalhe doméstico.',
    contextoMedico:
      'Na Antiguidade greco-romana, textos médicos já discutiam a alimentação do lactente: o início da amamentação, o intervalo entre as mamadas, os critérios para escolher uma ama de leite e o momento do desmame.',
    comoAparece:
      'Sobretudo como atributo divino e como explicação de origem: a deusa que nutre, o animal que salva a criança abandonada.'
  },

  {
    id: 'idade-media',
    titulo: 'Idade Média',
    intervalo: 'Séculos V–XV',
    narrativa:
      'Na Europa medieval a imagem da mulher que amamenta ganha função devocional. O tipo iconográfico da Virgo lactans difunde-se a partir do século XIII em painéis de fundo dourado, sem profundidade e sem ambiente naturalista: o que importa não é a cena verossímil, mas o vínculo representado.',
    contextoMedico:
      'A medicina do período retoma a herança greco-romana e árabe e discute a qualidade do leite, o regime da nutriz e o momento do desmame. A mortalidade infantil era elevada e a alimentação do lactente estava entre as preocupações práticas mais constantes das famílias.',
    comoAparece:
      'Como símbolo religioso. A amamentação é o que prova a humanidade da criança divina — argumento teológico antes de ser cena cotidiana.'
  },

  {
    id: 'renascimento',
    titulo: 'Renascimento',
    intervalo: 'Séculos XV–XVI',
    narrativa:
      'O tema permanece, mas ganha perspectiva, volume, corpos individualizados e ambientes construídos. A cena torna-se mais humana e, ao mesmo tempo, mais idealizada. Ao lado das madonas reaparecem temas da mitologia clássica em que o leite explica a origem do mundo.',
    contextoMedico:
      'A imprensa faz circular tratados sobre as doenças e o regime alimentar das crianças. Entre as famílias abastadas das cidades italianas, enviar o recém-nascido a uma ama de leite era prática corrente — com consequências reconhecidas sobre a sobrevivência dos lactentes.',
    comoAparece:
      'Entre a devoção e o mito, e com uma distância crescente entre o ideal pintado e a organização real do cuidado.'
  },

  {
    id: 'barroco',
    titulo: 'Barroco',
    intervalo: 'Século XVII',
    narrativa:
      'Contrastes intensos de luz e sombra, diagonais e apelo direto ao observador. Neste acervo o período aparece pela via do mito, em composição de grande escala destinada à decoração palaciana. Outros usos barrocos do tema, como a Caridade Romana, não integram esta seleção.',
    contextoMedico:
      'A prática de entregar recém-nascidos a amas permanece difundida, com forte diferenciação social. Multiplicam-se as casas de expostos, cuja sobrevivência dependia de conseguir nutrizes — e cujos registros estão entre as principais fontes para estimar a mortalidade infantil do período.',
    comoAparece:
      'Como matéria capaz de originar o mundo: leite que vira estrela, em escala monumental.'
  },

  {
    id: 'setecentos-oitocentos',
    titulo: 'Séculos XVIII e XIX',
    intervalo: '1700–1900',
    narrativa:
      'A cena doméstica ocupa a pintura europeia e, com ela, aparecem as figuras que organizavam concretamente o cuidado — entre elas a ama de leite. Instala-se um debate público sobre quem deve amamentar, alimentado por médicos, filósofos e moralistas. No fim do período, artistas que faziam do interior doméstico seu campo de trabalho tratam o banho, o colo e o sono com o mesmo rigor que outros aplicavam a paisagens.',
    contextoMedico:
      'A crítica médica ao sistema de amas se intensifica, associando-o ao excesso de mortalidade entre lactentes enviados para longe. Surgem os primeiros substitutos industriais do leite materno e, com eles, novos riscos: sem água segura, a alimentação artificial esteve ligada a quadros graves de diarreia e desnutrição. A pediatria se constitui como especialidade.',
    comoAparece:
      'Como dever moral e como trabalho. A mesma prática é virtude quando a mãe amamenta e emprego quando outra mulher o faz por ela.'
  },

  {
    id: 'moderna',
    titulo: 'Arte moderna e contemporânea',
    intervalo: 'Século XX em diante',
    narrativa:
      'Os modernismos rompem com a representação naturalista e tratam a maternidade em chave simbólica e política. A arte deixa de idealizá-la: o corpo que cuida aparece envelhecido, exausto ou em luto. No Brasil, a pintura do período traz à tona a memória das amas de leite escravizadas, poucas décadas após a abolição.',
    contextoMedico:
      'A mortalidade infantil torna-se indicador central de saúde pública e a desnutrição infantil, objeto de programas de Estado. Depois deste período — já fora do recorte destas obras — vêm as normas internacionais, a regulação da publicidade de substitutos e as iniciativas hospitalares de apoio ao aleitamento.',
    comoAparece:
      'Como memória, como denúncia e como perda. A serenidade deixa de ser obrigatória.'
  }
];
