console.log("<======= Rock Paper Scissors! =======>");

function getComputerChoice(playerChoice) {
  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

console.log(getComputerChoice());