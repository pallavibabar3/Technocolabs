let userInput = prompt('Rock, Paper, or Scissors ?', 'insert your choice here...');
userInput = userInput.toLowerCase();

const getComputerChoice = () => {
  let getNbr = Math.floor(Math.random()*2);
  if (getNbr === 0) {
    return 'rock';
  } else if (getNbr === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'TIE here !';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON !';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON !';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON';
    }
  }
};

const playGame = () => {
  const userChoice = userInput;
  const computerChoice = getComputerChoice();
  console.log(`userChoice: ${userChoice} 
   VS. computerChoice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));  
};

playGame();