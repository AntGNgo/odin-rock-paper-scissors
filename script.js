const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerChoice = document.getElementById('player-choice');
const playerOptions = document.getElementById('player-options');
const computerChoice = document.getElementById('computer-choice');
const computerOptions = document.getElementById('computer-options');
const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const vs = document.getElementById('vs');
const winner = document.getElementById('winner');
const playAgain = document.getElementById('play-again');

let currentPlayerScore = 0;
let currentComputerScore = 0;

let gameOver = false;

const addChoiceImage = (activePlayer, choice) => {
	activePlayer.textContent = '';
	const imgTag = document.createElement('img');
	imgTag.classList.add('choice-image');
	imgTag.setAttribute('src', `./assets/${choice}.png`);
	activePlayer.appendChild(imgTag);
};

// Random int to determine computer choice
const getComputerChoice = () => {
	const randomChoice = Math.floor(Math.random() * 3);
	switch (randomChoice) {
		case 0:
			addChoiceImage(computerChoice, 'rock');
			return 'rock';
		case 1:
			addChoiceImage(computerChoice, 'paper');
			return 'paper';
		case 2:
			computerChoice.setAttribute('src', './assets/scissors.png');
			return 'scissors';
		default:
			throw new Error('Something went wrong with the finding a random int');
	}
};

// Single round - determines who wins
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

// Clear board after round
const clearBoard = () => {
	playerChoice.setAttribute('src', '');
	computerChoice.setAttribute('src', '');
	vs.textContent = 'VS.';
};

// Runs if player click play again button
const resetGame = () => {
	clearBoard();
	currentPlayerScore = 0;
	currentComputerScore = 0;
	playerScore.textContent = `You: 0`;
	computerScore.textContent = `Computer: 0`;
	playerOptions.classList.toggle('hidden');
	computerOptions.classList.toggle('hidden');
	vs.classList.toggle('hidden');
	winner.classList.toggle('hidden');
	playAgain.classList.toggle('hidden');
};

// Check win after every round
const checkWin = () => {
	if (currentPlayerScore >= 3 || currentComputerScore >= 3) {
		playerOptions.classList.toggle('hidden');
		computerOptions.classList.toggle('hidden');
		vs.classList.toggle('hidden');
		winner.classList.toggle('hidden');
		playAgain.classList.toggle('hidden');
		if (currentPlayerScore > currentComputerScore) {
			winner.textContent = `Game Over - Player Wins!`;
		} else {
			winner.textContent = `Game Over - Computer Wins`;
		}
	}
};

// Adds up score after round - updates score on DOM
const addScore = (results) => {
	if (results === 0) {
		return;
	} else if (results === 1) {
		currentPlayerScore++;
		playerScore.textContent = `You: ${currentPlayerScore}`;
		checkWin();
		// vs.textContent = `You win`;
	} else {
		currentComputerScore++;
		computerScore.textContent = `Computer: ${currentComputerScore}`;
		checkWin();
		// vs.textContent = `Computer wins`;
	}
};

playAgain.addEventListener('click', resetGame);

playerRock.addEventListener('click', () => {
	addChoiceImage(playerChoice, 'rock');
	let results = round('rock', getComputerChoice());
	addScore(results);
});

playerPaper.addEventListener('click', () => {
	addChoiceImage(playerChoice, 'paper');
	let results = round('paper', getComputerChoice());
	addScore(results);
});

playerScissors.addEventListener('click', () => {
	addChoiceImage(playerChoice, 'scissors');
	let results = round('scissors', getComputerChoice());
	addScore(results);
});
