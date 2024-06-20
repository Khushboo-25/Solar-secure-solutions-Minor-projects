let quizdata=[
    {
        question:"Which framework is belong to JavaScript",
        a:".net",
        b:"flask",
        c:"react",
        d:"django",
        correct:'c'

    },
    {
        question:"Which is not aprogramming language",
        a:"html",
        b:"python",
        c:"java",
        d:"js",
        correct:'a'
    },
    {
        question:"Which is not a framework",
        a:"react",
        b:"javascript",
        c:"angular",
        d:"django",
        correct:'a'
    },
    {
        question:"CSS stands for",
        a:"cascading style state",
        b:"cascading style sheets",
        c:"cascading sheetof style",
        d:"none",
        correct:'b'
    }
]

let quiz=document.getElementById('quizdiv');
let ans=document.querySelectorAll('.answer');
let question=document.getElementById('question');
let option_a=document.getElementById('a_value');
let option_b=document.getElementById('b_value');
let option_c=document.getElementById('c_value');
let option_d=document.getElementById('d_value');
let submitbtn=document.getElementById('submit');

let currentquestion=0;
let quizscore=0;

loadquiz();

function loadquiz(){
    deselect();
    question.innerHTML=quizdata[currentquestion].question;
    option_a.innerHTML=quizdata[currentquestion].a;
    option_b.innerHTML=quizdata[currentquestion].b;
    option_c.innerHTML=quizdata[currentquestion].c;
    option_d.innerHTML=quizdata[currentquestion].d;
}
function deselect(){
    ans.forEach(element => {
        element.checked=false;
    });
}

submitbtn.addEventListener('click',()=>{
    
    let selectedoption;
    ans.forEach(answer=>{
        if(answer.checked)
            selectedoption=answer.id;
        
    })
    if(selectedoption===quizdata[currentquestion].correct)
        quizscore=quizscore+1;
    currentquestion=currentquestion+1;
    if (currentquestion < quizdata.length) {
        loadquiz();
    } else {
        quiz.innerHTML = `<h2>You have answered ${quizscore} out of ${quizdata.length} questions correctly.</h2>`;
    }
        
})