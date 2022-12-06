// Have 3 choices
const options = ["rock", "paper", "scissors"];

//--------------------------------------------
// Your game is going to play against the computer,
// so begin with a function called getComputerChoice
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play.
//--------------------------------------------
// Computer randomly chooses options
// Need to have a result for option to go to [2]
// 0 being rock, 1 being paper, and 2 being scissors
// Math.random() randomly chooses between 0 and .999
// But that is still only gives off Rock but may not
// Because Rock has to be exactly 0
// If I round down with Math.floor it will give me exactly 0
// Math.floor(Math.random()) will equal 0
// Need to somehow get at least 2.
// I can use options.length to get 3 since options has 3 items in the array
// If I use options.length with Math.random it will give me up to 2.999
// Math.random() * options.length will equal at max 2.99999
// combining all Math.floor(Math.random() * options.length) will at max be 2
// options[0], options[1], and options[2] is now possible
// return choice will output the selection from the 'options' array

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

//-----------------------------------------------------------------------
// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and
// computerSelection - and then return a string that declares the
// winner of the round like so: "You Lose! Paper beats Rock"
//-----------------------------------------------------------------------
// Functions a playRound for a single round
// I need two parameter which is after you create a name for the function
// Argument the actual input where it goes in the matching parameter name
// and the playerSelection and computerSelection is the paramater for playRound
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}

//Write a NEW function called game(). Call the playRound function
//inside of this one to play a 5 round game that keeps score and
//reports a winner or loser at the end.
//-----------------------------------------------------------------------

function game() {
  // Define Initial Score
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result.includes("win")) {
      playerScore++;
    }
    if (result.includes("lose")) {
      computerScore++;
    }

    console.log(result);
  }


