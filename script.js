let rockElem = document.querySelector('.rock');
let paperElem = document.querySelector('.paper');
let scissorsElem = document.querySelector('.scissors');

let rock = 1;
let paper = 2;
let scissors = 3;

let playerSelection = "rock";
let computerSelection;
let computerWins = 0;
let playerWins = 0;

computerPlay();
playerPlay();
compareSelections(playerSelection, computerSelection);

// computer randomly chooses rock, paper, or scissors
function computerPlay() {
        computer = Math.floor(Math.random() * 3) + 1;
        if (computer == 1) {
            computerSelection = "rock";
        } else if (computer == 2) {
            computerSelection = "paper";
        } else if (computer == 3) {
            computerSelection = "scissors";
        } else {
            return 4;
        }
    console.log("Computer chose " + computerSelection)
}

//listen for player input, return choice
function playerPlay() {
    rockElem.addEventListener('click', () => {
        playerSelection = "rock";
        compareSelections();
        console.log("Player chose " + playerSelection)
    })
    paperElem.addEventListener('click', () => {
        playerSelection = "paper";
        console.log("Player chose " + playerSelection)
    })
    scissorsElem.addEventListener('click', () => {
        playerSelection = "scissors";
        console.log("Player chose " + playerSelection)
    })
}


// compare the results for each round, maybe switch 
function compareSelections(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return console.log("it's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return console.log("Player Wins with rock!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return console.log("Player Wins with paper!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return console.log("Player Wins with scissors!");
    }
}

console.log(compareSelections(playerSelection, computerSelection));


// PSEUDOCODE
// function computerPlay will randomly return 'rock', 'paper', or 'scissors'
    // let rock = 1
    // let paper = 2
    // let scissors = 3
    // let computer = math.floor, math.random * 3 + 1
        // if computer = 1,
            // return rock
        // else if computer = 2
            // return paper
        // else computer = 3
            // return scissors 
        
// function 

