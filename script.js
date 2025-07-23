let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let choices = [rock, paper, scissors];
let humanChoice = '';

choices.forEach((choice) => {
	choice.addEventListener('click', () => {
		humanChoice = choice.textContent.toLowerCase();
		console.log(humanChoice);
	});
});

const getComputerChoice = () => {
	const choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
		default:
			return 'error';
	}
};

const getHumanChoice = () => {};

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		console.log('Tie!');
	} else if (humanChoice === 'rock' && computerChoice === 'paper') {
		console.log('You lose! Paper beats rock.');
		computerScore++;
	} else if (humanChoice === 'rock' && computerChoice === 'scissors') {
		console.log('You win! Rock beats scissors.');
		humanScore++;
	} else if (humanChoice === 'paper' && computerChoice === 'rock') {
		console.log('You win! Paper beats rock.');
		humanScore++;
	} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
		console.log('You lose! Scissors beat paper.');
		computerScore++;
	} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
		console.log('You lose! Rock beats scissors.');
		computerScore++;
	} else if (humanChoice === 'scissors' && computerChoice === 'paper') {
		console.log('You win! Scissors beat paper.');
		humanScore++;
	}
};

const playGame = () => {};

playGame();
