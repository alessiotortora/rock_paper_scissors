let choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const restartButton = document.createElement("button");
restartButton.textContent = "Restart Game";
restartButton.style.display = "none";
document.body.appendChild(restartButton);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let computer = choices[random];
  return computer;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Nobody wins";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! rock beats scissors";
  } else {
    playerScore++;
    return "You win!!";
  }
}

function game(e) {
  let playerSelection = e.target.id;
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  let resultDiv = document.getElementById("results-container");
  resultDiv.textContent = result;

  player.textContent = `Player: ${playerScore}`;
  computer.textContent = `Computer: ${computerScore}`;
  checkScore();
}

function checkScore() {
  if (playerScore === 5) {
    endGame("You beat me!");
  } else if (computerScore === 5) {
    endGame("You lost, try again");
  }
}

function endGame(message) {
  div.textContent = message;
  restartButton.style.display = "block";
  buttons.forEach((button) => {
    button.removeEventListener("click", game);
  });
  restartButton.addEventListener("click", restartGame);
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  player.textContent = `Player: ${playerScore}`;
  computer.textContent = `Computer: ${computerScore}`;
  div.textContent = "";
  restartButton.style.display = "none";
  buttons.forEach((button) => {
    button.addEventListener("click", game);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", game);
});
