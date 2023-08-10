// Call the function when the page loads

//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 180;
let countdown;

//Questions and Options array

const AquizArray = [
  {
    question:
      "(U.F.STA.CATARINA) O número de anagramas da palavra ALUNO, em que as consoantes ficam na ordem LN e as vogais na ordem AUO é:",
    options: ["20", "120", "10", "60", "40"],
    correct: "120",
  },
  {
    question:
      "(FEI) Obter o número de anagramas formados com as letras da palavra REPÚBLICA, nos quais as vogais se mantem nas respectivas posições:",
    options: ["8!", "7!", "6!", "5!", "4!"],
    correct: "5!",
  },
  {
    question:
      "(FUVEST) O número de anagramas da palavra FUVEST que começam e terminam por vogal:",
    options: ["24", "48", "96", "120", "144"],
    correct: "48",
  },
  {
    question:
      "(UNIV. FED. BAHIA) Quatro jogadores saíram de Manaus para um campeonato em Porto Alegre, num carro de 4 lugares. Dividiram o trajeto em 4 partes e aceitaram que cada um dirigia uma vez. Combinaram também que, toda vez que houvesse mudança de motorista, todos deveriam trocar de lugar. Qual o número de arrumações possíveis dos 4 jogadores, durante toda a viajem é:antos continentes existem no mundo?",
    options: ["4", "8", "12", "24", "162"],
    correct: "24",
  },
  {
    question:
      "(S.J. CAMPOS) De quantos modos diferentes podemos dispor as letras da palavra VESTIBULAR de modo que as vogais e as consoantes apareçam juntas em qualquer ordem?",
    options: ["120", "720", "17.280", "34.560", "86.400"],
    correct: "34.560",
  },
  {
    question:
      "(VIÇOSA) Seis pessoas em fila gastam 10 segundos para mudar de ordem. O tempo necessário para todas as mudanças possíveis é:",
    options: ["4h", "2h", "3h", "5h", "6h"],
    correct: "2h",
  },
  {
    question:
      "Um garçom anotou as encomendas de 4 fregueses. Cada um pediu uma sopa, um prato principal, uma bebida e uma sobremesa. O garçom não anotou quais clientes pediram quais encomendas, lembrando-se apenas que cada um solicitou uma sopa diferente, um prato principal diferente, uma bebida diferente e uma sobremesa diferente. De quantas maneiras ele poderá distribuir os pedidos entre os 4 clientes?",
    options: ["(4!)⁴", "4x4!", "4!x4!", "4¹⁶", "16!/4!4!"],
    correct: "(4!)⁴",
  },
  {
    question:
      "(MACK) Um trem de passageiros é constituído de uma locomotiva e 6 vagões distintos, sendo um deles restaurante. Sabendo-se que a locomotiva deve ir à frente e que o vagão restaurante não pode ser colocado imediatamente após a locomotiva, o número de modos diferentes de montar a composição é:",
    options: ["120", "320", "500", "600", "720"],
    correct: "600",
  },
  {
    question:
      "(UNIV. CAT. PELOTAS) Uma família com 5 pessoas possui um automóvel de 5 lugares. Se apenas uma pessoa dirige, o número de modos que podem se acomodar no carro para uma viagem é:",
    options: ["6", "120", "36", "24", "n.d.a"],
    correct: "24",
  },
  {
    question:
      "(SÃO CARLOS) Quatro rapazes e uma moça formam uma fila. De quantas maneiras esta fila pode ser formada de modo que a moça fique sempre em 1º lugar?",
    options: ["24", "12", "18", "4", "6"],
    correct: "24",
  },
  {
    question:
      "(ENO. DE ALIMENTOS BARRETOS) Tem-se 12 livros, todos diferentes, sendo 5 de Matemática 4 de Física e 3 de Química. De quantos modos podemos dispô-los sobre urna prateleira devendo os livros de cada assunto permanecer juntos?",
    options: ["103.680", "17.280", "150", "12", "6"],
    correct: "103.680",
  },
  {
    question:
      "(IME-adaptada) 5 rapazes e 5 moças devem posar para fotografia, ocupando uma escada com 5 degraus de forma que em cada degrau fique um rapaz e uma moça. De quantas maneiras diferentes podemos arrumar esse grupo?",
    options: ["70.400", "128.000", "460.800", "332.000", "625"],
    correct: "460.800",
  },
  {
    question:
      "(FESP) Qual é a soma dos números que se pode formar com as permutações dos algarismos 0, l, 2 e 3?",
    options: ["36.996", "38.996", "34.996", "34.992", "39.996"],
    correct: "39.996",
  },
  {
    question:
      "Joãozinho tem uma coleção de oito soldados de plástico. Resolveu colocar todos em fila. Mas quando realizava tal processo observou que possuía um tipo de soldado repetido. Sabendo que Joãozinho pode formar, com sua coleção, 6720 filas distintas. Qual o número de soldados repetidos? ",
    options: ["6", "2", "7", "9", "13"],
    correct: "6",
  },
  {
    question:
      "(MACK) Dentre os anagramas distintos que podemos formar com n letras, das quais duas são iguais, 120 apresentam estas duas letras iguais juntas. O valor de n é:",
    options: ["4", "5", "6", "7", "122"],
    correct: "6",
  },
  {
    question:
      "(MACK) O número de maneiras diferentes de colocar em uma linha de um tabuleiro de xadrez (8 posições) as peças brancas (2 torres, 2 cavalos, 2 bispos, a rainha e o rei) é:",
    options: ["8!", "504", "5040", "8", "4"],
    correct: "5040",
  },
  {
    question:
      "Quantos números de 6 dígitos podem ser formados usando apenas os algarismos 1,1,1,1,2 e 3?",
    options: ["6!", "4!/2!", "6!/2!2!", "6!/4!", "3!"],
    correct: "6!/4!",
  },
  {
    question:
      "O número de anagramas da palavra SERGIPE nos quais a primeira letra é E e a última também é E, são:",
    options: ["5", "2520", "1680", "120", "1260"],
    correct: "120",
  },
  {
    question:
      "Usando apenas os algarismos 1,3,3,5 e 9, quantos números podemos formar maiores que 70 000?",
    options: ["5!/2!", "5!", "1x(4!/2!)", "4!", "4!5!"],
    correct: "1x(4!/2!)",
  },
  {
    question:
      "Pedro dispõe de uma coleção de 40 bonés. Dentre eles existem, respectivamente sete, cinco e nove idênticos entre si. Deseja dispô-los em linha numa prateleira. De quantos modos distintos Pedro pode realizar esse processo? ",
    options: ["40!/7!5!9!", "40!/3!", "40!/21!", "21!", "40!21!"],
    correct: "40!/7!5!9!",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function gerarQuestoesSortidas(array, quantidade) {
  const questoesSortidas = shuffleArray([...array]);
  return questoesSortidas.slice(0, quantidade);
}
const quizArray = gerarQuestoesSortidas(AquizArray, 10);
//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
const displayNext = () => {
  //increment questionCount
  questionCount += 1;
  //if last question
  if (questionCount == quizArray.length) {
    //hide question container and display score
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    //user score
    userScore.innerHTML = "Você acertou " + scoreCount + " de " + questionCount;
    if (scoreCount >= 6) {
      restart.innerHTML = "Continuar";
      localStorage.setItem("fase", 2);
      restart.addEventListener("click", () => {
        window.location.href = "./certificado.html";
      });
    }
  } else {
    //display questionCount
    countOfQuestion.innerHTML =
      questionCount + 1 + " de " + quizArray.length + " questões";
    //display quiz
    quizDisplay(questionCount);
    count = 1024;
    clearInterval(countdown);
    timerDisplay();
  }
};
nextBtn.addEventListener("click", () => {
  // Call the displayNext function here
  displayNext();
});

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " de " + quizArray.length + " questões";
    //question
    let question_DIV = document.createElement("div");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[4]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 1024;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
