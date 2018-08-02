
var index = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var userGuess = 0;
// var counter = 20;
var clock;
var anseringQuestion= true;

$(document).ready(function () {
    // set variables
    var trivia = [
        {
            question: "What is the name of the cannon shot every time the Longhorns score a touchdown?",
            choices: ["A: Bevo the Cannon", "B: Bertha the Cannon", "C: Smokey The Cannon", "D: The Cannon"],
            answer: "C",
            picture:"assets/images/cannon.jpg"
        },
        {
            question: "Which of the following is not a UT alumni?",
            choices: ["A: Matthew MCConaughey", "B: Rick Perry", "C: Kevin Durant", "D: Wes Anderson"],
            answer: "B",
            picture:"assets/images/Matthew-McC.jpg"
            
        },
        {
            question: "What is the name of the school mascot?",
            choices: ["A: Bevo", "B: Bertha", "C: Mr.Longhorn", "D: Buddy"],
            answer: "A",
            picture:"assets/images/bevo.jpg"
        },
        {
            question: "What is the name of the school song?",
            choices: ["A: Texas,Texas", "B: Gabriel", "C: The Eyes of Texas", "D: Longhorn Pride"],
            answer: "C",
            picture:"assets/images/eyesoftexas.jpg"
        },
        {
            question: "What are the school colors?",
            choices: ["A: Orange and White", "B: Maroon and White", "C: Red and Black", "D: Burnt-Orange and White"],
            answer: "D",
            picture:"assets/images/colors.jpg"
        },
        {
            question: "How many acres of land was The University of Texas founded on?",
            choices: ["A: 200 Acres", "B: 30 Acres", "C: 40 Acres", "D: 100 Acres"],
            answer: "C",
            picture:"assets/images/fortyacres.gif"
        },
        {
            question: "At a football game, what is the proper answer to 'Texas'?",
            choices: ["A: Go,Go,Go", "B: Fight", "C: Win", "D: Beat'em"],
            answer: "B",
            picture:"assets/images/texasfight.jpeg"
        },
        {
            question: "What is the name of the stadium where the Longhorns play football?",
            choices: ["A: Longhorn Stadium", "B: Littlefield Memorial Stadium", "C: Mack's House", "D: Darrell K. Royal Texas Memorial Stadium"],
            answer: "D",
            picture:"assets/images/stadium.jpeg"
        },
        {
            question: "The longhorns were Division 1-A National Champions in all of the following years except:",
            choices: ["A: 1963", "B: 1969", "C: 1970", "D: 2006"],
            answer: "D",
            picture:"assets/images/champions.jpg"
        },
        {
            question: "What is the name of the famous longhorn hand-sign?",
            choices: ["A: High-horns", "B: Points-up", "C: Hook'em Horns", "D: Bevo"],
            answer: "C",
            picture:"assets/images/hook.jpg"


        }];



    //define functions
    function startTrivia() {
        $("#start").hide();
        displayQuestion();
        $(".button").show();
        $("#question").show();
        $("#time").show();
        $("#counter").text(counter + "seconds");
        $("#counter").show();
        $(".card").show();
        $(".card-img-top").attr("src",trivia[index].picture)
        timer(10);
    }

    function displayQuestion() {
        if (index < trivia.length) {
        $("#question").text(trivia[index].question)
        $("#A").text(trivia[index].choices[0]);
        $("#B").text(trivia[index].choices[1]);
        $("#C").text(trivia[index].choices[2]);
        $("#D").text(trivia[index].choices[3]);
        $(".card-img-top").attr("src",trivia[index].picture)
        $(".card-title").hide();
        timer(10);
        answeringQuestion= true;
        }
        else{
            //gameover hide everything and show results
        }
    };

    function timer(x) {
        var counter = x;
        clock= setInterval(countdown, 1000);
        function countdown() {
            counter--;
            $("#counter").text(counter + "seconds");
            if (counter === 0){
                if(answeringQuestion= true)
                {
                    clearInterval(clock);
                    timesUp();
                }
            else{
                clearInterval(clock);
                displayQuestion();
            }
            }
    }}

    function endGame() {
        $("#question").hide();
        $(".button").hide();
        alert("Trivia Game Complete!");
        ("#start").text("Replay")
        ("#start").show()
    }

    function timesUp(){
        $("#question").hide();
        $(".card-title").text("Time's up!")
        $(".card-title").show();
        timer(5);
        answeringQuestion= false;
        displayQuestion();
    }

    function answerCorrect(){
        $("#question").hide();
        $(".card-title").text("Correct!")
        $(".card-title").show();
        timer(5);
        answeringQuestion= false;
        displayQuestion();
    }
    function answerIncorrect(){
        $("#question").hide();

        $(".card-title").text("Incorrect!")
        $(".card-title").show();
        timer(5);
        answeringQuestion= false;
        displayQuestions();

    }
    



    //start trivia
    $(".card").hide();
    $("#time").hide();
    $("#counter").hide();
    $("#question").hide();
    $(".button").hide();
    $("#start").on("click", function () {
        console.log("start game")
        startTrivia();
    });

    $(".button").on("click", function () {
        userGuess = $(this).attr("id");
        console.log("User Guess: " + userGuess);
         if (userGuess === trivia[index].answer) {
            answerCorrect();
            clearInterval(clock);
            correctAnswers++;
            index++;
        }
        else if (userGuess !== trivia[index].answer) {
            answerIncorrect();
            incorrectAnswers++;
            index++;
            clearInterval(clock);  
        }
        


    });


});