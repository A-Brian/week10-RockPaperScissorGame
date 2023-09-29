const choices = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        userScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateResult(playerSelection, computerSelection, message) {
    const result = document.getElementById("result");
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById("computer-choice");

    result.textContent = `Round ${round}: ${message} (User: ${userScore}, Computer: ${computerScore})`;
    playerChoice.textContent = `Your choice: ${playerSelection}`;
    computerChoice.textContent = `Computer's choice: ${computerSelection}`;
    round++;
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    updateResult(playerSelection, computerSelection, roundResult);
}

document.getElementById("rockBtn").addEventListener("click", () => game("Rock"));
document.getElementById("paperBtn").addEventListener("click", () => game("Paper"));
document.getElementById("scissorsBtn").addEventListener("click", () => game("Scissors"));
