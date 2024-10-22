var questionData = [
    {
        question: "What is the Full Form of HTML?",
        options: [
            "Hyper Text Makeup Language",
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language",
    },

    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets",
    },

    {
        question: "What is the Full Form of SQL?",
        options: [
            "Structured Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ],
        answer: "Structured Query Language",
    },

    {
        question: "Which HTML element is used for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: "<h1>",
    },

    {
        question: "What is the Full Form of HTTP?",
        options: [
            "Hypertext Transfer Protocol",
            "Hypertext Transfer Package",
            "Hyper Tool Protocol",
            "Hyperlink Text Protocol"
        ],
        answer: "Hypertext Transfer Protocol",
    },
];






var questioncount = document.getElementById("questioncount");
var question = document.getElementById("question");
var percent = document.getElementById("percent");
var options = document.getElementById("options");
var progress = document.getElementById("progress");
var progress1 = document.getElementById("progress1");

var questionIndex = 0;
var score = 0;
var progressValue = 1


function render() {
    if (questionIndex < questionData.length) {
        var currentQuestion = questionData[questionIndex];
        progress.style.width=`${(progressValue/questionData.length)*100}%`
        question.innerHTML = `<h2> ${currentQuestion.question}</h2>`
        questioncount.innerHTML = `current Question:${questionIndex + 1}/${questionData.length}`;
        options.innerHTML = ""
        currentQuestion.options.forEach(function (option) {
            options.innerHTML += `
<button class="option" onclick="checkAnswer('${option}','${currentQuestion.answer}')">
${option}
</button>`;
        });
    }
    else {
        console.log("END");
        showScore();
    }
}

// render()

function nextQuestion() {
    questionIndex++;
    progressValue = questionIndex + 1;  
    render();
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer == correctAnswer) {
        score++;
    }
    nextQuestion();
}

function showScore(){
    progress1.style.display='none';
question.innerHTML="Quiz Complete";
options.innerHTML=`Your score is :${score}/${questionData.length}`;
 percent.innerHTML=`${(score/questionData.length)*100}%`;
 
}

window.onload=function(){
    render()
}