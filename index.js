const buttons = document.querySelectorAll("button");
const announcement = document.querySelector("#announcement");
const uScore = document.querySelector("#uScore");
const cScore = document.querySelector("#cScore");

// Store scores
let userScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

// Function to get a random choice
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";
  if (randomChoice == 1) {
    computerChoice = "rock";
  } else if (randomChoice == 2) {
    computerChoice = "paper";
  } else if (randomChoice == 3) {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// Function to choose a winner
function playRound(humanChoice, machineChoice) {
  if (humanChoice == "rock" && machineChoice == "paper") {
    computerScore = computerScore + 1;
    announcement.textContent = `You lose! ${machineChoice} beats ${humanChoice}.`;
  } else if (humanChoice == "paper" && machineChoice == "rock") {
    userScore = userScore + 1;
    announcement.textContent = `You win! ${humanChoice} beats ${machineChoice}.`;
  } else if (humanChoice == "rock" && machineChoice == "scissors") {
    userScore = userScore + 1;
    output = `You win! ${humanChoice} beats ${machineChoice}.`;
  } else if (humanChoice == "scissors" && machineChoice == "rock") {
    computerScore = computerScore + 1;
    announcement.textContent = `You lose! ${machineChoice} beats ${humanChoice}.`;
  } else if (humanChoice == "paper" && machineChoice == "scissors") {
    computerScore = computerScore + 1;
    announcement.textContent = `You lose! ${machineChoice} beats ${humanChoice}.`;
  } else if (humanChoice == "scissors" && machineChoice == "paper") {
    userScore = userScore + 1;
    announcement.textContent = `You win! ${humanChoice} beats ${machineChoice}.`;
  } else if (humanChoice == machineChoice) {
    announcement.textContent = `It's a draw, ${humanChoice} and ${machineChoice} are same types.`;
  } else {
    announcement.textContent = `You might have typed wrong input, try again.`;
  }
  return announcement.textContent;
}

// Loop for selecting the clicked button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    const humanChoice = event.target.value;

    // When clicked on button, computer choice also gets generated
    const machineChoice = getComputerChoice();

    // When clicked the button, button value is compared to computer generated choice and game is played
    playRound(humanChoice, machineChoice);
    uScore.textContent = userScore;
    cScore.textContent = computerScore;

    if(userScore == MAX_SCORE && computerScore < MAX_SCORE){
      announcement.textContent = "Game Over! You Won!";
      userScore = 0;
      computerScore = 0;
    }else if(computerScore == MAX_SCORE && userScore < MAX_SCORE){
      announcement.textContent = "Game Over! You Lose!";
      userScore = 0;
      computerScore = 0;
    }
  });
}