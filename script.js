let rockElem = document.querySelector('.rock');
let paperElem = document.querySelector('.paper');
let scissorsElem = document.querySelector('.scissors');

let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let winner;


function updateScore() {
    computerWins = 0;
    playerWins = 0;
    return playerWins, computerWins;
}


function winnerResult(playerWins, computerWins) {
    if (playerWins >= 5) {
        console.log("Player has won first! Play again?");
        updateScore();
    } else if (computerWins >= 5) {
        console.log("Computer has beat you! Play again?");
        updateScore();
    } else {
        return 0;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("This round is a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Player wins this round with rock!");
        playerWins++;
        console.log(playerWins);
        return winnerResult(playerWins, computerWins);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Player wins this round with paper!")
        playerWins++;
        console.log(playerWins);
        return winnerResult(playerWins, computerWins);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Player wins this round with scissors!");
        playerWins++;
        console.log(playerWins);
        return winnerResult(playerWins, computerWins);
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
        console.log("Computer wins this round with rock!");
        computerWins++;
        console.log(computerWins);
        return winnerResult(playerWins, computerWins);
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        console.log("Computer wins this round with paper!");
        computerWins++;
        console.log(computerWins);
        return winnerResult(playerWins, computerWins);
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        console.log("Computer wins this round with scissors!");
        computerWins++;
        console.log(computerWins);
        return winnerResult(playerWins, computerWins);
    } 
}

// computer randomly chooses rock, paper, or scissors when called, updates
function computerPlay() {
    computer = Math.floor(Math.random() * 3) + 1;
    if (computer == 1) {
        console.log("computer chose rock");
        computerSelection = "rock";
        playRound(playerSelection, computerSelection);
    } else if (computer == 2) {
        console.log("computer chose paper");
        computerSelection = "paper";
        playRound(playerSelection, computerSelection);
    } else if (computer == 3) {
        console.log("computer chose scissors");
        computerSelection = "scissors";
        playRound(playerSelection, computerSelection);
    } else {
        return console.log("computerSelection error");
    }
} 

rockElem.addEventListener('click', () => {
    playerSelection = "rock";
    console.log("Player chose " + playerSelection);
    computerPlay();
})
paperElem.addEventListener('click', () => {
    playerSelection = "paper";
    console.log("Player chose " + playerSelection);
    computerPlay();
})
scissorsElem.addEventListener('click', () => {
    playerSelection = "scissors";
    console.log("Player chose " + playerSelection);
    computerPlay();
})