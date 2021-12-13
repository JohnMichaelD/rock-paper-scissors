let rockElem = document.querySelector('.rock');
let paperElem = document.querySelector('.paper');
let scissorsElem = document.querySelector('.scissors');

//listen for player input, return choice
function playerPlay() {
    rockElem.addEventListener('click', () => {
        playerSelection = "rock";
        console.log("Player chose " + playerSelection);
        computerPlay();
        return playerSelection;
    })
    paperElem.addEventListener('click', () => {
        playerSelection = "paper";
        console.log("Player chose " + playerSelection);
        computerPlay();
        return playerSelection;
    })
    scissorsElem.addEventListener('click', () => {
        playerSelection = "scissors";
        console.log("Player chose " + playerSelection);
        computerPlay();
        return playerSelection;
    })
}

// computer randomly chooses rock, paper, or scissors
function computerPlay() {
    computer = Math.floor(Math.random() * 3) + 1;
    if (computer == 1) {
        console.log("computer chose rock");
        return computerSelection = "rock";
    } else if (computer == 2) {
        console.log("computer chose paper");
        return computerSelection = "paper";
    } else if (computer == 3) {
        console.log("computer chose scissors");
        return computerSelection = "scissors";
    } else {
        return console.log("computerSelection error");
    }
} 












// run game & iterate five times,
function game() {
    let playerSelection;
    let computerSelection;
    let computerWins = 0;
    let playerWins = 0;
    let outcome = "test";

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock") {
            console.log("it's a tie!");
            return outcome = "it's a tie!";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log("Player Wins with rock!");
            return outcome = "Player Wins with rock!";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("Player Wins with paper!")
            return outcome = "Player Wins with paper!";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("Player Wins with scissors!");
            return outcome = "Player Wins with scissors!";
        } else if (computerSelection == "rock" && playerSelection == "scissors"){
            console.log("Computer Wins with Rock!");
            return outcome = "Computer Wins with Rock!";
        } else if (computerSelection == "paper" && playerSelection == "rock"){
            console.log("Computer Wins with Paper!");
            return outcome = "Computer Wins with Paper!";
        } else if (computerSelection == "scissors" && playerSelection == "paper"){
            console.log("Computer Wins with Scissors!");
            return outcome = "Computer Wins with Scissors!";
        } 
    } 

    /*console.log("Welcome, pick rock, paper, or scissors");
    for (let i = 0; i < 5; i++) {
        playerPlay();
        return playRound(outcome);
    } console.log(outcome);*/
};

game();




















/*

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
let outcome;

game();
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
            return console.log("computerSelection error");
        }
}  console.log("Computer chose " + computerSelection)

//listen for player input, return choice
function playerPlay() {
    rockElem.addEventListener('click', () => {
        playerSelection = "rock";
        console.log("Player chose " + playerSelection);
        return playerSelection;
    })
    paperElem.addEventListener('click', () => {
        playerSelection = "paper";
        console.log("Player chose " + playerSelection);
        return playerSelection;
    })
    scissorsElem.addEventListener('click', () => {
        playerSelection = "scissors";
        console.log("Player chose " + playerSelection);
        return playerSelection;
    })
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("it's a tie!");
        return outcome = "it's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Player Wins with rock!");
        return outcome = "Player Wins with rock!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Player Wins with paper!")
        return outcome = "Player Wins with paper!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Player Wins with scissors!");
        return outcome = "Player Wins with scissors!";
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
        console.log("Computer Wins with Rock!");
        return outcome = "Computer Wins with Rock!";
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        console.log("Computer Wins with Paper!");
        return outcome = "Computer Wins with Paper!";
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        console.log("Computer Wins with Scissors!");
        return outcome = "Computer Wins with Paper!";
    } 
} 

// compare the results for each round, maybe switch 
function game() {
    console.log("pick rock, paper, or scissors");
    for (let i = 0; i < 5; i++) {
        return playRound(playerSelection, computerSelection);
    } 
};

*/
