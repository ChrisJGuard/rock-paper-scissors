// Rock, Paper, Scissors (v0.1)

// Set computer bias levels (equal chance by default)

const lowerBiasLevel = 1 / 3;
const upperBiasLevel = 2 / 3;

// Function to produce computer move

function computerPlay(lower, upper) {

    // Generate random number for computer choice

    let computerChoice = Math.random();

    // Return corresponding game move based on computer choice

    switch(true) {

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

    

}