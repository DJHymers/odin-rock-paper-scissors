console.log("<======= Rock Paper Scissors! =======>");

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

const computerChoice = getComputerChoice();
const playerChoice = "Rock";

function play(playerChoice, computerChoice) {
  if (computerChoice === "Rock") {
    return "Draw";
  } else if (computerChoice === "Paper") {
    return "Computer wins!";
  } else if (computerChoice === "Scissors") {
    return "Player wins!";
  } else {
    return "Please pick a valid choice";
  }
}

console.log(play(playerChoice, computerChoice));
