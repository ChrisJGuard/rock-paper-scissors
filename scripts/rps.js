// Rock, Paper, Scissors (v0.1)

// Set computer bias levels (equal chance by default)

const lowerBiasLevel = 1 / 3;
const upperBiasLevel = 2 / 3;

// Function to produce computer move

function computerPlay(lower, upper) {

    // Generate random number for computer choice

    let computerChoice = Math.random();

    // Return corresponding game move based on computer choice

    switch (true) {

        // First, check to see if higher than the upper boundary

        case upper < computerChoice:
            return "rock";
            break;

        // If not, check to see if higher than the lower boundary

        case lower < computerChoice:
            return "paper";
            break;

        // If not either of these, return the only remaining option

        default:
            return "scissors";
    }

}

// Function to play a single round against the computer

function playRound(playerSelection, computerSelection) {

    // Convert both player and computer selections to lower case

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Check each individual case to see who wins!

    switch (true) {

        // Player chooses rock, computer chooses scissors (player wins)

        case (playerSelection === "rock") && (computerSelection === "scissors"):
            return "You win! Rock beats scissors!";
            break;

        // Player chooses rock, computer chooses paper (player loses)

        case (playerSelection === "rock") && (computerSelection === "paper"):
            return "You lose! Paper beats rock...";
            break;
            
        // Player chooses paper, computer chooses rock (player wins)

        case (playerSelection === "paper") && (computerSelection === "rock"):
            return "You win! Paper beats rock!";
            break;
            
        // Player chooses paper, computer chooses scissors (player loses)

        case (playerSelection === "paper") && (computerSelection === "scissors"):
            return "You lose! Scissors beats paper...";
            break;
            
        // Player chooses scissors, computer chooses rock (player loses)

        case (playerSelection === "scissors") && (computerSelection === "rock"):
            return "You lose! Rock beats paper...";
            break;
            
        // Player chooses scissors, computer chooses paper (player wins)

        case (playerSelection === "scissors") && (computerSelection === "paper"):
            return "You win! Scissors beats paper!";
            break;

        // Both players choose the same (tie result)

        default:
            return "It's a tie! Fancy another go?";
            
    }

}