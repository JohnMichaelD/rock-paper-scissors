let rockElem = document.querySelector('.rock');
let paperElem = document.querySelector('.paper');
let scissorsElem = document.querySelector('.scissors');

let rock;
let paper;
let scissors;

let playerSelection;
let computerSelection;
let computerWins = 0;
let playerWins = 0;

game();
playRound(playerSelection, computerSelection);
playerPlay();
computerPlay();

// computer randomly chooses rock, paper, or scissors
function computerPlay() {
        computer = Math.floor(Math.random() * 3) + 1;
        if (computer == 1) {
            return computerSelection = "rock";
        } else if (computer == 2) {
            return computerSelection = "paper";
        } else if (computer == 3) {
            return computerSelection = "scissors";
        } else {
            return console.log("error");
        }
} console.log("Computer chose " + computerSelection)

//listen for player input, return choice
function playerPlay() {
    rockElem.addEventListener('click', () => {
        playerSelection = "rock";
        console.log("Player chose " + playerSelection);
        game(playerSelection);
    })
    paperElem.addEventListener('click', () => {
        playerSelection = "paper";
        console.log("Player chose " + playerSelection);
        game(playerSelection);
    })
    scissorsElem.addEventListener('click', () => {
        playerSelection = "scissors";
        console.log("Player chose " + playerSelection);
        game(playerSelection);
    })
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("it's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Player Wins with rock!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Player Wins with paper!")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Player Wins with scissors!");
    }
}


// compare the results for each round, maybe switch 
function game() {
    for (let i = 0; i < 5; i++) {
        console.log("pick rock, paper, or scissors")
        playRound(playerSelection, computerSelection);
    }
};


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

