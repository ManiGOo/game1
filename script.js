let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if (num < 0.34) return "rock";
    else if (num <= 0.67) return "paper";
    else return "scissors";
}

function humanChoice() {
    let choice = prompt("Enter your choice: rock, paper or scissors");
    if (!choice) return null; // Handle the case where the user cancels the prompt
    return choice.toLowerCase();
}

function playRound() {
    let computerChoice = getComputerChoice();
    let userChoice = humanChoice();
    
    if (!userChoice) return "Invalid input. Round skipped."; // Handle case where user cancels

    if (userChoice === computerChoice) return "It is a tie!";
    
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `Human wins! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${userChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (humanScore > computerScore) console.log("Human wins the game!");
    else if (humanScore < computerScore) console.log("Computer wins the game!");
    else console.log("It is a tie!");
}

playGame();
