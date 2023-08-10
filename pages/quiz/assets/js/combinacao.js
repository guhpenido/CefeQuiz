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
    id: "0",
    question:
      "De um grupo de animais de um zoológico deseja-se selecionar quatro para exames. Sabendo que esse processo pode ser realizado de 35 maneiras distintas, quantos animais há no zoológico?",
    options: ["840", "680", "320", "420"],
    correct: "840",
  },
  {
    id: "1",
    question:
      "Nas eleições nacionais de quatro em quatro, dentre outros cargos elegemos, em eleições alternadas, dois senadores da república. Supondo que em Minas Gerais em 2002 (último ano que isso ocorreu) candidataram-se 12 pessoas para o cargo. Quantas maneiras distintas têm um eleitor para escolher seus senadores?",
    options: ["120", "132", "24", "66"],
    correct: "66",
  },
  {
    id: "2",
    question:
      "Dispomos de um conjunto com 8 elementos distintos. Sabendo disso calcule quantos subconjuntos podemos formar com 3 elementos: ",
    options: ["36", "56", "72", "336"],
    correct: "56",
  },
  {
    id: "3",
    question:
      "(FCMMG) Um fisioterapeuta recomendou a um paciente que fizesse, todos os dias, três tipos diferentes de exercícios e lhe forneceu uma lista contendo sete tipos diferentes de exercícios adequados a esse tratamento. Ao começar o tratamento, o paciente resolve que, a cada dia, sua escolha dos três exercícios será distinta das escolhas feitas anteriormente. O número máximo de dias que o paciente poderá manter esse procedimento é",
    options: ["p=1 ou p=2", "p=0 ou p=2", "p=0 ou p=1", "p=0 ou p=3"],
    correct: "p=0 ou p=1",
  },
  {
    id: "4",
    question:
      "(MAUÁ) Calcular p, sabendo que A_(m,p)=C_(m,p) qualquer que seja m e 0≤p≤m.",
    options: ["Peripheral", "Clip art", "Highlight", "Execute"],
    correct: "Peripheral",
  },
  {
    id: "5",
    question:
      "(FEI) Caminhando sempre para a direita ou para cima, sobre a rede da figura, de quantas maneiras se pode ir do ponto A até a reta BC? <img src='./assets/img/questao1.png'>",
    options: ["8", "64", "256", "1024"],
    correct: "256",
  },
  {
    id: "6",
    question:
      "(Fafi-MG) Se existem 11 pessoas em uma sala e cada pessoa cumprimenta todas as outras uma única vez, o número de apertos de mão dados será igual a",
    options: ["55", "65", "110", "121"],
    correct: "55",
  },
  {
    id: "7",
    question:
      "(UNESP-SP-adaptada) A diretoria de uma empresa compõe-se de n dirigentes, contando o presidente. Considere todas as comissões de três membros que poderiam ser formadas com esses n dirigentes. Se o número de comissões que incluem o presidente é igual ao número daquelas que não o incluem, o valor de n é:",
    options: ["10", "12", "15", "6"],
    correct: "6",
  },
  {
    id: "8",
    question:
      "(CESCEM) Sobre uma circunferência, marcam-se 7 pontos, 2 a 2 distintos, O número de triângulos que podemos formar com vértices nos pontos marcados é:",
    options: ["3", "7", "35", "210"],
    correct: "35",
  },
  {
    id: "9",
    question:
      "(MACK) O conjunto A tem 45 subconjuntos de 2 elementos. O número de elementos de A é:",
    options: ["10", "15", "45", "90"],
    correct: "10",
  },
  {
    id: "10",
    question:
      "(UFMG) Uma urna contém 12 bolas: 5 pretas, 4 brancas e 3 vermelhas. O número de maneiras possíveis de se retirar simultaneamente, dessa urna, grupos de 6 bolas que contém pelo menos uma bola de cada cor, é:",
    options: ["84", "252", "805", "924"],
    correct: "805",
  },
  {
    id: "11",
    question:
      "(UFMG) Duas das cinquenta cadeiras de uma sala estão ocupadas por dois alunos. O número de maneiras distintas possíveis que esses alunos terão para escolher duas das cinquenta cadeiras, para ocupá-las é:",
    options: ["1225", "2450", "210", "7!"],
    correct: "2450",
  },
  {
    id: "12",
    question:
      "(Diamantina-MG) Numa congregação de 30 professores, 14 lecionam matemática. O número de comissões com 14 professores que podem ser formadas de modo que, em cada uma, tenha apenas um professor de matemática",
    options: ["7540", "7840", "8040", "8340"],
    correct: "7840",
  },
  {
    id: "13",
    question:
      "(FGV) Uma empresa tem 3 diretores e 5 gerentes. Quantas comissões de 5 pessoas podem ser formadas, contendo no mínimo um diretor?",
    options: ["720", "25", "500", "55"],
    correct: "55",
  },
  {
    id: "14",
    question:
      "(UNESP) De uma urna contendo 10 bolas coloridas, sendo 4 brancas, 3 pretas, 2 vermelhas e 1 verde, retiram-se, de uma vez, 4 bolas. Quantos são os casos possíveis em que aparecem exatamente uma bola de cada cor?",
    options: ["120", "72", "24", "18"],
    correct: "24",
  },
  {
    id: "15",
    question:
      "(UEL) Um professor de Matemática comprou dois livros para premiar dois alunos de uma classe de 42 alunos. Como são dois livros diferentes, de quantos modos distintos pode ocorrer a premiação?",
    options: ["861", "1722", "1764", "3444"],
    correct: "1722",
  },
  {
    id: "16",
    question:
      "(FGV) Numa classe de 10 estudantes, um grupo de 4 será selecionado para uma excursão. De quantas maneiras o grupo poderá ser formado se dois dos dez são marido e mulher e só irão juntos?",
    options: ["126", "98", "115", "165"],
    correct: "98",
  },
  {
    id: "17",
    question:
      "(UFMG) Em uma lanchonete, os sorvetes são divididos em três grupos: o vermelho, com 5 sabores; o amarelo, com 3 sabores; e o verde, com 2 sabores. Pode-se pedir uma casquinha com 1, 2 ou 3 bolas, mas cada casquinha não pode conter 2 bolas de um mesmo grupo. O número de maneiras distintas de se pedir uma casquinha é",
    options: ["71", "86", "131", "61"],
    correct: "71",
  },
  {
    id: "18",
    question:
      "(FUNDAÇÃO LUSÍADA) O número de produtos positivos de três fatores distintos, que podem ser obtidos com os elementos do conjunto (1, -1, 4, 4, 5, -5, 7, 8), é:",
    options: ["336", "25", "56", "26"],
    correct: "25",
  },
  {
    id: "19",
    question:
      "(MACK) Um juiz dispõe de 10 pessoas, das quais somente 4 são advogados, para formar um único júri com 7 jurados. O número de formas de compor o júri, com pelo menos 1 advogado, é:",
    options: ["120", "108", "160", "140"],
    correct: "120",
  },
  {
    id: "20",
    question:
      "Do cardápio de uma festa constavam dez diferentes tipos de salgadinhos dos quais só quatro seriam servidos quentes. O garçom encarregado de arrumar a travessa e servi-la foi instruído para que a mesma contivesse sempre só 2 diferentes tipos de salgadinhos frios, e só 2 diferentes dos quentes. De quantos modos diferentes, teve o garçom a liberdade de selecionar os salgadinhos para compor a travessa, respeitando as instruções?",
    options: ["90", "21", "240", "38"],
    correct: "90",
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
    userScore.innerHTML =
      "Você acertou " + scoreCount + " de " + questionCount;
      if(scoreCount >=6){
        restart.innerHTML = "Continuar";
        localStorage.setItem("fase", 3);
        restart.addEventListener("click", () => {
          window.location.href = "../../../../services/certificado.html"
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
