
var count = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var userGuess = 0;
var counter = 20;
var clock;

$(document).ready(function () {
    // set variables
    var trivia = [
        {
            question: "What is the name of the cannon shot every time the Longhorns score a touchdown?",
            choices: ["A: Bevo the Cannon", "B: Bertha the Cannon", "C: Smokey The Cannon", "D: The Cannon"],
            answer: "C"
        },
        {
            question: "Which of the following is not a UT alumni?",
            choices: ["A: Matthew MCConaughey", "B: Rick Perry", "C: Kevin Durant", "D: Wes Anderson"],
            answer: "B"
        },
        {
            question: "What is the name of the school mascot?",
            choices: ["A: Bevo", "B: Bertha", "C: Mr.Longhorn", "D: Buddy"],
            answer: "A"
        },
        {
            question: "What is the name of the schools song?",
            choices: ["A: Texas,Texas", "B: Gabriel", "C: The Eyes of Texas", "D: Longhorn Pride"],
            answer: "C"
        },
        {
            question: "What are the school colors?",
            choices: ["A: Orange and White", "B: Maroon and White", "C: Red and Black", "D: Burnt-Orange and White"],
            answer: "D"
        },
        {
            question: "How many acres of land was The University of Texas founded on?",
            choices: ["A: 200 Acres", "B: 30 Acres", "C: 40 Acres", "D: 100 Acres"],
            answer: "C"
        },
        {
            question: "At a football game, what is the proper answer to 'Texas'?",
            choices: ["A: Go,Go,Go", "B: Fight", "C: Win", "D: Beat'em"],
            answer: "B"
        },
        {
            question: "What is the name of the stadium where the longhorns play football?",
            choices: ["A: Longhorn Stadium", "B: Littlefield Memorial Stadium", "C: Mack's House", "D: Darrell K. Royal Texas Memorial Stadium"],
            answer: "D"
        },
        {
            question: "The longhorns were Division 1-A National Champions in all of the following years except:",
            choices: ["A: 1963", "B: 1969", "C: 1970", "D: 2006"],
            answer: "D"
        },
        {
            question: "What is the name of the famous longhorn hand-sign?",
            choices: ["A: High-horns", "B: Points-up", "C: Hook'em Horns", "D: Bevo"],
            answer: "C"


        }];



    //define functions
    function startTrivia() {
        $("#start").hide();
        displayQuestion();
        displayAnswers();
        $(".button").show();
        $("#question").show();
        $("#time").show();
        $("#counter").text(counter);
        $("#counter").show();
        timer();
    }

    function displayQuestion() {
        $("#question").text(trivia[count].question)
    };

    function displayAnswers() {
        $("#A").text(trivia[count].choices[0]);
        $("#B").text(trivia[count].choices[1]);
        $("#C").text(trivia[count].choices[2]);
        $("#D").text(trivia[count].choices[3]);
    };

    function timer() {
        clock= setInterval(countdown, 2000);
        function countdown() {
            if (counter >1){
                counter--;
                $("#counter").text(counter + "seconds");
            }
            else {
                alert("Time is up!");
                clearInterval(clock);
            }
    }}

    function endGame() {
        $("#question").hide();
        $(".button").hide();
        alert("Time is out!");
        ("#start").html("Replay")
        ("#start").show()
    }

    function timesUp() {
        $("#time").hide();
        $("#counter").hide();
        $("#question").hide();
        $(".button").hide();

    }
    function nextQuestion(){
        displayQuestion();
        displayAnswers();
        counter=20;
        timer();
    }



    //start trivia
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
        if (count === trivia.length + 1) {
            endGame();
        }
        else if (userGuess === trivia[count].answer) {
            alert("Correct!");
            correctAnswers++;
            count++;
            nextQuestion();
            
        }
        else if (userGuess !== trivia[count].answer) {
            alert("Incorrect! The correct answer was " + trivia[count].answer + ".");
            incorrectAnswers++;
            count++;
            nextQuestion();
        }
        // else if (counter === 0){
        //     timesUp();
        // }

        


    });


});