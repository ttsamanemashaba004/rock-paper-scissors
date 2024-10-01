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


console.log(getComputerChoice())

