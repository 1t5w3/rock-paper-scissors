let i = 0;
let txt = 'Rock, Paper, Scissors?';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameh1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startbutton");

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
        item.addEventListener("click", playSound);
    })
});

function hideEndContainerShowWinner() {
    let gameContainer = document.querySelector('.gamecontainer');
    let bottomContainer = document.getElementById('bottomcontainer');
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    gameContainer.style.display = 'none';
    bottomContainer.style.display = 'block';
}

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
        item.addEventListener("click", playSound);
    })
});

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

document.addEventListener("click", gameSelectionListener);

function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    if (element.classList.contains("gameselection") && element.id === ("rockdiv")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("selection") && element.id === ("rockimg")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("rockselection")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("gameselection") && element.id === ("paperdiv")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("selection") && element.id === ("paperimg")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("paperselection")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("gameselection") && element.id === ("scissorsdiv")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
    else if (element.classList.contains("selection") && element.id === ("scissorsimg")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("scissorsselection")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
}

function computerPlay() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    console.log(playerSelection);
    const computerSelection = computerPlay();
    const rockSelected = document.querySelector("#rockdiv");
    const paperSelected = document.querySelector("#paperdiv");
    const scissorsSelected = document.querySelector("#scissorsdiv");
    const computerRockSelected = document.querySelector("#computerrockdiv");
    const computerPaperSelected = document.querySelector("#computerpaperdiv");
    const computerScissorsSelected = document.querySelector("#computerscissorsdiv");
    if (computerSelection == "rock") {
        computerRockSelected.style.backgroundColor = "#7987e9";
        computerPaperSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "paper") {
        computerPaperSelected.style.backgroundColor = "#7987e9";
        computerRockSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "scissors") {
        computerScissorsSelected.style.backgroundColor = "#7987e9";
        computerRockSelected.style.backgroundColor = "white";
        computerPaperSelected.style.backgroundColor = "white";
    }
    let playerSelectionString = String(playerSelection);
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    if (playerSelectionLowercase === "rock") {
        rockSelected.style.backgroundColor = "#fc5868";
        paperSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        if (computerSelection === "rock") {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        else if (computerSelection === "paper") {
            console.log("You lose - paper beats rock!");
            computerScore++;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        else {
            console.log ("You win - scissors beats paper!");
            playerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
    }
    else if (playerSelectionLowercase === "paper") {
        paperSelected.style.backgroundColor = "#fc5868";
        rockSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        if (computerSelection === "rock") {
            console.log("You win - paper beats rock!");
            playerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        else if (computerSelection === "paper") {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        else {
            console.log("You lose - scissors beats paper!")
            computerScore++;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
    }
    else if (playerSelectionLowercase === "scissors") {
        scissorsSelected.style.backgroundColor = "#fc5868";
        rockSelected.style.backgroundColor = "white";
        paperSelected.style.backgroundColor = "white";
        if (computerSelection === "rock") {
            console.log("You lose - rock beats scissors!")
            computerScore++;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        else if (computerSelection === "paper") {
            console.log("You win - scissors beats paper!");
            playerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        else {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
    }
    else {
        console.log("Invalid entry, please try again.");
        game(playerScore, computerScore);
        return null;
    }
}

function game(playerScore, computerScore) {
    const gameUpdates = document.querySelector(".gameupdates");
    let userWinLogo = document.getElementById('userwinslogo');
    let robotWinLogo = document.getElementById('robotwinslogo');
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            let text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playWinSound();
            userWinLogo.style.display = 'block';
        }
        else if (computerScore > playerScore) {
            let text = document.createTextNode(`COMPUTER WINS ${computerScore}:${playerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playLoseSound();
            robotWinLogo.style.display = 'block';
        }
        else {
            let text = document.createTextNode(`IT WAS A DRAW!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            userWinLogo.style.display = 'block';
            robotWinLogo.style.display = 'block';
        }   
    }
}