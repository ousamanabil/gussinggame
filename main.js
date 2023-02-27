// game Varible
let mysteryNumber = Math.ceil(Math.random() * 100);

let playerGuess = 0;

let guessesRemaining = 10;

let guessesMade = 0;

let gameStatus = "";

let gameWon = false;

// input and output field

let input = document.getElementById("input");
let output = document.getElementById("output");

// button
let button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
window.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(event) {
  if (event.keyCode === 13) {
  validateInput();
  }
}

let arrow = document.querySelector("#aroow");

function render(){
  arrow.style.left = playerGuess * 6.3 + "px";
  
}


function clickHandler() {
validateInput();
}
function validateInput() {
  playerGuess = parseInt(input.value);
  
  if(isNaN(playerGuess)){
    output.innerHTML = "Please enter a number";

  }else{
    playGame();
  }
}

function playGame() {
  guessesRemaining = guessesRemaining - 1;
  guessesMade = guessesMade + 1;
  gameStatus = "Guess: " + guessesMade + ", Remaining: " + guessesRemaining;

  if (playerGuess > mysteryNumber) {
    output.innerHTML = "Too High " + gameStatus;
    if (guessesRemaining < 1) {
      endGame();
    }
  } else if (playerGuess < mysteryNumber) {
    output.innerHTML = "too Low " + gameStatus;

    if (guessesRemaining < 1) {
      endGame();
    }
  } else if (playerGuess === mysteryNumber) {
gameWon = true;
    endGame();
  }
  render();
}
    function endGame() {
        if (gameWon) {
            output.innerHTML
                = "Yes, it's " + mysteryNumber + "!" + "<br>"
                + "It only took you " + guessesMade + " guesses.";
        }
        else {
            output.innerHTML
                = "No more guesses left!" + "<br>"
                + "The number was: " + mysteryNumber + ".";
        }
      button.removeEventListener('click', clickHandler, false);
      button.disabled = true;

      window.removeEventListener("keydown", keyDownHandler, false);

      input.disabled = true;

    }
  


