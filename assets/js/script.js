//--------define universal variables
var timeLeft = 0;

//--------object array for quiz questions
const questions =
[
    { 
        question: 'Arrays in Javascript can be used to store __________.', 
        answer: '4. all of the above', 
        choices: ['1. numbers', '2. booleans', '3. strings', '4. all of the above']
    },
    { 
        question: 'Inside which HTML element do we put the javascript?', 
        answer: '3. <script>', 
        choices: ['1. <h1>', '2. <js>', '3. <script>', '4. <head>']
    },
    { 
        question: 'What syntax would call a function?', 
        answer: '4. function()', 
        choices: ['1. var function', '2. function', '3. call function', '4. function()']
    },
    { 
        question: 'What does DOM stand for?', 
        aanswer: '2. Document Object Model', 
        choices: ['1. Dependent Origin Made', '2. Document Object Model', '3. Direct Obligation Met', '4. Duplicate Object Mode']
    },
    {
        question: 'The condition in an if/else statement is enclosed with ________.',
        answer: '1. parentheses',
        choices: ['1. parentheses', '2. quotes', '3. braces', '4. brackets']
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
    timeLeft = 5;
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
    questionTitle.textContent = questions.question[0];

    var answerOne = document.createElement("button")
    answerOne.className = "option-btn";
    answerOne.textContent = questions.choices;

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

var timedOut = function()
{
    document.getElementById("main").innerHTML = "";

    var timedOutTitle = document.createElement("h1");
    timedOutTitle.className = "landing-title";
    timedOutTitle.textContent = "Time's up!";

    var timedOutDesc = document.createElement("p")
    timedOutDesc.className = "landing-p";
    timedOutDesc.textContent = "You ran out of time! Want to try again?";

    var tryAgain = document.createElement("button");
    tryAgain.className = "landing-btn";
    tryAgain.textContent = "Yes!";

    var timedOutPage = document.getElementById("main");
    timedOutPage.appendChild(timedOutTitle);
    timedOutPage.appendChild(timedOutDesc);
    timedOutPage.appendChild(tryAgain);

    tryAgain.addEventListener("click", startQuiz)
}

window.onload = landingPage();