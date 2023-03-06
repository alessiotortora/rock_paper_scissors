let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let computer = choices[random];
  return computer;
}

function playRound(playerSelection, computerSelection) {
  player = playerSelection.toLowerCase();
  computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "Nobody wins";
  } else if ((player === "rock") && (computer === "paper")) {
    return "You lose! paper beats rock";
  } else if ((player === "paper") && (computer === "scissors")) {
    return "You lose! scissors beats paper";
  } else if ((player === "scissors") && (computer === "rock")) {
    return "You lose! rock beats scissors";
  } else {
    return "You win!!";
  }
}

function game() {
    for(let i = 0; i < 5; i++){
    let playerSelection = prompt('rock, paper, or scissors?')
  
    let computerSelection = getComputerChoice();
    
    let result = playRound(playerSelection, computerSelection);
    console.log(result)
    }  
}


game()

