let playerScore = 0;
let computerScore = 0;


const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result");
const ScoreDiv = document.querySelector("#score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        playRound(playerSelection);
    });
})

function playRound(playerSelection) {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    resultDiv.textContent = result;
    ScoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            resultDiv.textContent = "You win the game! , Congratulations!";
            resetGame();
        } else {
            resultDiv.textContent = "You lose the game! , computer wins!";
            resetGame();
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        setTimeout(() => {
            resultDiv.textContent = "";
            ScoreDiv.textContent = "player: 0 computer: 0";            
        }, 2000);
    }
}