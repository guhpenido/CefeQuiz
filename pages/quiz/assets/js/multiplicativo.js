import { auth, db } from "../../../../pages/login/assets/js/firebase.js";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
async function getUserName(uid) {
  const docRef = doc(db, "aluno", uid);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData.nome; // Assuming 'nome' is the field containing the user's name
    } else {
      return null; // User document doesn't exist
    }
  } catch (error) {
    console.error("Error getting user data:", error);
    return null;
  }
}

async function getUserInfo() {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user);
        const userName = await getUserName(user.uid);
  
        if (userName) {
          let loginSpan = document.getElementById("nomeDaPessoa");
          console.log("User's Name:", userName);
          loginSpan.innerHTML = userName;
        } else {
          console.log("User document not found.");
        }
      } else {
        alert("Você não está logado!");
        window.location.href = "../../../../pages/login/login.html";
      }
  
      // Unsubscribe to the listener
      unsubscribe();
    });
  }
  
  // Call the function when the page loads
  getUserInfo();

let questions = [
    {
        pergunta: "Juliana vai almoçar e deve escolher um entre dois tipos de arroz, uma entre quatro tipos de salada e um entre três tipos de carne. De quantos modos diferentes pode elaborar sua refeição?",
        opcoes: ["7", "8", "12", "24", "36"],
        resposta: 4
    },
    {
        pergunta: "Numa agência de namoro existem 30 homens e 40 mulheres cadastradas a procura de um par. Mas, algumas mulheres desistiram na última hora de buscar um par através dessa agencia. Mesmo assim o gerente observou que seria possível formar um casal de 750 maneiras diferentes com as mulheres restantes. Qual a quantidades de mulheres desistentes?  ",
        opcoes: ["10", "15", "20", "25", "30"],
        resposta: 4
    },
    {
        pergunta: "Uma senhora dispõe de seis blusas, quatro saias e três sapatos. De quantos modos distintos ela pode se vestir? ",
        opcoes: ["12", "13", "24", "36", "72"],
        resposta: 5
    },
    {
        pergunta: "(UFBA) Existem cinco ruas ligando os supermercados S1 e S2 e três ruas ligando S2 e S3. Para ir de S1 a S3. passando por S2, o número de trajetos diferentes que podem ser utilizados é: ",
        opcoes: ["15", "10", "8", "5", "3"],
        resposta: 1
    },
    {
        pergunta: "(MACKENSE-adaptada) Se uma sala tem cinco portas, o número de maneiras distintas de se entrar nela por uma porta e sair por outra diferente é:",
        opcoes: ["5", "10", "15", "20", "25"],
        resposta: 4
    },
    {
        pergunta: "Existem 3 linhas de ónibus ligando a cidade A à cidade B e 4 outras ligando B à cidade C. Uma pessoa deseja viajar de A à C, passando por  B. Quantas linhas de ônibus diferentes poderá utilizar na viagem de ida e volta, sem usar duas vezes a mesma linha?",
        opcoes: ["144", "12", "24", "72", "60"],
        resposta: 4
    },
    {
        pergunta: "(Taubaté) Cinco sinaleiros estão alinhados. Cada um tem três bandeiras: uma amarela, uma verde e uma vermelha. Os cinco sinaleiros levantam uma bandeira cada, ao mesmo tempo, transmitindo-se assim um sinal. Os números de sinais diferentes que se pode transmitir é:",
        opcoes: ["15", "125", "243", "1215", "500"],
        resposta: 3
    },
    {
        pergunta: "Dez times participam de um campeonato de futebol. De quantas formas se podem ter os três primeiros colocados?",
        opcoes: ["27", "1000", "720", "840", "560"],
        resposta: 3
    },
    {
        pergunta: "(FUVEST) Considere todas as trinta e duas sequências, com cinco elementos cada uma, que podem ser formadas com os algarismos 0 e 1. Quantas dessas sequências possuem pelo menos três zeros em posições consecutivas?",
        opcoes: ["3", "5", "8", "12", "16"],
        resposta: 3
    },
    {
        pergunta: "14)	(PUC-Campinas) Usando os algarismos 2, 3, 4, 5, 6, 8 e 9, sem repetição, quantos números pares de três algarismos distintos e maiores que 234 pode-se formar?",
        opcoes: ["110", "119", "125", "129", "132"],
        resposta: 2
    },
    {
        pergunta: "(UFMG) O total de números inteiros, com todos os algarismos distintos, compreendidos entre 11 e 1000, é:",
        opcoes: ["576", "648", "728", "738", "800"],
        resposta: 3
    },
    {
        pergunta: "(UFMG) O número de múltiplos de 10, compreendidos entre 100 e 9999 e com todos os algarismos distintos, é",
        opcoes: ["250", "321", "504", "576", "600"],
        resposta: 4
    },
    {
        pergunta: "(PUC) A quantidade de números de três algarismos maiores que 500, que podem ser formados com os algarismos 3, 5, 6, 7 e 9, com repetição, é igual a:",
        opcoes: ["10", "20", "48", "64", "100"],
        resposta: 5
    },
    {
        pergunta: "(UFMG) Numa cidade A, os números de telefones têm sete algarismos, sendo que os três primeiros constituem o prefixo da cidade. Os telefones que terminam em 10 são reservados para farmácias e os que os dois últimos algarismos são iguais, para médicos e hospitais. A quantidade dos demais números de telefones disponíveis na cidade A é:",
        opcoes: ["1650", "2100", "4800", "8900", "9000"],
        resposta: 4
    },
    {
        pergunta: "(Famerp 2023)  Para completar o álbum de figurinhas da Copa do Mundo, são necessárias 670 figurinhas diferentes. Sabendo-se que cada pacotinho contém 5 figurinhas, todas distintas, o total de pacotinhos diferentes que podem ser formados com as figurinhas do álbum pode ser calculado por meio do produto",
        opcoes: ["67 × 223 × 167 × 667 × 666", "67 × 669 × 668 × 667 × 666", "67 × 223 × 167 × 667 × 222", "670 × 669 × 668 × 667 × 666", "670⁵"],
        resposta: 1
    },
    {
        pergunta: "(Esa 2023)  Em uma instrução de orientação diurna, um aluno da Escola de Sargentos das Armas foi colocado na origem de um sistema cartesiano ortogonal Ox e Oy. Considerando que ele dê exatamente 4 passos, um de cada vez, nas direções norte (N) ou leste (L), quantas trajetórias ele poderá percorrer?",
        opcoes: ["32", "12", "4", "36", "16"],
        resposta: 5
    },
    {
        pergunta: "(Ueg 2023)  Marina possui um diário que fica sempre protegido por um cadeado. A abertura do cadeado é feita por um segredo, que é uma combinação de três números. Marina desafiou sua irmã a abrir o cadeado do diário para ler suas anotações, e deu a ela as seguintes dicas: o segredo é um número par que inicia com um dígito primo. Qual o número máximo de tentativas que a irmã de Marina tem para descobrir o segredo?",
        opcoes: ["360", "200", "180", "160", "100"],
        resposta: 2
    },
    {
        pergunta: "(Espcex (Aman) 2023)  A senha de acesso à conta-corrente de um banco deve ser composta por quatro algarismos distintos, escolhidos entre os algarismos 1, 3, 4, 5, 7, 8 e 9. Nesse caso, a quantidade de senhas que têm como último dígito um algarismo par é",
        opcoes: ["120", "240", "360", "600", "16400"],
        resposta: 2
    },
    {
        pergunta: "(Uece 2022)  No Brasil, os veículos automotores mais antigos, com quatro rodas ou mais, são identificados com placas nas quais são gravados sete dígitos, sendo três letras seguidas de quatro algarismos arábicos (por exemplo GAV 5613). Atualmente os veículos novos são identificados com placas do chamado padrão Mercosul, que também utiliza sete dígitos. A diferença é que, de acordo com esse padrão, o segundo algarismo da esquerda para a direita é substituído por uma das vinte e seis letras do alfabeto português (por exemplo GAV 5M13). Considerando que pode haver repetição dos dígitos, o número total de placas padrão Mercosul que podem ser produzidas é",
        opcoes: ["2⁵ ⋅ 5⁴ ⋅ 13⁵", "2⁵ ⋅ 5⁶ ⋅ 13⁴", "2⁷ ⋅ 5⁴ ⋅ 13⁵", "2⁷ ⋅ 5³ ⋅ 13⁴", "2⁵ ⋅ 5³ ⋅ 13⁴"],
        resposta: 4
    },
    {
        pergunta: "(Fmp 2022)  Quantos números naturais formados por quatro algarismos há, em que o algarismo das dezenas é igual ao algarismo das centenas, e o algarismo das unidades é diferente do algarismo das unidades de milhar?",
        opcoes: ["999", "900", "810", "729", "720"],
        resposta: 3
    }
];

