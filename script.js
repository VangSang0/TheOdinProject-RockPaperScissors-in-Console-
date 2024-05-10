
'users strict';

function getComputerChoice(){
    var choice = Math.floor(Math.random() * 3) + 1;
    var computerChoice = '';
    if (choice == 1){
        computerChoice = 'Rock';
    }
    else if (choice == 2){
        computerChoice = 'Paper';
    }
    else if (choice == 3){
        computerChoice = 'Scissors';
    }
    else {
        computerChoice = 'Computer retired';
    }
    return computerChoice;
}

function getUserChoice(){
    let userChoice = prompt('What move are you playing? (Rock, Paper, Scissors)', 'Rock').toLowerCase().trim();
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
}


function whoWins(firstChoice, secondChoice){
    var winner = 0;
    if (firstChoice.toLowerCase() == 'paper' && secondChoice.toLowerCase() == 'rock' || firstChoice.toLowerCase() == 'rock' && secondChoice.toLowerCase() == 'scissors' || firstChoice.toLowerCase() == 'scissors' && secondChoice.toLowerCase() == 'paper'){
        winner = 1;
    }
    else if (firstChoice.toLowerCase() == 'rock' && secondChoice.toLowerCase() == 'paper' || firstChoice.toLowerCase() == 'scissors' && secondChoice.toLowerCase() == 'rock' || firstChoice.toLowerCase() == 'paper' && secondChoice.toLowerCase() == 'scissors'){
        winner = 2;
    }
    else {
        winner = 0;
    }
    return winner;
}

let computerWins = 0;
let userWins = 0;
let ties = 0

function playRounds(){
    const computerInput = getComputerChoice();
    const userInput = getUserChoice();
    let whoWon = whoWins(computerInput, userInput);
    console.log(computerInput);
    console.log(userInput);
    console.log(whoWon);
    if (whoWon === 1){
        computerWins ++;
    }else if (whoWon === 2){
        userWins ++;
    }
    else {
        ties ++ ;
    }
    console.log("computer wins: " + computerWins);
    console.log("User wins: " + userWins);
    console.log("Ties: " + ties);
    
}

function playGames(){
    for (let i = 0 ; i < 5; i ++){
        playRounds()
    }
}

playGames();