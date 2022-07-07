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
    currentQuestion = 0;        //reset currentQuestion variable if coming from loadScores
    document.getElementById("main").innerHTML = "";     //clear the page if coming from loadScores
    
    var firstTitle = document.createElement("h1");      //generate page
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

    startBtn.addEventListener("click", startQuiz)       //and call the quiz to start
};

//--------timer function for startQuiz
var timer = function()
{
    timeLeft = 60;
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

//--------format and loop through each question
var newQuestion = function(question)    //assign array element
{
    document.getElementById("main").innerHTML = "";     //clear the page

    var questionTitle = document.createElement("h1");       //and generate the first question
    questionTitle.className = "question";
    questionTitle.textContent = question.ask;

    var pageSetup = document.getElementById("main");
    pageSetup.appendChild(questionTitle);

    for (i = 0; i < question.options.length; i++)       //pull the sub array
    {
        var answer = document.createElement("button")       //and format the option buttons
        answer.className = "option-btn";
        answer.textContent = question.options[i];
        if (question.options[i] === question.answer)        //assign the buttons their value to call corresponding function
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

var correct = function()    //if the button was assigned correct
{
    document.getElementById("correct").style.display = "block";
    document.getElementById("incorrect").style.display = "none";    //display the confirmation
    nextQuestion();     //and pass into the check function
};

var incorrect = function()      //if the button was assigned incorrect
{
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("correct").style.display = "none";      //display the confirmation
    timeLeft -= 10;     //subtract the time penalty
    nextQuestion();     //and pass into the check function
};

var nextQuestion = function()   //check to see if there's another question
{
    currentQuestion++;      //increase currentQuestion value
    if (currentQuestion < questions.length)     //check against questions.length
    {
        newQuestion(questions[currentQuestion]);       //continue the loop or
    }
    else
    {
        endQuiz();     //end the quiz if questions are finished
    }
}

//--------page to reset the quiz on timeout
var timedOut = function()
{
    document.getElementById("main").innerHTML = "";     //clear the page and generate a new one

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

    tryAgain.addEventListener("click", startQuiz)       //call the quiz to start over without calling the landing page
};

//--------celebration page to save score
var endQuiz = function()
{
    clearInterval(timeInterval);        //stop the timer
    document.getElementById("main").innerHTML = "";     //clear the page

    var endQuizTitle = document.createElement("h1");        //and generate a new page
    endQuizTitle.className = "landing-title";
    endQuizTitle.textContent = "You finished the quiz!";

    var endQuizPrompt = document.createElement("p");
    endQuizPrompt.className = "landing-p";
    endQuizPrompt.textContent = "Enter your name to save your score!";

    var endQuizForm = document.createElement("input");
    endQuizForm.setAttribute("type", "text");
    endQuizForm.setAttribute("id", "name");
    endQuizForm.setAttribute("placeholder", "Your Name");
    endQuizForm.className = "end-input";

    var endQuizSubmit = document.createElement("button");
    endQuizSubmit.setAttribute("type", "submit");
    endQuizSubmit.textContent = "Save my score!";
    endQuizSubmit.setAttribute("onclick", "saveScore()")
    endQuizSubmit.className = "landing-btn";

    var endQuizPage = document.getElementById("main");
    endQuizPage.appendChild(endQuizTitle);
    endQuizPage.appendChild(endQuizPrompt);
    endQuizPage.appendChild(endQuizForm);
    endQuizPage.appendChild(endQuizSubmit);
};

var saveScore = function()
{
    localStorage.setItem("newScore", timeLeft);
    localStorage.setItem("newName", document.getElementById("name").value);
    loadScores();
};

var loadScores = function()
{
    timeLeft = 0;

    document.getElementById("main").innerHTML = "";
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";

    var highScoresTitle = document.createElement("h1");
    highScoresTitle.className = "landing-title";
    highScoresTitle.textContent = "Current Score:";

    var highScores = document.createElement("p");
    highScores.className = "landing-p";
    highScores.textContent = +localStorage.getItem("newName")+ "'s current score is " +localStorage.getItem("newScore")+ "!";

    var startOver = document.createElement("button");
    startOver.textContent = "Start over!";
    startOver.className = "landing-btn";
    startOver.setAttribute("onclick", "landingPage()");

    var clearScores = document.createElement("button");
    clearScores.textContent = "Clear score.";
    clearScores.className = "landing-btn";
    clearScores.setAttribute("onclick", "localStorage.clear()");

    var highScoresPage = document.getElementById("main");
    highScoresPage.appendChild(highScoresTitle);
    highScoresPage.appendChild(highScores);
    highScoresPage.appendChild(startOver);
    highScoresPage.appendChild(clearScores);
};

window.onload = landingPage();
viewScore.addEventListener("click", loadScores)
