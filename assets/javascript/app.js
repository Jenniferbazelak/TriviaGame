
var index = 0;
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
        displayAnswers();
        $(".button").show();
        $("#question").show();
        $("#time").show();
        $("#counter").text(counter + "seconds");
        $("#counter").show();
        $(".card").show();
        $(".card-img-top").attr("src",trivia[index].picture)
        timer();
    }

    function displayQuestion() {
        $("#question").text(trivia[index].question)
    };

    function displayAnswers() {
        $("#A").text(trivia[index].choices[0]);
        $("#B").text(trivia[index].choices[1]);
        $("#C").text(trivia[index].choices[2]);
        $("#D").text(trivia[index].choices[3]);
    };

    function timer() {
        clock= setInterval(countdown, 2000);
        function countdown() {
            if (counter >0){
                counter--;
                $("#counter").text(counter + "seconds");
            }
            else {
                //time is up in card for a few seconds

                clearInterval(clock);
            }
    }}

    function endGame() {
        $("#question").hide();
        $(".button").hide();
        alert("Trivia Game Complete!");
        ("#start").text("Replay")
        ("#start").show()
    }

    
    function nextQuestion(){
        displayQuestion();
        displayAnswers();
        $(".card-img-top").attr("src",trivia[index].picture)
        $(".card-title").hide();
        counter=20 + "seconds";
        timer();
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
        if (counter === 0){
            //timesUp();
        }
        else if (index === trivia.length + 1) {
            endGame();
        }
        else if (userGuess === trivia[index].answer) {
            $(".card-title").text("CORRECT!")
            $(".card-title").show();
            //need to hide question and let the "correct" message linger for a bit
            correctAnswers++;
            index++;
            nextQuestion();
            
        }
        else if (userGuess !== trivia[index].answer) {
            $("#card-title").text("INCORRECT! The correct answer was " + trivia[index].answer + ".");
            $(".card-title").show();
            incorrectAnswers++;
            index++;
            nextQuestion();
        }
        


    });


});