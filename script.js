
'users strict';

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';
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


function whoWins(firstChoice, secondChoice){
    let winner = 0;
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

function playRounds(userInput){
    const computerInput = getComputerChoice();
    const whoWon = whoWins(computerInput, userInput);

    const displayWhoWon = document.createElement('h3');
    displayWhoWon.classList.add('wins');

    if (whoWon === 1){
        displayWhoWon.textContent = 'Computer won!';
        computerWins ++;
    }else if (whoWon === 2){
        displayWhoWon.textContent = 'You won!';
        userWins ++;
    }
    else {
        displayWhoWon.textContent = 'It was a tie.';
        ties ++ ;
    }


    const resultBox = document.querySelector('.results');
    resultBox.textContent = 'Here are the Results: ';
    
    const computerChoiceDisplay = document.createElement('p');
    computerChoiceDisplay.classList.add('played-move');
    computerChoiceDisplay.textContent = "Computer's move: " + computerInput;

    const usersChoiceDisplay = document.createElement('p');
    usersChoiceDisplay.classList.add('played-move');
    usersChoiceDisplay.textContent = "User's Move: " + userInput;

    const computerWinsDisplay = document.createElement('p');
    computerWinsDisplay.classList.add('wins');
    computerWinsDisplay.textContent = "Computer Wins: " + computerWins;

    const usersWinsDisplay = document.createElement('p');
    usersWinsDisplay.classList.add('wins');
    usersWinsDisplay.textContent = "User Wins: " + userWins;

    const tiesDisplay = document.createElement('p');
    tiesDisplay.classList.add('wins');
    tiesDisplay.textContent = "Ties: " + ties;

    resultBox.appendChild(displayWhoWon);
    resultBox.appendChild(computerChoiceDisplay);
    resultBox.appendChild(usersChoiceDisplay);
    resultBox.appendChild(computerWinsDisplay);
    resultBox.appendChild(usersWinsDisplay);
    resultBox.appendChild(tiesDisplay);

}

// resultBox
// Give out who won
// Show the results
// function playGames(){
//     for (let i = 0 ; i < 5; i ++){
//         playRounds()
//         console.log('')
//     }
// }

// playGames();

function startGame() {
    const btn = document.querySelectorAll('button');
    btn.forEach((button) =>
        button.addEventListener('click', function() {
            const userChoice = button.textContent;
            playRounds(userChoice);
        })
    );
}


startGame();