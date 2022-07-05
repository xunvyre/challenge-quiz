var questions =
[
    { 
        q: 'Arrays in Javascript can be used to store __________.', 
        a: '4. all of the above', 
        choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
    },
    { 
        q: 'Inside which HTML element do we put the javascript?', 
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

    var insertText = document.getElementById("main");
    insertText.appendChild(firstTitle);
    insertText.appendChild(quizDesc);
    insertText.appendChild(startBtn);

    
};

window.onload = landingPage();

/*var startQuiz = function()
{

};

var selectAnswer = function()
{

};

var nextQuestion = function()
{

};

var yourScore = function()
{

};*/