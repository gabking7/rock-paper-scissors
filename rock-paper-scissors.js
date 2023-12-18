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

let buttons = document.getElementsByTagName("button");

let userScore = 0;
let computerScore = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound(buttons[i].textContent.toLowerCase(),computerChoice);
        
        let result = playRound(buttons[i].textContent.toLowerCase(), computerChoice);

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

        score.textContent = `Your Score: ${userScore} | Computer's Score: ${computerScore}`;

        if (userScore == 5) {
            results.textContent = "Congrats! You won the game!"
            userScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5) {
            results.textContent = "Oh no! You lost the game."
            userScore = 0;
            computerScore = 0;
        }
    })
}

let score = document.getElementById("score");
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