

const btns = document.querySelectorAll("#btn")
const resultDiv = document.querySelector("#result")
const scoreDiv = document.querySelector("#score")

let humanScores = 0
let computerScores = 0

btns.forEach(btn => {
btn.addEventListener("click", (e)=>{
    if(humanScores < 5 && computerScores < 5){
    const humanChoices = getHumanChoice(e.target.textContent)
    const computerChoices = getComputerChoice()
    playRound(humanChoices, computerChoices)
    updateResult();
    checkWinner()
}})
    
})





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
function getHumanChoice(choice){
    return choice.toLowerCase();
}

//function to play one single round
function playRound(humanChoice, computerChoice){

    let result = ""
    

    if(humanChoice === computerChoice ){
        result = `It's a draw! You both chose ${humanChoice}`
    }
    else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')  ){
        humanScores ++;
        result = `You win! ${humanChoice} beats ${computerChoice}`
    }else {
        computerScores ++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`
    }

    //show results of the round
    const p = document.createElement("p")
    p.textContent = result
    resultDiv.appendChild(p)
}

//update score
function updateResult(){
    const score = document.createElement("p")
    score.textContent = `Score - You: ${humanScores} | Computer: ${computerScores}`
}


//check for Winner
function checkWinner(){
    if(humanScores === 5 || computerScores === 5){
        const final = document.createElement("h2")
        final.textContent = humanScores > computerScores ? "🎉 You won the game!" : "😢 You lost the game!";
        resultDiv.appendChild(final)
    }
}













