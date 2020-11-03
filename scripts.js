let playerWins = 0;
let computerWins = 0;

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

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(determineWinner(prompt("What is your move? (rock, paper, scissors?)"), computerPlay()));
        console.log("You score: " + playerWins);
        console.log("Computer's score: " + computerWins);
    }
    if (playerWins > computerWins) {
        console.log("You win!");
    } else if (playerWins < computerWins) {
        console.log("You lose!");
    } else {
        console.log("Tie!");
    }
}

game();