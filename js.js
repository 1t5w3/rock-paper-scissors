

function getComputerChoice() {
    return Math.floor(Math.random() * 3)+1;
  }

let a = getComputerChoice();
let c = prompt("1:rock/2:paper/3:scissors");
let b = null;
let d = null;

if (a ==  1) 
{
    b = "rock";
    console.log("the computer chose rock")
}else if (a == 2)
{
    b = "paper";
    console.log("the computer chose paper")
}else if (a == 3)
{
    b = "scissors";
    console.log("the computer chose scissors")
}else {
    console.log("something went wrong.");
}

if (c ==  "1") 
    {
        d = "rock";
    }else if (c == "2")
    {
        d = "paper";
    }else if (c == "3")
    {
        d = "scissors";
    }else {
        console.log("something went wrong.");
    }
    
if(b == "rock")
{
    if (d == "rock")
        {
            console.log("its a draw refresh to go again")
        }
    if(d == "paper")
        {
            console.log("you won")
        }
    if(d == "scissors")
        {
            console.log("you lost")
        }
}else if(b == "paper")
{
    if(d == "rock")
        {
            console.log("you won")
        }
    if(d == "paper")
        {
            console.log("its a draw refresh to go again")
        }
    if(d == "scissors")
        {
            console.log("you won")
        }
}else if(b == "scissors")
{
    if(d == "rock")
        {
            console.log("you won")
        }
    if(d == "paper")
        {
            console.log("you lost")
        }
    if(d == "scissors")
        {
            console.log("its a draw refresh to go again")
        }
}
