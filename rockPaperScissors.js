const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
    return userInput;
  } else {
    return console.log('Please enter correct choice!');
  }
};

const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return 'rock';
  } else if (compChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won!';
    } else {
      return 'You Won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won!';
    } else {
      return 'You Won!';
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
