//--------define universal variables
var timeLeft = 0;

//--------object array for quiz questions
const questions =
[
    { 
        question: 'Arrays in Javascript can be used to store __________.', 
        aanswer: '4. all of the above', 
        choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
    },
    { 
        question: 'Inside which HTML element do we put the javascript?', 
        a: '3. <script>', 
        choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <head>'}]
    },
    { 
        q: 'What syntax would call a function?', 
        a: '4. function()', 
        choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
    },
    { 
        q: 'What does DOM stand for?', 
        a: '2. Document Object Model', 
        choices: [{choice: '1. Dependent Origin Made'}, {choice: '2. Document Object Model'}, {choice: '3. Direct Obligation Met'}, {choice: '4. Duplicate Object Mode'}]
    },
    {
        q: 'The condition in an if/else statement is enclosed with ________.',
        a: '1. parentheses',
        choices: [{choice: '1. parentheses'}, {choice: '2. quotes'}, {choice: '3. braces'}, {choice: '4. brackets'}]
    }
];

//--------introduction page
var landingPage = function()
{
    var firstTitle = document.createElement("h1");
    firstTitle.className = "landing-title";
    firstTitle.textContent = "Coding Quiz Challenge";

    var quizDesc = document.createElement("p");
    quizDesc.className = "landing-p";
    quizDesc.textContent = "Try to answer all of the code-related questions within the time limit. Any wrong answers will decrease your time by ten seconds, which affects your final score!";
    
    var startBtn = document.createElement("button")
    startBtn.className = "landing-btn"
    startBtn.textContent = "Start quiz!"

    var newQuiz = document.getElementById("main");
    newQuiz.appendChild(firstTitle);
    newQuiz.appendChild(quizDesc);
    newQuiz.appendChild(startBtn);

    startBtn.addEventListener("click", startQuiz)
};

//--------timer function for startQuiz
var timer = function()
{
    timeLeft = 60;
    document.getElementById("timer").innerHTML = timeLeft;
    var timeInterval = setInterval(function ()
    {
        if (timeLeft > 0)
        {
            timeLeft--;
            document.getElementById("timer").innerHTML = timeLeft;
        }
        else
        {
            clearInterval(timeInterval);
            timedOut();
        }
    }, 1000);

}

//--------calls timer function and passes the user into the first question
var startQuiz = function()
{
    timer();
    newQuestion();
}

var newQuestion = function()
{
    document.getElementById("main").innerHTML = "";

    var questionTitle = document.createElement("h1");
    questionTitle.className = "question";
    questionTitle.textContent = "The question from the array will go here.";

    var answerOne = document.createElement("button")
    answerOne.className = "option-btn";
    answerOne.textContent = "choice 1";

    var answerTwo = document.createElement("button")
    answerTwo.className = "option-btn";
    answerTwo.textContent = "choice 2";

    var answerThree = document.createElement("button")
    answerThree.className = "option-btn";
    answerThree.textContent = "choice 3";

    var answerFour = document.createElement("button")
    answerFour.className = "option-btn";
    answerFour.textContent = "choice 4";

    var pageSetup = document.getElementById("main");
    pageSetup.appendChild(questionTitle);
    pageSetup.appendChild(answerOne);
    pageSetup.appendChild(answerTwo);
    pageSetup.appendChild(answerThree);
    pageSetup.appendChild(answerFour);

    if (choice === a && i > questions.length)
    {
        //go to the next question by calling the function for the next object in the array if there's still another option left
    }
    else if (i > questions.length)
    {
        //apply the penalty to the timer and ^^
    }
    else
    {
        //stop timer and go to high scores page
    }
};

window.onload = landingPage();