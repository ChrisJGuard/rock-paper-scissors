// Rock, Paper, Scissors (v0.1)

// Set computer bias levels (equal chance by default)

const lowerBiasLevel = 1 / 3;
const upperBiasLevel = 2 / 3;

// Function to produce computer move

function computerPlay(lower, upper) {

    let computerChoice = Math.random();

    switch(true) {

        case (0 <= computerChoice) && (computerChoice < lower):
            return "rock";
            break;
        
        case (lower <= computerChoice) && (computerChoice < upper):
            return "paper";
            break;

        case (upper <= computerChoice) && (computerChoice < 1):
            return "scissors";
            break;
    }

} 