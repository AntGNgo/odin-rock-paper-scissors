const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerChoice = document.getElementById('player-choice');
const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');

const getComputerChoice = () => {
	const randomChoice = Math.floor(Math.random() * 3);
	switch (randomChoice) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
		default:
			throw new Error('Something went wrong with the finding a random int');
	}
};

const round = (playerSelection, gameSelection) => {
	const playerChoice = playerSelection.toLowerCase().trim();
	if (!'rockpaperscissors'.includes(playerChoice)) {
		throw new Error('Player must enter valid move');
	}

	if (playerChoice === gameSelection) {
		return 0;
	}

	if (gameSelection === 'rock') {
		if (playerChoice === 'paper') {
			return 1;
		} else {
			return -1;
		}
	} else if (gameSelection === 'paper') {
		if (playerChoice === 'scissors') {
			return 1;
		} else {
			return -1;
		}
	} else {
		if (playerChoice === 'rock') {
			return 1;
		} else {
			return -1;
		}
	}
};

const game = () => {
	let currentPlayerScore = 0;
	let currentComputerScore = 0;

	playerRock.addEventListener('click', () => {
		playerChoice.setAttribute('src', './assets/rock.png');
		let results = round('rock', getComputerChoice());
		console.log(results);
	});

	playerPaper.addEventListener('click', () => {
		playerChoice.setAttribute('src', './assets/paper.png');
		let results = round('paper', getComputerChoice());
	});

	playerScissors.addEventListener('click', () => {
		playerChoice.setAttribute('src', './assets/scissors.png');
		let results = round('scissors', getComputerChoice());
	});
};

game();
