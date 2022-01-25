function computerPlay() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let chosen = parseInt(Math.random() * 3);
    return options[chosen];
}
function playerPlay() {
    let chosen = prompt("ROCK PAPER SCISSORS!").toUpperCase();
    let valid = false;
    while (!valid) {
        if (chosen == "SCISSORS" || chosen == "PAPER" || chosen == "ROCK") {
            valid = true;
        } else {
            chosen = prompt("Try again. ROCK PAPER SCISSORS!").toUpperCase();
        }
    }
    return chosen;
}
function playRound(playerSelection, computerSelection) {
    let result = -1;
    if (playerSelection == computerSelection) {
        console.log("TIE!")
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("You won this round!\n" + playerSelection + " beats " + computerSelection + "!");
        result = 1;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("You won this round!\n" + playerSelection + " beats " + computerSelection + "!");
        result = 1;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("You won this round!\n" + playerSelection + " beats " + computerSelection + "!");
        result = 1;
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        console.log("You lost this round!\n" + computerSelection + " beats " + playerSelection + "!");
        result = 0;
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        console.log("You lost this round!\n" + computerSelection + " beats " + playerSelection + "!");
        result = 0;
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        console.log("You lost this round!\n" + computerSelection + " beats " + playerSelection + "!");
        result = 0;
    }
    return result;
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let endOfRound;
    while (playerScore < 5 && computerScore < 5) {
        endOfRound = playRound(playerPlay(), computerPlay());
        if (endOfRound == 0) {
            computerScore++;
        } else if (endOfRound == 1) {
            playerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You Won The Match! " + playerScore + "-" + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You Lost The Match! " + computerScore + "-" + playerScore);
    } else {
        console.log("There Was A Tie!");
    }

}
game();
