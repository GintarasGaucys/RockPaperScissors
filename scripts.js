let playerWins = 0;
let computerWins = 0;

const result = document.querySelector("#result");
const computer = document.querySelector("#computer");
const playerscore = document.querySelector("#player");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");


function computerPlay() {
    let moves = ["Rock", "Paper", "Scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function determineWinner(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player == "rock" & computer == "rock") {
        return "Tie! Rock ties with rock.";

    } else if (player == "rock" & computer == "scissors") {
        playerWins++;
        return "You win! Rock beats scissors.";

    } else if (player == "rock" & computer == "paper") {
        computerWins++;
        return "You lose! Paper beats rock.";

    } else if (player == "paper" & computer == "paper") {
        return "Tie! Paper ties with paper";

    } else if (player == "paper" & computer == "rock") {
        playerWins++;
        return "You win! Paper beats rock.";

    } else if (player == "paper" & computer == "scissors") {
        computerWins++;
        return "You lose! Scissors beat paper.";

    } else if (player == "scissors" & computer == "scissors") {
        return "Tie! Scissors tie with scissors";

    } else if (player == "scissors" & computer == "rock") {
        computerWins++;
        return "You lose! Rock beats scissors.";

    } else if (player == "scissors" & computer == "paper") {
        playerWins++;
        return "You win! Scissors beat paper";  

    }
}

function clicked() {
    playerscore.textContent = "Your score: " + playerWins;
    computer.textContent = "Computer's score: " + computerWins;
    if (playerWins == 5 || computerWins == 5) {
        if (playerWins > computerWins) {
            result.textContent = "You win! Press a button to play again";
        } else {
            result.textContent = "You lose! Press a button to play again.";
        }
        playerWins = 0;
        computerWins = 0;
    }
}

function game() {
    rock.addEventListener("click", () => {
        result.textContent = determineWinner("rock", computerPlay());
    });
    paper.addEventListener("click", () => {
        result.textContent = determineWinner("paper", computerPlay());
    });
    scissors.addEventListener("click", () => {
        result.textContent = determineWinner("scissors", computerPlay());
    });

    buttons.forEach((button) => {
        button.addEventListener("click", clicked);
    });

}

game();