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

let rock = 1;
let paper = 2;
let scissors = 3;

let computerChoice;
let computer = 0;


computerPlay();

function computerPlay() {
    for (let i = 0; i < 10; i++) {
        computer = Math.floor(Math.random() * 3) + 1;
        if (computer == 1) {
            computerChoice = "rock";
        } else if (computer == 2) {
            computerChoice = "paper";
        } else if (computer == 3) {
            computerChoice = "scissors";
        } 
        console.log(computerChoice);
    }
}





