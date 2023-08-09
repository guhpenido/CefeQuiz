let questions = [
    {
        pergunta: "(U.F.STA.CATARINA) O número de anagramas da palavra ALUNO, em que as consoantes ficam na ordem LN e as vogais na ordem AUO é:",
        opcoes: ["20", "120", "10", "60", "40"],
        resposta: 1
    },
    {
        pergunta: "(FEI) Obter o número de anagramas formados com as letras da palavra REPÚBLICA, nos quais as vogais se mantem nas respectivas posições:",
        opcoes: ["8!", "7!", "6!", "5!", "4!"],
        resposta: 3
    },
    {
        pergunta: "(FUVEST) O número de anagramas da palavra FUVEST que começam e terminam por vogal:",
        opcoes: ["24", "48", "96", "120", "144"],
        resposta: 1
    },
    {
        pergunta: "(UNIV. FED. BAHIA) Quatro jogadores saíram de Manaus para um campeonato em Porto Alegre, num carro de 4 lugares. Dividiram o trajeto em 4 partes e aceitaram que cada um dirigia uma vez. Combinaram também que, toda vez que houvesse mudança de motorista, todos deveriam trocar de lugar. Qual o número de arrumações possíveis dos 4 jogadores, durante toda a viajem é:antos continentes existem no mundo?",
        opcoes: ["4", "8", "12", "24", "162"],
        resposta: 3
    },
    {
        pergunta: "(S.J. CAMPOS) De quantos modos diferentes podemos dispor as letras da palavra VESTIBULAR de modo que as vogais e as consoantes apareçam juntas em qualquer ordem?",
        opcoes: ["120", "720", "17.280", "34.560", "86.400"],
        resposta: 3
    },
    {
        pergunta: "(VIÇOSA) Seis pessoas em fila gastam 10 segundos para mudar de ordem. O tempo necessário para todas as mudanças possíveis é:",
        opcoes: ["4h", "2h", "3h", "5h", "6h"],
        resposta: 1
    },
    {
        pergunta: "Um garçom anotou as encomendas de 4 fregueses. Cada um pediu uma sopa, um prato principal, uma bebida e uma sobremesa. O garçom não anotou quais clientes pediram quais encomendas, lembrando-se apenas que cada um solicitou uma sopa diferente, um prato principal diferente, uma bebida diferente e uma sobremesa diferente. De quantas maneiras ele poderá distribuir os pedidos entre os 4 clientes?",
        opcoes: ["(4!)⁴", "4x4!", "4!x4!", "4¹⁶", "16!/4!4!"],
        resposta: 0
    },
    {
        pergunta: "(MACK) Um trem de passageiros é constituído de uma locomotiva e 6 vagões distintos, sendo um deles restaurante. Sabendo-se que a locomotiva deve ir à frente e que o vagão restaurante não pode ser colocado imediatamente após a locomotiva, o número de modos diferentes de montar a composição é:",
        opcoes: ["120", "320", "500", "600", "720"],
        resposta: 3
    },
    {
        pergunta: "(UNIV. CAT. PELOTAS) Uma família com 5 pessoas possui um automóvel de 5 lugares. Se apenas uma pessoa dirige, o número de modos que podem se acomodar no carro para uma viagem é:",
        opcoes: ["6", "120", "36", "24", "n.d.a"],
        resposta: 3
    },
    {
        pergunta: "(SÃO CARLOS) Quatro rapazes e uma moça formam uma fila. De quantas maneiras esta fila pode ser formada de modo que a moça fique sempre em 1º lugar?",
        opcoes: ["24", "12", "18", "4", "6"],
        resposta: 0
    },
    {
        pergunta: "(ENO. DE ALIMENTOS BARRETOS) Tem-se 12 livros, todos diferentes, sendo 5 de Matemática 4 de Física e 3 de Química. De quantos modos podemos dispô-los sobre urna prateleira devendo os livros de cada assunto permanecer juntos?",
        opcoes: ["103.680", "17.280", "150", "12", "6"],
        resposta: 0
    },
    {
        pergunta: "(IME-adaptada) 5 rapazes e 5 moças devem posar para fotografia, ocupando uma escada com 5 degraus de forma que em cada degrau fique um rapaz e uma moça. De quantas maneiras diferentes podemos arrumar esse grupo?",
        opcoes: ["70.400", "128.000", "460.800", "332.000", "625"],
        resposta: 2
    },
    {
        pergunta: "(FESP) Qual é a soma dos números que se pode formar com as permutações dos algarismos 0, l, 2 e 3?",
        opcoes: ["36.996", "38.996", "34.996", "34.992", "39.996"],
        resposta: 4
    },
    {
        pergunta: "Joãozinho tem uma coleção de oito soldados de plástico. Resolveu colocar todos em fila. Mas quando realizava tal processo observou que possuía um tipo de soldado repetido. Sabendo que Joãozinho pode formar, com sua coleção, 6720 filas distintas. Qual o número de soldados repetidos? ",
        opcoes: ["6", "2", "7", "9", "13"],
        resposta: 0
    },
    {
        pergunta: "(MACK) Dentre os anagramas distintos que podemos formar com n letras, das quais duas são iguais, 120 apresentam estas duas letras iguais juntas. O valor de n é:",
        opcoes: ["4", "5", "6", "7", "122"],
        resposta: 2
    },
    {
        pergunta: "(MACK) O número de maneiras diferentes de colocar em uma linha de um tabuleiro de xadrez (8 posições) as peças brancas (2 torres, 2 cavalos, 2 bispos, a rainha e o rei) é:",
        opcoes: ["8!", "504", "5040", "8", "4"],
        resposta: 2
    },
    {
        pergunta: "Quantos números de 6 dígitos podem ser formados usando apenas os algarismos 1,1,1,1,2 e 3?",
        opcoes: ["6!", "4!/2!", "6!/2!2!", "6!/4!", "3!"],
        resposta: 3
    },
    {
        pergunta: "O número de anagramas da palavra SERGIPE nos quais a primeira letra é E e a última também é E, são:",
        opcoes: ["5", "2520", "1680", "120", "1260"],
        resposta: 3
    },
    {
        pergunta: "Usando apenas os algarismos 1,3,3,5 e 9, quantos números podemos formar maiores que 70 000?",
        opcoes: ["5!/2!", "5!", "1x(4!/2!)", "4!", "4!5!"],
        resposta: 2
    },
    {
        pergunta: "Pedro dispõe de uma coleção de 40 bonés. Dentre eles existem, respectivamente sete, cinco e nove idênticos entre si. Deseja dispô-los em linha numa prateleira. De quantos modos distintos Pedro pode realizar esse processo? ",
        opcoes: ["40!/7!5!9!", "40!/3!", "40!/21!", "21!", "40!21!"],
        resposta: 0
    },
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

    if (selectedIndex === question.resposta) {
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
