const playerSelection = prompt();
const computerSelection = getComputerChoice();


function getComputerChoice () {
    let response = Math.floor(Math.random() * 3);
    switch (response) {
        case 0:
        response = "Rock";
        break;
        case 1:
        response = "Paper";
        break;
        case 2:
        response = "Scissors";
        break;
    }
    return response
};

function playRound(playerSelection, computerSelection) {
    let result
    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()) {
        result = "draw"
    } else if (playerSelection.toLowerCase()=="rock" && computerSelection=="Paper") {
        result = "lose"
    } else if (playerSelection.toLowerCase()=="rock" && computerSelection=="Scissors") {
        result = "win"
    } else if (playerSelection.toLowerCase()=="paper" && computerSelection=="Rock") {
        result = "win"
    } else if (playerSelection.toLowerCase()=="paper" && computerSelection=="Scissors") {
        result = "lose"
    } else if (playerSelection.toLowerCase()=="scissors" && computerSelection=="Paper") {
        result = "win"
    } else if (playerSelection.toLowerCase()=="scissors" && computerSelection=="Rock") {
        result = "lose"
    } 
    return result
    };

    alert(playerSelection);
    alert(computerSelection);
    alert(playRound(playerSelection, computerSelection));
