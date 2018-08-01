$(document).ready(function () {
    // set variables
var trivia= [
{
    question: "What is the name of the cannon shot every time the Longhorns score a touchdown?",
    choices: ["Bevo the Cannon","Bertha the Cannon", "Smokey The Cannon", "The Cannon"],
    answer: "2"
},
{
    question: "Which of the following is not a UT alumni?",
    choices: ["Matthew MCConaughey","Rick Perry", "Kevin Durant", "Wes Anderson"],
    answer: "1"
},
{
    question: "What is the name of the school mascot?",
    choices: ["Bevo","Bertha", "Mr.Longhorn", "Buddy"],
    answer: "0"
},
{
    question: "What is the name of the schools song?",
    choices: ["Texas,Texas","Gabriel", "The Eyes of Texas", "Longhorn Pride"],
    answer: "2"
},
{
    question: "What are the school colors?",
    choices: ["Orange and White","Maroon and White", "Red and Black", "Burnt-Orange and White"],
    answer: "3"
},
{
    question: "How many acres of land was The University of Texas founded on?",
    choices: ["200 Acres","30 Acres", "40 Acres", "100 Acres"],
    answer: "2"
},
{
    question: "At a football game, what is the proper answer to 'Texas'?",
    choices: ["Go,Go,Go","Fight", "Win", "Beat'em"],
    answer: "1"
},
{
    question: "What is the name of the stadium where the longhorns play football?",
    choices: ["Longhorn Stadium","Littlefield Memorial Stadium", "Mack's House", "Darrell K. Royal Texas Memorial Stadium"],
    answer: "3"
},
{
    question: "The longhorns were Division 1-A Nationalk Champions in all of the following years except:",
    choices: ["1963","1969", "1970", "2006"],
    answer: "3"
},
{
    question: "What is the name of the famous longhorn hand-sign?",
    choices: ["High-horns", "Points-up","Hook'em Horns", "Bevo"],
    answer: "2"


}];

var count=0;
var correctAnswers= 0;
var incorrectAnswers= 0;
var userGuess= 0;


//define functions
function startTrivia (){
    $("#start").hide();
    displayQuestion ();
    displayAnswers ();
    $(".button").show();
    $("#question").show();
  //var showQuestion= setInterval(nextQuestion, 2000);
}

function displayQuestion (){
    $("#question").text(trivia[count].question)
};

function displayAnswers (){
    $(".buttonA").text(trivia[count].choices[0]);
    $(".buttonB").text(trivia[count].choices[1]);
    $(".buttonC").text(trivia[count].choices[2]);
    $(".buttonD").text(trivia[count].choices[3]);
};



//start trivia
$("#question").hide();
$(".button").hide();
$("#start").on("click", function (){
    console.log("start game")
    startTrivia ();
});

$(".button").on("click", function(){
    userGuess = $(this).attr("id");
    console.log ("User Guess: :", userGuess);
if (userGuess === trivia[count].answer){
    alert = ("Correct!");
    correctAnswers++;
    count++;
    displayQuestion ();
    displayAnswers ();
}
else if (!userGuess === trivia[count].answer) {
    alert = ("Incorrect! The correct answer was " + trivia[count].answer + ".");
    incorrectAnswers++;
    count++;
    displayQuestion ();
    displayAnswers ();
}
//else {
    
//}

});



        

//});

 });