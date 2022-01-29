var playerScore = 0;
var pcScore = 0;
var GAME_OVER = false;

function getComputerChoice(){
    random = Math.random();
    
    if(random<1/3)return "rock";
    if(random>=1/3 && random <2/3)return "paper";
    if(random>=2/3)return "scissors";
}

function playRound(playerChoice){
    if(GAME_OVER){return;}
    pcChoice = getComputerChoice();
    console.log(`computer chose: ${pcChoice}, player chose: ${playerChoice}.`);
    h4 = document.querySelector('.response');
    outcomeElement = document.querySelector(".outcome");
    playerScoreElement = document.querySelector(".Pscore");
    pcScoreElement = document.querySelector(".Cscore");
    bodyElement = document.querySelector("body");
    if(pcChoice === playerChoice){h4.textContent="Tie. Computer chose "+pcChoice+".";}
    if(playerChoice === "rock" && pcChoice === "paper" ){h4.textContent="You lose this round. Computer chose "+pcChoice+".";pcScore++;}
    if(playerChoice === "rock" && pcChoice === "scissors"){h4.textContent="You win this round. Computer chose "+pcChoice+".";playerScore++;}
    if(playerChoice === "paper" && pcChoice === "scissors" ){h4.textContent="You lose this round. Computer chose "+pcChoice+".";pcScore++;}
    if(playerChoice === "paper" && pcChoice === "rock"){h4.textContent="You win this round. Computer chose "+pcChoice+".";playerScore++;}
    if(playerChoice === "scissors" && pcChoice === "rock" ){h4.textContent="You lose this round. Computer chose "+pcChoice+".";pcScore++;}
    if(playerChoice === "scissors" && pcChoice === "paper"){h4.textContent="You win this round. Computer chose "+pcChoice+".";playerScore++;}
    playerScoreElement.textContent = playerScore;
    pcScoreElement.textContent = pcScore;
    if(playerScore === 5){outcomeElement.textContent = "You Won !";bodyElement.style.backgroundColor = "green";GAME_OVER=true;}
    if(pcScore === 5){outcomeElement.textContent = "You Lost !";bodyElement.style.backgroundColor = "red";GAME_OVER=true;}

}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', function (){playRound('rock');});
paperBtn.addEventListener('click', function (){playRound('paper');});
scissorsBtn.addEventListener('click', function (){playRound('scissors');});
rockBtn.playerChoice = 'rock';

