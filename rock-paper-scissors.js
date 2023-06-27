function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    
    if (number == 1) {
        return "rock"
    }
    else if (number == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function capitalizeWord(word) {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capWord = firstLetterCap + remainingLetters
    return capWord;
}

function playRound(playerSelection, computerSelection) {

    playerSelectionCapitalized = capitalizeWord(playerSelection);
    computerSelectionCapitalized = capitalizeWord(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors!");
        return true;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock!");
        return true;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper!")
        return true;
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log(`It's a Tie! You both chose ${playerSelectionCapitalized}!`);
        return 2;
    }
    else {
        console.log(`You Lost! ${playerSelectionCapitalized} loses to ${computerSelectionCapitalized}!`);
        return false;
    }
}

function game() {
    let userScore = 0
    let computerScore = 0
    
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();

        let result = playRound(playerChoice, computerSelection);

        if (result == true) {
            userScore += 1;
        }
        else if (result == false) {
            computerScore += 1;
        }
        else {
            userScore = userScore;
            computerScore = computerScore;
        }

        console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);
    }
    if (userScore > computerScore) {
        console.log("You won the game! :D")
    }
    else if (userScore == computerScore) {
        console.log("It was a tie.");
    }
    else {
        console.log("You lost the game! :(")
    }
}

game();