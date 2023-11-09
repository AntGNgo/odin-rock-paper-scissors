const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const vs = document.getElementById('vs');

let currentPlayerScore = 0;
let currentComputerScore = 0;

const getComputerChoice = () => {
	const randomChoice = Math.floor(Math.random() * 3);
	switch (randomChoice) {
		case 0:
			computerChoice.setAttribute('src', './assets/rock.png');
			return 'rock';
		case 1:
			computerChoice.setAttribute('src', './assets/paper.png');
			return 'paper';
		case 2:
			computerChoice.setAttribute('src', './assets/scissors.png');
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

const clearBoard = () => {
	playerChoice.setAttribute('src', '');
	computerChoice.setAttribute('src', '');
	vs.textContent = 'VS.';
};

const game = () => {
	const addScore = (results) => {
		if (results === 0) {
			vs.textContent = `Draw`;
			return;
		} else if (results === 1) {
			currentPlayerScore++;
			playerScore.textContent = `You: ${currentPlayerScore}`;
			vs.textContent = `You win`;
		} else {
			currentComputerScore++;
			computerScore.textContent = `Computer: ${currentComputerScore}`;
			vs.textContent = `Computer wins`;
		}
	};

	playerRock.addEventListener('click', () => {
		playerChoice.setAttribute('src', './assets/rock.png');
		let results = round('rock', getComputerChoice());
		addScore(results);
		setTimeout(clearBoard, 2000);
	});

	playerPaper.addEventListener('click', () => {
		playerChoice.setAttribute('src', './assets/paper.png');
		let results = round('paper', getComputerChoice());
		addScore(results);
		setTimeout(clearBoard, 2000);
	});

	playerScissors.addEventListener('click', () => {
		playerChoice.setAttribute('src', './assets/scissors.png');
		let results = round('scissors', getComputerChoice());
		addScore(results);
		setTimeout(clearBoard, 2000);
	});
};
