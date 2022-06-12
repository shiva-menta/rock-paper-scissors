let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    randomNum = Math.round(Math.random() * 2)
    returnVal = null;
    switch (randomNum) {
        case 0:
            returnVal = 'rock';
            break;
        case 1:
            returnVal = 'paper';
            break;
        case 2:
            returnVal = 'scissors';
            break;
    }
    return returnVal;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerWins);
    console.log(computerWins);
    if (playerWins + computerWins < 5) {
        normPlayerSelection = playerSelection.toLowerCase();
        normComputerSelection = computerSelection.toLowerCase();
        console.log('p');
        if (normPlayerSelection === normComputerSelection) {
            alert('You tied.');
        } else if ((normPlayerSelection === 'rock' && normComputerSelection === 'scissors') ||
                (normPlayerSelection === 'paper' && normComputerSelection === 'rock') || 
                (normPlayerSelection === 'scissors' && normComputerSelection === 'paper') ) {
                    playerWins++;
                    alert('You win. ' + normPlayerSelection + ' beats ' + normComputerSelection + '.');
            
        } else {
            computerWins++;
            alert('You lose. ' + normComputerSelection + ' beats ' + normPlayerSelection + '.');
        }
        if (playerWins + computerWins === 5) {
            if (playerWins > computerWins) {
                gameResults.textContent = 'Game is over. Player wins!'
            } else {
                gameResults.textContent = 'Game is over. Computer wins!'
            }
        } else {
            gameResults.textContent = 'Player has ' + playerWins + ' wins. ' +
            'Computer has ' + computerWins + ' wins. ' +
            (5 - (playerWins + computerWins)) + ' games left.'
        }   
    }
}







const gameResults = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(gameResults);
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => {playRound('rock', computerPlay())});
paperButton.addEventListener('click', () => {playRound('paper', computerPlay())});
scissorsButton.addEventListener('click', () => {playRound('scissors', computerPlay())});

