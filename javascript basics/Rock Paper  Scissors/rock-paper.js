
function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection and computerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    // Determine the winner or tie
    if (playerSelection === computerSelection) {
      return 'tie';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }

const buttons = document.querySelectorAll('button');
const resultDiv = document.createElement('div');
const scoreDiv = document.createElement('div');
document.body.appendChild(resultDiv);
document.body.appendChild(scoreDiv);

let playerScore = 0;
let computerScore = 0;

function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
  
  function checkWinner() {
    if (playerScore === 5) {
      resultDiv.textContent = 'Congratulations! You won the game!';
      disableButtons();
    } else if (computerScore === 5) {
      resultDiv.textContent = 'Oops! Computer won the game!';
      disableButtons();
    }
  }
  
  function disableButtons() {
    buttons.forEach((button) => {
      button.removeEventListener('click', handleClick);
      button.disabled = true;
    });
  }
  
  function handleClick() {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);

    if (winner === 'player') {
        playerScore++;
        resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      } else if (winner === 'computer') {
        computerScore++;
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      } else {
        resultDiv.textContent = "It's a tie!";
      }
    
      updateScore();
      checkWinner();
    }
    
    buttons.forEach((button) => {
      button.addEventListener('click', handleClick);
    });

