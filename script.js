function playRound(player, computer) {
  if (player === computer) {
    console.log("Draw");
    return "Draw";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    console.log("Player Wins!");
    return "Player Wins!";
  } else if (
    (computer === "Rock" && player === "Scissors") ||
    (computer === "Paper" && player === "Rock") ||
    (computer === "Scissors" && player === "Paper")
  ) {
    console.log("Computer Wins!");
    return "Computer Wins!";
  }
}

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}
