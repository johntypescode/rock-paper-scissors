window.onload = function() {

	// Keep track of each player's score
	let humanScore = 0;
	let computerScore = 0;

	// Keep track of the round number
	let roundNumber = 1;

	// Options that can be played
	const gameOptions = ['rock', 'paper', 'scissors'];

	/**
	 * Generate a random choice from the game options for the computer (or, in this case, 'opponent').
	 */

	function getComputerChoice() {
		// Select a random choice from the gameOptions array
		const totalOptions = gameOptions.length;
		const randomSelection = Math.floor(Math.random() * totalOptions);

		return gameOptions[randomSelection];
	}

	/**
	 * Get human user's choices.
	 */
	function getHumanChoice() {
		const humanResponse = prompt('Please select one: rock, paper or scissors...', '');

		/**
		 * Apply toLowerCase() to the human response to add support for case-insensitivity.
		 * (i.e. 'Paper' is different than 'paper', 'ROCK' is different than 'rock', etc.)
		 */
		return humanResponse.toLowerCase();
	}

	const humanChoice = getHumanChoice();
	const computerChoice = getComputerChoice();

};