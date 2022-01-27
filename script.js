function getInput(){
    choice = prompt("Choose: rock/paper/scissors");
    return choice;
}
let r = Math.random();
let compC = null;
let msg = "tie";

if(r<0.33){compC = "rock"}
if(r>=0.33 && r<0.66){compC = "paper"}
if(r>=0.66){compC = "scissors"}

userC = getInput().toLowerCase();

if(userC==="rock" && compC === "scissors")msg="user wins"
if(userC==="rock" && compC === "paper")msg="computer wins"

if(userC==="paper" && compC === "rock")msg="user wins"
if(userC==="paper" && compC === "scissors")msg="computer wins"

if(userC==="scissors" && compC === "rock")msg="computer wins"
if(userC==="scissors" && compC === "paper")msg="user wins"

alert("The computer chose "+ compC+ ", "+ msg+".")