let questionIndex = 0;
let numCorretas = 0;
let numIncorretas = 0;
let selectedQuestions = [];

function getRandomQuestion() {
    let randomIndex = Math.floor(Math.random() * questions.length);
    if (!selectedQuestions.includes(randomIndex)) {
        selectedQuestions.push(randomIndex);
        return questions[randomIndex];
    } else {
        return getRandomQuestion();
    }
}

function showQuestion() {
    if (questionIndex < 10) {
        let questionElement = document.getElementById("question");
        let optionsElement = document.getElementById("options");
        let question = getRandomQuestion();

        questionElement.textContent = question.pergunta;

        optionsElement.innerHTML = "";

        for (let i = 0; i < question.opcoes.length; i++) {
            let option = document.createElement("button");
            option.textContent = question.opcoes[i];
            option.addEventListener("click", checkAnswer.bind(null, i));
            optionsElement.appendChild(option);
        }
        updateStatus();
    } else {
        alert("Trivia concluída!");
        location.reload();
    }
}

function checkAnswer(selectedIndex) {
    let question = questions[selectedQuestions[questionIndex]];

    if (selectedIndex === question.resposta - 1) {
        alert("Resposta correta!");
        numCorretas++;
    } else {
        alert("Resposta incorreta!");
        numIncorretas++;
    }

    questionIndex++;
    showQuestion();
}

function updateStatus() {
    let statusElement = document.getElementById("status");
    statusElement.textContent = `Pergunta ${questionIndex + 1} de 10 | Corretas: ${numCorretas} | Incorretas: ${numIncorretas}`;
}

showQuestion();