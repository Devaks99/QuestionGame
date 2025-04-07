// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "Qual linguagem roda no navegador sem precisar instalar?",
      respostas: [
        { opcao: "Python", correto: false },
        { opcao: "C++", correto: false },
        { opcao: "JavaScript", correto: true },
        { opcao: "Ruby", correto: false }
      ]
    },
    {
      pergunta: "Qual desses é um sistema de controle de versão?",
      respostas: [
        { opcao: "Git", correto: true },
        { opcao: "Linux", correto: false },
        { opcao: "Apache", correto: false },
        { opcao: "Node.js", correto: false }
      ]
    },
    {
      pergunta: "O que significa a sigla \HTML\?",
      respostas: [
        { opcao: "HighText Machine Language", correto: false },
        { opcao: "HyperText Markup Language", correto: true },
        { opcao: "HyperTool Multi Language", correto: false },
        { opcao: "Hyper Transfer Machine Language", correto: false }
      ]
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: [
        { opcao: "Saturno", correto: false },
        { opcao: "Júpiter", correto: true },
        { opcao: "Terra", correto: false },
        { opcao: "Marte", correto: false }
      ]
    },
    {
      pergunta: "Quem pintou a obra \ Mona Lisa\?",
      respostas: [
        { opcao: "Michelangelo", correto: false },
        { opcao: "Van Gogh", correto: false },
        { opcao: "Leonardo da Vinci", correto: true },
        { opcao: "Picasso", correto: false }
      ]
    },
    {
      pergunta: "Em que continente fica o Egito?",
      respostas: [
        { opcao: "Ásia", correto: false },
        { opcao: "Europa", correto: false },
        { opcao: "América", correto: false },
        { opcao: "África", correto: true }
      ]
    },
    {
      pergunta: "Quantos corações tem um polvo?",
      respostas: [
        { opcao: "1", correto: false },
        { opcao: "2", correto: false },
        { opcao: "3", correto: true },
        { opcao: "4", correto: false }
      ]
    },
    {
      pergunta: "Qual animal é conhecido como o \ Rei da selva\?",
      respostas: [
        { opcao: "Tigre", correto: false },
        { opcao: "Leão", correto: true },
        { opcao: "Elefante", correto: false },
        { opcao: "Urso", correto: false }
      ]
    },
    {
      pergunta: "Qual o único metal que é líquido em temperatura ambiente?",
      respostas: [
        { opcao: "Ferro", correto: false },
        { opcao: "Alumínio", correto: false },
        { opcao: "Mercúrio", correto: true },
        { opcao: "Cobre", correto: false }
      ]
    },
    {
      pergunta: "Qual não é um framework front-end popular de JavaScript?",
      respostas: [
        { opcao: "React", correto: false },
        { opcao: "Angular", correto: false },
        { opcao: "Vue.js", correto: false },
        { opcao: "Spring", correto: true }
      ]
    },
    {
      pergunta: "Qual a função principal de um banco de dados?",
      respostas: [
        { opcao: "Executar código no lado do servidor, correto: false }", correto: false},
        { opcao: "Armazenar e organizar dados de forma estruturada", correto: true },
        { opcao: "Definir o estilo visual de uma página web", correto: false },
        { opcao: "Controlar o versionamento de código", correto: false }
      ]
    },
    {
      pergunta: "O que é um algoritmo em ciência da computação?",
      respostas: [
        { opcao: "Um tipo de hardware de computador", correto: false },
        { opcao: "Uma linguagem de programação específica", correto: false },
        { opcao: "Uma sequência finita de instruções para resolver um problema", correto: true },
        { opcao: "Um software para edição de imagens", correto: false }
      ]
    },
    {
      pergunta: "Em programação, o que é uma função?",
      respostas: [
        { opcao: "Um valor booleano (verdadeiro ou falso)", correto: false },
        { opcao: "Um bloco de código reutilizável que realiza uma tarefa específica", correto: true },
        { opcao: "Um erro que ocorre durante a execução de um programa", correto: false },
        { opcao: "Um tipo de variável que armazena números inteiros", correto: false }
      ]
    },
    {
      pergunta: "Qual o propósito principal de um loop (laço de repetição) em programação?",
      respostas: [
        { opcao: "Declarar variáveis", correto: false },
        { opcao: "Definir a estrutura de dados", correto: false },
        { opcao: "Executar um bloco de código repetidamente até que uma condição seja atendida", correto: true },
        { opcao: "Comentar o código para melhor entendimento", correto: false }
      ]
    },
    {
      pergunta: "Qual é a capital da Austrália?",
      respostas: [
        { opcao: "Sydney", correto: false },
        { opcao: "Melbourne", correto: false },
        { opcao: "Canberra", correto: true },
        { opcao: "Perth", correto: false }
      ]
    },
    {
      pergunta: "Qual oceano é o maior do mundo?",
      respostas: [
        { opcao: "Oceano Atlântico", correto: false },
        { opcao: "Oceano Índico", correto: false },
        { opcao: "Oceano Pacífico", correto: true },
        { opcao: "Oceano Ártico", correto: false }
      ]
    },
    {
      pergunta: "Quem escreveu a peça teatral \Romeu e Julieta\?",
      respostas: [
        { opcao: "Charles Dickens", correto: false },
        { opcao: "William Shakespeare", correto: true },
        { opcao: "Jane Austen", correto: false },
        { opcao: "George Bernard Shaw", correto: false }
      ]
    },
    {
      pergunta: "Qual é o nome da primeira mulher a ganhar um Prêmio Nobel?",
      respostas: [
        { opcao: "Marie Curie", correto: true },
        { opcao: "Rosalind Franklin", correto: false },
        { opcao: "Dorothy Hodgkin", correto: false },
        { opcao: "Ada Lovelace", correto: false }
      ]
    },
    {
      pergunta: "Em que ano ocorreu a queda do Muro de Berlim?",
      respostas: [
        { opcao: "1979", correto: false },
        { opcao: "1985", correto: false },
        { opcao: "1989", correto: true },
        { opcao: "1991", correto: false }
      ]
    },
    {
      pergunta: "Qual é o rio mais longo do mundo?",
      respostas: [
        { opcao: "Rio Amazonas", correto: true },
        { opcao: "Rio Nilo", correto: false },
        { opcao: "Rio Yangtzé", correto: false },
        { opcao: "Rio Mississipi", correto: false }
      ]
    },
    {
      pergunta: "Qual é a montanha mais alta do mundo?",
      respostas: [
        { opcao: "K2", correto: false },
        { opcao: "Kangchenjunga", correto: false },
        { opcao: "Monte Everest", correto: true },
        { opcao: "Lhotse", correto: false }
      ]
    },
    {
      pergunta: "Quem foi o primeiro presidente do Brasil?",
      respostas: [
        { opcao: "Getúlio Vargas", correto: false },
        { opcao: "Juscelino Kubitschek", correto: false },
        { opcao: "Marechal Deodoro da Fonseca", correto: true },
        { opcao: "João Goulart", correto: false }
      ]
    },
    {
      pergunta: "Qual é o símbolo químico do ouro?",
      respostas: [
        { opcao: "Go", correto: false },
        { opcao: "Au", correto: true },
        { opcao: "Ag", correto: false },
        { opcao: "Fe", correto: false }
      ]
    },
    {
      pergunta: "Qual é o nome do maior deserto do mundo (em área)?",
      respostas: [
        { opcao: "Deserto do Saara", correto : false },
        { opcao: "Deserto da Arábia", correto: false },
        { opcao: "Deserto de Gobi", correto: false },
        { opcao: "Deserto da Antártida", correto: true }
      ]
    }
  ];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 0;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

  // PARTE 5: Função para mostrar a tela final
 function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
  document.querySelector(".botao-reiniciar").style.display = "inline-block";

  // Adiciona o alert.prompt para parabenizar o usuário
  const nomeUsuario = prompt(`Parabéns! Você completou o questionário com ${acertos} acertos em ${perguntas.length} perguntas.\nDigite seu nome para registrar seu resultado:`);

  if (nomeUsuario) {
      alert(`Parabéns, ${nomeUsuario}! Seu resultado foi registrado: ${acertos} de ${perguntas.length} acertos.`);
      // Aqui você pode adicionar lógica para salvar o resultado do usuário, se desejar.
      console.log(`Resultado de ${nomeUsuario}: ${acertos}/${perguntas.length}`);
  } else {
      alert(`Parabéns! Seu resultado foi: ${acertos} de ${perguntas.length} acertos.`);
  }
}

// Função de reinício separada
function reiniciarJogo() {
  indiceAtual = 0;
  acertos = 0;
  conteudo.style.display = "block";
  conteudoFinal.style.display = "none";
  document.querySelector(".botao-reiniciar").style.display = "none";
  carregarPergunta();
}

// Adicione o event listener após o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".botao-reiniciar").onclick = reiniciarJogo;
});

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
