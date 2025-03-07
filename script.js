let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num =  Math.random();
    if(num < 0.34) return 'rock';
    else if(num <= 0.67) return 'paper';
    else return 'scissors';
}
function humanChoice(){
    let choice = prompt('Enter your choice: rock, paper or scissors');
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice){
    computerChoice = getComputerChoice();
    humanChoice = humanChoice();
    if(humanChoice === computerChoice) return 'It is a tie!';
    if(humanChoice === 'rock'){
        if(computerChoice === 'paper') return 'Computer wins!' && computerScore++;
        else return 'Human wins!' && humanScore++;
    }
    if(humanChoice === 'paper'){
        if(computerChoice === 'scissors') return 'Computer wins!' && computerScore++;
        else return 'Human wins!' && humanScore++;
    }
    if(humanChoice === 'scissors'){
        if(computerChoice === 'rock') return 'Computer wins!' && computerScore++;
        else return 'Human wins!' && humanScore++;
    }

}
function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(playRound());
    }
    if(humanScore > computerScore) console.log('Human wins the game!');
    else if(humanScore < computerScore) console.log('Computer wins the game!');
    else console.log('It is a tie!');
}