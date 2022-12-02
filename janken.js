// Have 3 choices
const options = ["rock", "paper", "scissors"];

//--------------------------------------------
//Your game is going to play against the computer, 
//so begin with a function called getComputerChoice
//that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
//We’ll use this function in the game to make the computer’s play. 
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

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice
}