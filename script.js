let rockElem = document.querySelector('.rock');
let paperElem = document.querySelector('.paper');
let scissorsElem = document.querySelector('.scissors');

let computerSelection;
let playerSelection;
let computerWinCount = 0;
let playerWinCount = 0;
let winner;

//when called, resets scores to 0
function updateScore() {
    computerWinCount = 0;
    playerWinCount = 0;
    return playerWinCount, computerWinCount;
}

//compares the scores, first to 5 wins, calls updateScore function
function winnerResult(playerWins, computerWinCount) {
    if (playerWinCount >= 5) {
        console.log("Player has won first! Play again?");
        updateScore();
    } else if (computerWinCount >= 5) {
        console.log("Computer has beat you! Play again?");
        updateScore();
    } else {
        return 0;
    }
}

//takes in two variables, compares the results, and calls winnerResult Function
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("This round is a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Player wins this round with rock!");
        playerWinCount++;
        console.log("The players current score is: " + playerWinCount);
        return winnerResult(playerWinCount, computerWinCount);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Player wins this round with paper!")
        playerWinCount++;
        console.log("The players current score is: " + playerWinCount);
        return winnerResult(playerWinCount, computerWinCount);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Player wins this round with scissors!");
        playerWinCount++;
        console.log("The players current score is: " + playerWinCount);
        return winnerResult(playerWinCount, computerWinCount);
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
        console.log("Computer wins this round with rock!");
        computerWinCount++;
        console.log("The computers current score is: " + computerWinCount);
        return winnerResult(playerWinCount, computerWinCount);
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        console.log("Computer wins this round with paper!");
        computerWinCount++;
        console.log("The computers current score is: " + computerWinCount);
        return winnerResult(playerWinCount, computerWinCount);
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        console.log("Computer wins this round with scissors!");
        computerWinCount++;
        console.log("The computers current score is: " + computerWinCount);
        return winnerResult(playerWinCount, computerWinCount);
    } 
}

// computer randomly chooses rock, paper, or scissors when called, then calls playRound()
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


//event listeners wait for player to begin game by clicking buttons
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