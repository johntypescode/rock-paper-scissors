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
		// Grab the response from the human player...
		const humanResponse = prompt('Please select one: rock, paper or scissors...', '');

		/**
		 * Apply toLowerCase() to the human response to add support for case-insensitivity.
		 * (i.e. 'Paper' is different than 'paper', 'ROCK' is different than 'rock', etc.)
		 */
		return humanResponse.toLowerCase();
	}

	/**
	 * Play a single round of the game.
	 */

	function playRound(humanOption, computerOption) {
		// Verify that the player has selected a valid option by checking that the value exists in gameOptions array
		if(gameOptions.includes(humanOption)) {

			// If human chooses rock...
			if(humanOption === 'rock') {
				if(computerOption === 'scissors') {
					// Increase the human player's score
					humanScore += 1;

					// Announce winner and updated score
					console.log(`You chose ${humanOption} while the computer chose ${computerOption}... you win!`);
					console.log(`Rock breaks scissors.`);
					console.log(`You: ${humanScore} | Computer: ${computerScore}`);
				}
				else if(computerOption === 'paper') {
					computerScore += 1;

					console.log(`You chose ${humanOption} while the computer chose ${computerOption}... computer won!`);
					console.log(`Paper covers rock.`);
					console.log(`You: ${humanScore} | Computer: ${computerScore}`);
				}
				else if(computerOption === 'rock') {
					// Play a new round... this will execute recursively until a winner is determined...
					console.log(`It's a tie!`);

					const humanResponse = getHumanChoice();
					const computerResponse = getComputerChoice();

					playRound(humanResponse, computerResponse);
				}
			}
			// If human choice is paper...
			else if(humanOption === 'paper') {
				if(computerOption === 'rock') {
					humanScore += 1;

					console.log(`You chose ${humanOption} while the computer chose ${computerOption}... you win!`);
					console.log(`Paper covers rock.`);
					console.log(`You: ${humanScore} | Computer: ${computerScore}`);
				}
				else if(computerOption === 'scissors') {
					computerScore += 1;

					console.log(`You chose ${humanOption} while the computer chose ${computerOption}... computer won!`);
					console.log(`Scissors cut paper.`);
					console.log(`You: ${humanScore} | Computer: ${computerScore}`);
				}
				else if(computerOption === 'paper') {
					console.log(`It's a tie!`);

					const humanResponse = getHumanChoice();
					const computerResponse = getComputerChoice();

					playRound(humanResponse, computerResponse);					
				}
			}

		} else {
			console.log('Invalid response... Options are rock, paper or scissors. Try again.');
			return;
		}
	}


	const humanChoice = getHumanChoice();
	const computerChoice = getComputerChoice();

	playRound(humanChoice, computerChoice);
};