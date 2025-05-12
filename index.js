// Function to get user input and handle case sensitive inputs
function getHumanChoice() {
  const userInput = prompt("Type Rock, Paper, or Scissors to play: ").toLowerCase();

  return userInput;
}

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

// Function to play the game
function playGame(){
    let userScore = 0;
    let computerScore = 0;

    // Function to choose a winner
    function playRound(humanChoice, machineChoice) {
        let output = "";

        if (humanChoice == "rock" && machineChoice == "paper") {
            computerScore = computerScore + 1;
            output = `You lose! ${machineChoice} beats ${humanChoice}.`;
        }else if (humanChoice == "paper" && machineChoice == "rock"){
            userScore = userScore + 1;
            output = `You win! ${humanChoice} beats ${machineChoice}.`;
        }else if (humanChoice == "rock" && machineChoice == "scissors"){
            userScore = userScore + 1;
            output = `You win! ${humanChoice} beats ${machineChoice}.`;
        }else if (humanChoice == "scissors" && machineChoice == "rock"){
            computerScore = computerScore + 1;
            output = `You lose! ${machineChoice} beats ${humanChoice}.`;
        }else if (humanChoice == "paper" && machineChoice == "scissors"){
            computerScore = computerScore + 1;
            output = `You lose! ${machineChoice} beats ${humanChoice}.`;
        }else if (humanChoice == "scissors" && machineChoice == "paper"){
            userScore = userScore + 1;
            output = `You win! ${humanChoice} beats ${machineChoice}.`;
        }else if (humanChoice == machineChoice){
          output = `It's a draw, ${humanChoice} and ${machineChoice} are same types.`;
        }else {
          output = `You might have typed wrong input, try again.`;
        }
        return {userScore, computerScore, output};
      }

      // Loop to play 5 rounds
      for (i = 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let machineChoice = getComputerChoice();
        let result = playRound(humanChoice, machineChoice);

        // Update game scores
        userScore = result.userScore;
        computerScore = result.computerScore;
        let roundStatus = result.output;

        // Show round status and scores
        console.log(`Current Score: User - ${userScore}, Computer - ${computerScore}`);
        console.log(roundStatus);
      }

      // Show overall result
      if (userScore > computerScore){
        console.log(`You won! Your score is ${userScore}.`);
      }else if (userScore == computerScore){
        console.log(`It's a draw. Scores are You(${userScore}), Computer(${computerScore})`);
      }else {
        console.log(`You lose! Your score is ${userScore}.`);
      }
}

// Play game
playGame();