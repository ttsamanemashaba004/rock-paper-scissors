// function to get the computer choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.4){
        return 'rock';
    }
    else if(rand > 0.4 && rand < 0.7){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}

//function to get the human choice
function getHumanChoice(){
    const userChoice = prompt("Pick between, rock, paper, or scissors:").toLowerCase();

    return userChoice;
}

// variables ofr computer and human score init to zero 
let humanScore = 0;
let computerScore = 0;
//function to play one single round
function playRound(humanChoice, computerChoice){
    

    if(humanChoice == 'rock' && computerChoice == 'paper'){
        computerScore += 1;
        return console.log('You lose! Paper beats Rock')
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore += 1;
        return console.log('You win! Rock beats Scissors');
    }
    else if(humanChoice == 'rock' && computerChoice == 'rock'){
        return console.log('It is a draw!');
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore += 1;
        return console.log('You win! Paper beats Rock');
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors'){
        computerScore += 1;
        return console.log('You lose! Scissors beats Paper');
    }
    else if(humanChoice == 'paper' && computerChoice == 'paper'){
        return console.log('It is a draw!');
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        humanChoice += 1;
        return console.log('You win! Scissors beats Paper');
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        computerChoice += 1;
        return console.log('You lose! Rock beats Scissors');
    }
    else{
        return console.log('It is a draw!');
    }
}

function playGame(){

    for(let i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }

    console.log(`
        Your Score: ${humanScore}
        Computer Score: ${computerScore}`)


    if(humanScore > computerScore){
        console.log('You Won!')
    }
    else if(humanScore < computerScore){
       console.log("You Lost!")
    }
    else{
        console.log( 'its a draw!')
    }
}

playGame()






