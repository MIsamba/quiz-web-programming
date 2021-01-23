const quizData = [
    {
        question: "Which languages a FrontEnd must have?",
        a: "Python,Kotline",
        b: "Java,Javascript",
        c: "Html,Javascript",
        d: "Bootstrap,CSS",
        correct:"c",
    },
    {
        question: "What Does CSS stand for?",
        a: "Centra Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cars Sailboats",
        d: "None",
        correct:"b",
    },
    {
        question: "What is Javascript used for?",
        a: "Styling web page",
        b: "Making the web page dynamic",
        c: "Styling a web page",
        d: "Hosting Static website",
        correct:"b",
    },
    {
        question: "What can CSS do?",
        a: "Style web page",
        b: "Host website",
        c: "Nothing",
        d: "Code computer softwares",
        correct:"a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked =
        false)
}
function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer ==quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}
            /${quizData.length} questions</h2>
           
           <button onclick="location.reload()
           ">Reload</button>
           
            `
        }
    }
})

