let randomNumber = Math.floor(Math.random() * 100 + 1);
let inputValue = document.querySelector(".inputs-Values").value;
let triesOutput = document.querySelector(".tries-output");
let outputResult = document.createElement("h3");
let triesResult = document.createElement("p");

outputResult.innerText = "What you guessin'?";

let triesCounter = 0;
let fixedTries = 10;
triesResult.innerText = "You have " + fixedTries + " tries left";


triesOutput.appendChild(outputResult);
triesOutput.appendChild(triesResult);



function guessNumber() {
  fixedTries--;
  //Collect input from the user
  // let guess = document.querySelector(".inputs-Values").value;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
let guess = document.querySelector(".inputs-Values").value;
  if (fixedTries > 0) {
    if (guess > 100 || guess <= 0) {
      outputResult.innerText = "Please enter a number between 1 and 100";
      guess.value = "";
      triesResult.innerText = "You have " + fixedTries + " tries left";

    } else {


      if (guess > randomNumber) {
        outputResult.innerText = "Number is too high, try again";
        guess.value = "";
        triesResult.innerText = "You have " + fixedTries + " tries left";

      } else if (guess < randomNumber) {
        outputResult.innerText = "Number is too low, try again";
        guess.value = "";
        triesResult.innerText = "You have " + fixedTries + " tries left";

      } else if (guess = randomNumber) {
        outputResult.innerText = randomNumber + " - Guess is correct. You win!";
        guess.value = "";
        // triesResult.innerText = "You have " + fixedTries + " tries left";

      }
    
    }
  } else { 

    outputResult.innerText = "You Lose, the number was " + randomNumber;
    guess.value = "";
    triesResult.innerText = "You have no tries left. Go home.";


  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset randomNumber
  let inputValue = document.querySelector(".inputs-Values");
  inputValue.value = "";
  outputResult.innerText = "New Game!";

  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
