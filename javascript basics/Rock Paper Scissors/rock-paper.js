function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//console.log(getComputerChoice());

function playRound(playerSeection, comppputerSelection){
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSeection = playerSeection.toLowerCase();

    // Determine the winner or tie
    if(playerSeection === comppputerSelection){
        return "It's a tie!";
    } else if (
        (playerSeection === 'rock' && comppputerSelection === 'scissors') ||
        (playerSeection === 'paper' && comppputerSelection === 'rock') ||
        (playerSeection === 'scissors' && comppputerSelection === 'paper') 
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

