const choices = ['rock', 'paper', 'scissors'];
const resultMessage = document.getElementById('result-message');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', function() {
    const userChoice = this.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    
    displayResult(userChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) {
    return 'It\'s a draw!';
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function displayResult(user, computer, result) {
  userChoiceDisplay.textContent = `You chose: ${user}`;
  computerChoiceDisplay.textContent = `Computer chose: ${computer}`;
  resultMessage.textContent = result;
}
