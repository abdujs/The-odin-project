/*
function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//console.log(getComputerChoice());

function playRound(playerSelection , computerSelection){
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();

    // Determine the winner or tie
    if(playerSelection === computerSelection){
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') 
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = ' rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
function toUpper(string){
    return string.toUpperCase();
}

let cars = ["Saab", "Volvo", "BMW", "Ford"];
//let byck = ['bajaje', 'moter', 'bishkelilit'];

const upperCars = cars.map(toUpper);
console.log(upperCars);