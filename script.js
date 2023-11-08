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
	const playerChoice = playerSelection.toLowerCase();
	if (!'rockpaperscissors'.includes(playerChoice)) {
		throw new Error('Player must enter valid move');
	}
	console.log(`Player chose: ${playerChoice}`);
	console.log(`Computer chose: ${gameSelection}`);

	if (playerChoice === gameSelection) {
		return 'Draw';
	}

	if (gameSelection === 'rock') {
		if (playerChoice === 'paper') {
			return 'Player wins';
		} else {
			return 'Computer wins';
		}
	} else if (gameSelection === 'paper') {
		if (playerChoice === 'scissors') {
			return 'Player wins';
		} else {
			return 'Computer wins';
		}
	} else {
		if (playerChoice === 'rock') {
			return 'Player wins';
		} else {
			return 'Computer wins';
		}
	}
};

const result = round('Rock', getComputerChoice());

console.log(result);
