const playerScoreEl = document.getElementById('PlayerScore');
const playerChoiceEl = document.getElementById('PlayerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');
const playerRock = document.getElementById('PlayerRock');
const playerPaper = document.getElementById('PlayerPaper');
const playerScissors = document.getElementById('PlayerScissors');
const playerLizard = document.getElementById('PlayerLizard');
const playerSpock = document.getElementById('PlayerSpock');
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');
const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'spock';
  } else if (computerChoiceNumber < 0.4) {
    computerChoice = 'lizard';
  } else if (computerChoiceNumber < 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber < 0.8) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'rock';
  }
}
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '  Rock';
      break;
    case 'paper':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '  Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = '  Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = '  Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = '  Spock';
      break;
    default:
      break;
  }
}
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It is a tie";
  } else {
    const choice = choices[playerChoice];
    
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You won";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;

    } else {
      resultText.textContent = "You lost";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
  }

function checkResult(PlayerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(PlayerChoice);
}
function select(PlayerChoice) {
  checkResult(PlayerChoice);
  switch (PlayerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '  Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '  Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = '  Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '  Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '  Spock';
      break;
    default:
      break;
  }
}
window.select = select;
resetAll();