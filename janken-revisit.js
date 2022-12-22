// Define Score
let playerScore = 0;
let computerScore = 0;
const player = document.querySelector(".player-points");
const computer = document.querySelector(".cpu-points");
const roundResult = document.querySelector(".round-result");
const matchResult = document.querySelector(".match-result");

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const options = ["rock", "paper", "scissors"];

rockButton.addEventListener("click", () => {
  playRound("rock", computerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("paper", computerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerChoice());
});

//Computer's Random Choice
function computerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// Single Round Loop
function playRound(playerChoice, computerChoice) {
  if (playerScore < 5 && computerScore < 5) {
    if (playerChoice == computerChoice) {
      roundResult.textContent = "Tie!";
    } else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "scissors" && computerChoice == "paper") ||
      (playerChoice == "paper" && computerChoice == "rock")
    ) {
      playerScore++;
      player.textContent = playerScore;
      roundResult.textContent = "You Win!";
    } else if (
      (computerChoice == "rock" && playerChoice == "scissors") ||
      (computerChoice == "scissors" && playerChoice == "paper") ||
      (computerChoice == "paper" && playerChoice == "rock")
    ) {
      computerScore++;
      computer.textContent = computerScore;
      roundResult.textContent = "You Win!";
    }
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore == 5) {
        matchResult.textContent = "Player Wins the Game!";
      } else if (computerScore == 5) {
        matchResult.textContent = "Computer Wins the Game!";
      }
      resetButton.style.display = "block";
    }
  }
}

// Reset Button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  player.textContent = playerScore;
  computer.textContent = computerScore;
  roundResult.textContent = "";
  matchResult.textContent = "";
  resetButton.style.display = "none";
});
