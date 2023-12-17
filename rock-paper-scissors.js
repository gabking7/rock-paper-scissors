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

let rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
})

let paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
})

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
})

let results = document.getElementById("results");

function playRound(playerSelection, computerSelection) {

    playerSelectionCapitalized = capitalizeWord(playerSelection);
    computerSelectionCapitalized = capitalizeWord(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        results.textContent = "You Win! Rock beats Scissors!";
        return true;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        results.textContent = "You Win! Paper beats Rock!";
        return true;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        results.textContent = "You Win! Scissors beats Paper!"
        return true;
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        results.textContent = `It's a Tie! You both chose ${playerSelectionCapitalized}!`;
        return 2;
    }
    else {
        results.textContent = `You Lost! ${playerSelectionCapitalized} loses to ${computerSelectionCapitalized}!`;
        return false;
    }
}

function game() {
    let userScore = 0
    let computerScore = 0
    
    // for (let i = 0; i < 5; i++) {
    //     const playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
    //     const computerSelection = getComputerChoice();

    //     let result = playRound(playerChoice, computerSelection);

    //     if (result == true) {
    //         userScore += 1;
    //     }
    //     else if (result == false) {
    //         computerScore += 1;
    //     }
    //     else {
    //         userScore = userScore;
    //         computerScore = computerScore;
    //     }

    //     console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);
    // }
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

// game();