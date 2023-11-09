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
	console.log(`Player chose: ${playerChoice}`);
	console.log(`Computer chose: ${gameSelection}`);

	if (playerChoice === gameSelection) {
		console.log('Draw');
		return;
	}

	if (gameSelection === 'rock') {
		if (playerChoice === 'paper') {
			console.log('Player wins');
			return;
		} else {
			console.log('Computer Wins');
			return;
		}
	} else if (gameSelection === 'paper') {
		if (playerChoice === 'scissors') {
			console.log('Player wins');
			return;
		} else {
			console.log('Computer Wins');
			return;
		}
	} else {
		if (playerChoice === 'rock') {
			console.log('Player wins');
			return;
		} else {
			console.log('Computer Wins');
			return;
		}
	}
};

const game = () => {
	for (let i = 0; i < 5; i++) {
		const playerInput = prompt('Rock, Paper, or Scissors?');
		round(playerInput, getComputerChoice());
	}
	console.log('Game Over!');
};
