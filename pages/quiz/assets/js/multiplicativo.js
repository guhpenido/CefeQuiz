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

let AquizArray = [
    {
        question: "Juliana vai almoçar e deve escolher um entre dois tipos de arroz, uma entre quatro tipos de salada e um entre três tipos de carne. De quantos modos diferentes pode elaborar sua refeição?",
        options: ["7", "8", "12", "24", "36"],
        correct: "24"
    },
    {
        question: "Numa agência de namoro existem 30 homens e 40 mulheres cadastradas a procura de um par. Mas, algumas mulheres desistiram na última hora de buscar um par através dessa agencia. Mesmo assim o gerente observou que seria possível formar um casal de 750 maneiras diferentes com as mulheres restantes. Qual a quantidades de mulheres desistentes?  ",
        options: ["10", "15", "20", "25", "30"],
        correct: "25"
    },
    {
        question: "Uma senhora dispõe de seis blusas, quatro saias e três sapatos. De quantos modos distintos ela pode se vestir? ",
        options: ["12", "13", "24", "36", "72"],
        correct: "72"
    },
    {
        question: "(UFBA) Existem cinco ruas ligando os supermercados S1 e S2 e três ruas ligando S2 e S3. Para ir de S1 a S3. passando por S2, o número de trajetos diferentes que podem ser utilizados é: ",
        options: ["15", "10", "8", "5", "3"],
        correct: "15"
    },
    {
        question: "(MACKENSE-adaptada) Se uma sala tem cinco portas, o número de maneiras distintas de se entrar nela por uma porta e sair por outra diferente é:",
        options: ["5", "10", "15", "20", "25"],
        correct: "20"
    },
    {
        question: "Existem 3 linhas de ónibus ligando a cidade A à cidade B e 4 outras ligando B à cidade C. Uma pessoa deseja viajar de A à C, passando por  B. Quantas linhas de ônibus diferentes poderá utilizar na viagem de ida e volta, sem usar duas vezes a mesma linha?",
        options: ["144", "12", "24", "72", "60"],
        correct: "72"
    },
    {
        question: "(Taubaté) Cinco sinaleiros estão alinhados. Cada um tem três bandeiras: uma amarela, uma verde e uma vermelha. Os cinco sinaleiros levantam uma bandeira cada, ao mesmo tempo, transmitindo-se assim um sinal. Os números de sinais diferentes que se pode transmitir é:",
        options: ["15", "125", "243", "1215", "500"],
        correct: "243"
    },
    {
        question: "Dez times participam de um campeonato de futebol. De quantas formas se podem ter os três primeiros colocados?",
        options: ["27", "1000", "720", "840", "560"],
        correct: "720"
    },
    {
        question: "(FUVEST) Considere todas as trinta e duas sequências, com cinco elementos cada uma, que podem ser formadas com os algarismos 0 e 1. Quantas dessas sequências possuem pelo menos três zeros em posições consecutivas?",
        options: ["3", "5", "8", "12", "16"],
        correct: "8"
    },
    {
        question: "14)	(PUC-Campinas) Usando os algarismos 2, 3, 4, 5, 6, 8 e 9, sem repetição, quantos números pares de três algarismos distintos e maiores que 234 pode-se formar?",
        options: ["110", "119", "125", "129", "132"],
        correct: "119"
    },
    {
        question: "(UFMG) O total de números inteiros, com todos os algarismos distintos, compreendidos entre 11 e 1000, é:",
        options: ["576", "648", "728", "738", "800"],
        correct: "728"
    },
    {
        question: "(UFMG) O número de múltiplos de 10, compreendidos entre 100 e 9999 e com todos os algarismos distintos, é",
        options: ["250", "321", "504", "576", "600"],
        correct: "576"
    },
    {
        question: "(PUC) A quantidade de números de três algarismos maiores que 500, que podem ser formados com os algarismos 3, 5, 6, 7 e 9, com repetição, é igual a:",
        options: ["10", "20", "48", "64", "100"],
        correct: "100"
    },
    {
        question: "(UFMG) Numa cidade A, os números de telefones têm sete algarismos, sendo que os três primeiros constituem o prefixo da cidade. Os telefones que terminam em 10 são reservados para farmácias e os que os dois últimos algarismos são iguais, para médicos e hospitais. A quantidade dos demais números de telefones disponíveis na cidade A é:",
        options: ["1650", "2100", "4800", "8900", "9000"],
        correct: "8900"
    },
    {
        question: "(Famerp 2023)  Para completar o álbum de figurinhas da Copa do Mundo, são necessárias 670 figurinhas diferentes. Sabendo-se que cada pacotinho contém 5 figurinhas, todas distintas, o total de pacotinhos diferentes que podem ser formados com as figurinhas do álbum pode ser calculado por meio do produto",
        options: ["67 × 223 × 167 × 667 × 666", "67 × 669 × 668 × 667 × 666", "67 × 223 × 167 × 667 × 222", "670 × 669 × 668 × 667 × 666", "670⁵"],
        correct: "67 × 223 × 167 × 667 × 666"
    },
    {
        question: "(Esa 2023)  Em uma instrução de orientação diurna, um aluno da Escola de Sargentos das Armas foi colocado na origem de um sistema cartesiano ortogonal Ox e Oy. Considerando que ele dê exatamente 4 passos, um de cada vez, nas direções norte (N) ou leste (L), quantas trajetórias ele poderá percorrer?",
        options: ["32", "12", "4", "36", "16"],
        correct: "16"
    },
    {
        question: "(Ueg 2023)  Marina possui um diário que fica sempre protegido por um cadeado. A abertura do cadeado é feita por um segredo, que é uma combinação de três números. Marina desafiou sua irmã a abrir o cadeado do diário para ler suas anotações, e deu a ela as seguintes dicas: o segredo é um número par que inicia com um dígito primo. Qual o número máximo de tentativas que a irmã de Marina tem para descobrir o segredo?",
        options: ["360", "200", "180", "160", "100"],
        correct: "200"
    },
    {
        question: "(Espcex (Aman) 2023)  A senha de acesso à conta-corrente de um banco deve ser composta por quatro algarismos distintos, escolhidos entre os algarismos 1, 3, 4, 5, 7, 8 e 9. Nesse caso, a quantidade de senhas que têm como último dígito um algarismo par é",
        options: ["120", "240", "360", "600", "16400"],
        correct: "240"
    },
    {
        question: "(Uece 2022)  No Brasil, os veículos automotores mais antigos, com quatro rodas ou mais, são identificados com placas nas quais são gravados sete dígitos, sendo três letras seguidas de quatro algarismos arábicos (por exemplo GAV 5613). Atualmente os veículos novos são identificados com placas do chamado padrão Mercosul, que também utiliza sete dígitos. A diferença é que, de acordo com esse padrão, o segundo algarismo da esquerda para a direita é substituído por uma das vinte e seis letras do alfabeto português (por exemplo GAV 5M13). Considerando que pode haver repetição dos dígitos, o número total de placas padrão Mercosul que podem ser produzidas é",
        options: ["2⁵ ⋅ 5⁴ ⋅ 13⁵", "2⁵ ⋅ 5⁶ ⋅ 13⁴", "2⁷ ⋅ 5⁴ ⋅ 13⁵", "2⁷ ⋅ 5³ ⋅ 13⁴", "2⁵ ⋅ 5³ ⋅ 13⁴"],
        correct: "2⁷ ⋅ 5³ ⋅ 13⁴"
    },
    {
        question: "(Fmp 2022)  Quantos números naturais formados por quatro algarismos há, em que o algarismo das dezenas é igual ao algarismo das centenas, e o algarismo das unidades é diferente do algarismo das unidades de milhar?",
        options: ["999", "900", "810", "729", "720"],
        correct: "810"
    }
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
       localStorage.setItem("fase", 1);
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
const options = document.querySelectorAll('.option-div');

// Adiciona o evento de clique a cada opção
options.forEach(option => {
  option.addEventListener('click', () => {
    checker(option);
  });
});
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
