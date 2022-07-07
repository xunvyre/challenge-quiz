//--------define universal variables
var timeLeft = 0;
var timeInterval; 
var currentQuestion = 0;
var viewScore = document.getElementById("view-scores");

//--------object array for quiz questions
var questions =
[
    { 
        ask: "Arrays in Javascript can be used to store __________.", 
        answer: "4. all of the above", 
        options: ["1. numbers", "2. booleans", "3. strings", "4. all of the above"]
    },
    { 
        ask: "Inside which HTML element do we put the javascript?", 
        answer: "3. <script>", 
        options: ["1. <h1>", "2. <js>", "3. <script>", "4. <head>"]
    },
    { 
        ask: "What syntax would call a function?", 
        answer: "4. function()", 
        options: ["1. var function", "2. function", "3. call function", "4. function()"]
    },
    { 
        ask: "What does DOM stand for?", 
        answer: "2. Document Object Model", 
        options: ["1. Dependent Origin Made", "2. Document Object Model", "3. Direct Obligation Met", "4. Duplicate Object Mode"]
    },
    {
        ask: "The condition in an if/else statement is enclosed with ________.",
        answer: "1. parentheses",
        options: ["1. parentheses", "2. quotes", "3. braces", "4. brackets"]
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
    timeLeft = 80;
    document.getElementById("timer").innerHTML = timeLeft;
    timeInterval = setInterval(function ()
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

};


//--------calls timer function and passes the user into the first question
var startQuiz = function()
{
    timer();
    newQuestion(questions[currentQuestion]);
};

var newQuestion = function(question) //i want each element to be populated by the corresponding property in the array and looped through when an answer is selected
{
    document.getElementById("main").innerHTML = "";

    var questionTitle = document.createElement("h1");
    questionTitle.className = "question";
    questionTitle.textContent = question.ask;

    var pageSetup = document.getElementById("main");
    pageSetup.appendChild(questionTitle);

    for (i = 0; i < question.options.length; i++)
    {
        var answer = document.createElement("button")
        answer.className = "option-btn";
        answer.textContent = question.options[i];
        if (question.options[i] === question.answer)
        {
            answer.setAttribute("onclick", "correct()")
        }
        else
        {
            answer.setAttribute("onclick", "incorrect()")
        }
        pageSetup.appendChild(answer);
    }
};

var correct = function()
{
    document.getElementById("correct").style.display = "block";
    document.getElementById("incorrect").style.display = "none";
    nextQuestion();
};

var incorrect = function()
{
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("correct").style.display = "none";
    timeLeft -= 10;
    nextQuestion();
};

var nextQuestion = function()
{
    currentQuestion++;
    if (currentQuestion < questions.length)
    {
        newQuestion(questions[currentQuestion]);
    }
    else
    {
        endQuiz();
    }
}

//--------page to reset the quiz on timeout
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
};

var endQuiz = function()
{
    clearInterval(timeInterval);
    localStorage.setItem("timeLeft", timeLeft);
    document.getElementById("main").innerHTML = "";

    var endQuizTitle = document.createElement("h1");
    endQuizTitle.className = "landing-title";
    endQuizTitle.textContent = "You finished the quiz!";

    var endQuizPrompt = document.createElement("p");
    endQuizPrompt.classname = "landing-p";
    endQuizPrompt.textContent = "Enter your name to save your score!";

    //var endQuizSubmit = "input element"

    var endQuizPage = document.getElementById("main");
    endQuizPage.appendChild(endQuizTitle);
    endQuizPage.appendChild(endQuizPrompt);
};

var loadScores = function()
{
    timeLeft = 0;
    document.getElementById("main").innerHTML = "";

    var highScoresTitle = document.createElement("h1");
    highScoresTitle.classname = "landing-title";
    highScoresTitle.textContent = "Current High Scores:";

    //get the scores from localStorage and display them here

    var highScoresPage = document.getElementById("main");
    highScoresPage.appendChild = (highScoresTitle);
};

window.onload = landingPage();
viewScore.addEventListener("click", loadScores)
