//GRABBING OUR BUTTON WITH THE ID OF "START" FROM OUR HTML
var start = document.getElementById('start');
// GRABBING OUT DIC WITH THE ID OF "SCORES" FROM OUT HTML
var scores = document.getElementById('scores');

// DEFINING THE BASE VALUES OF OUR WINS AND LOSSES
var losses = 0;
var wins = 0;

// HERE WE ARE CREATING AND APPENDING AN H1 ELEMENT TO KEEP TRACK OF LOSSES
var h1Loss = document.createElement("h1");
scores.append(h1Loss);

// HERE WE ARE CREATING AND APPENDING AN H1 ELEMENT TO KEEP TRACK OF WINS
var h1Win = document.createElement("h1");
scores.append(h1Win);

function startGame() {
    // PROMPTS USERS TO INPUT R, P, S. WE MAKE IT A VARIABLE SO WE CAN CALL ITS VALUE LATER
    var userInput = window.prompt("Rock (R), Paper (P), or Scissors (S)?");

    // ARRAY THAT DEFINES COMPUTER CHOICES
    var choices = ["R", "P", "S"];
    // BUILT-IN FUNCTION THAT RANDOMIZES COMPUTER CHOICE
    var random = Math.floor(Math.random() * choices.length);
    // VAR RANDOM RETURNS A RANDOM NUMBER, SO WE USE THAT NUMBER TO CHOOSE A RANDOM ARRAY SPOT IN THE CHOICES ARRAY
    var compChoice = choices[random];

    // CONDITIONAL STATEMENTS TO DECIDE OUTCOMES FOR USER INPUT ROCK
    if ((userInput === "R") && (compChoice === "R")) {
        console.log("You chose rock and computer chose rock. Tie!");
        window.confirm("You chose rock and computer chose rock. Tie!");
    } else if ((userInput === "R") && (compChoice === "P")) {
        console.log("Computer chose paper and wins!");
        window.confirm("Computer chose paper and wins!");
        // LOSS COUNTER WILL GO UP BY 1
        losses++;
        // SETTING THE TEXT CONTENT OF THE LOSS H1 TAG TO CURRENT NUMBER OF LOSSES
        h1Loss.textContent = "Losses: " + losses;

    } else if ((userInput === "R") && (compChoice === "S")) {
        console.log("You chose rock and computer chose scissors. You win!");
        window.confirm("You chose rock and computer chose scissors. You win!");
        // WIN COUNTER WILL GO UP BY 1
        wins++;
        //SETTING THE TEXT CONTENT OF THE WIN H1 TAG TO CURRENT NUMBER OF WINS
        h1Win.textContent = "Wins: " + wins;
    };

    // CONDITIONAL STATEMENTS TO DECIDE OUTCOMES FOR USER INPUT PAPER
    if ((userInput === "P") && (compChoice === "R")) {
        console.log("You chose paper and computer chose rock. You win!");
        window.confirm("You chose paper and computer chose rock. You win!");
        // WIN COUNTER WILL GO UP BY 1
        wins++;
        //SETTING THE TEXT CONTENT OF THE WIN H1 TAG TO CURRENT NUMBER OF WINS
        h1Win.textContent = "Wins: " + wins;
    } else if ((userInput === "P") && (compChoice === "P")) {
        console.log("You chose paper and computer chose paper. Tie!");
        window.confirm("You chose paper and computer chose paper. Tie!");
    } else if ((userInput === "P") && (compChoice === "S")) {
        console.log("Computer chose scissors and wins!");
        window.confirm("Computer chose scissors and wins!");
        // LOSS COUNTER WILL GO UP BY 1
        losses++;
        // SETTING THE TEXT CONTENT OF THE LOSS H1 TAG TO CURRENT NUMBER OF LOSSES
        h1Loss.textContent = "Losses: " + losses;
    };

    // CONDITIONAL STATEMENTS TO DECIDE OUTCOMES FOR USER INPUT SCISSORS
    if ((userInput === "S") && (compChoice === "R")) {
        console.log("Computer chose rock and wins!");
        window.confirm("Computer chose rock and wins!");
        // LOSS COUNTER WILL GO UP BY 1
        losses++;
        // SETTING THE TEXT CONTENT OF THE LOSS H1 TAG TO CURRENT NUMBER OF LOSSES
        h1Loss.textContent = "Losses: " + losses;
    } else if ((userInput === "S") && (compChoice === "P")) {
        console.log("You chose scissors and computer chose paper. You win!");
        window.confirm("You chose scissors and computer chose paper. You win!");
        // WIN COUNTER WILL GO UP BY 1
        wins++;
        //SETTING THE TEXT CONTENT OF THE WIN H1 TAG TO CURRENT NUMBER OF WINS
        h1Win.textContent = "Wins: " + wins;
    } else if ((userInput === "S") && (compChoice === "S")) {
        console.log("You chose scissors and computer chose scissors. Tie!");
        window.confirm("You chose scissors and computer chose scissors. Tie!");
    }

    // PROMPTS USER ON IF THEY WANT TO PLAY AGAIN
    var playAgain = window.prompt("Play again? (Y) or (N)")

    // IF USER SELECTS "Y", WILL RERUN OUR GAME FUNCTION
    if (playAgain === "Y") {
        startGame();
        // IF USER SELECTS "N", WILL EXIT OUT OF FUNCTION
    } else {
        return;
    }

};

// OUR BUTTON ON HTML WITH ID OF "START", IF CLICKED ON, WILL START OUR GAME
start.addEventListener('click', startGame);
