var current_round = 1;
var score_player = 0;
var score_computer = 0;
const dialog3 = document.getElementById("dialog3");
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const score = document.getElementById("score");
const roundNumber = document.getElementById("round-number");
const roundWinner = document.getElementById("round-winner");
const winnerLoser = document.getElementById("winner-loser");
const winnerLoserText = document.getElementById("winner-loser-text");
const winnerLoserButton = document.getElementById("winner-loser-btn");
const dialog4 = document.getElementById("dialog4");
const dialog5 = document.getElementById("dialog5");
const dratButton = document.getElementById("drat-btn");
const yayButton = document.getElementById("yay-btn");
const quitButton = document.getElementById("quit-btn");
const drawButton = document.getElementById("draw-btn");
const dialog6 = document.getElementById("dialog6");
const startButton = document.getElementById("start-btn");
const dialog1 = document.getElementById("dialog1");
const introButton1 = document.getElementById("intro-btn-1");
const introButton2 = document.getElementById("intro-btn-2");
const dialog2 = document.getElementById("dialog2");
const preludeButton1 = document.getElementById("prelude-btn-1");
const preludeButton2 = document.getElementById("prelude-btn-2");

function computerPlay () {
    var a = Math.random();
    if (a < 0.33) 
    return("rock");
    else if (a > 0.66)
    return ("scissors");
    else 
    return ("paper");
}

function singleRound (playerSelection, computerSelection) {
    
    // playerSelection = playerSelection.toLowerCase();
    // computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper" )
    {
        ++score_computer;
        roundWinner.innerHTML = ("Paper beats rock! Albert wins this round!");
         return;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {   
        ++score_player;
        roundWinner.innerHTML = ("Paper beats scissors! You wins this round!");
        return;
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        ++score_player;
        roundWinner.innerHTML = ("Paper beats rock! You win this round!");
        return;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        ++score_computer;
        roundWinner.innerHTML = ("Scissors beat paper! Albert wins this round!");
        return;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        ++score_player;
        roundWinner.innerHTML = ("Scissors beat paper! You wins this round!");
        return;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        ++score_computer;
        roundWinner.innerHTML = ("Rock beats scissors! Albert wins this round!");
        return;
    }

    else 
    {
        console.log(playerSelection === computerSelection);
        roundWinner.innerHTML = ("This round is a draw!");
        return;
    }
}

function startGame (choice) {
        playerSelection = choice;
        playerChoice.innerHTML = `You chose ${choice}!`;
        computerSelection = computerPlay();
        computerChoice.innerHTML = `Albert chose ${computerSelection}!`;
        singleRound(playerSelection, computerSelection);
        score.innerHTML = (`Your score: ${score_player} <br> Albert's score: ${score_computer}`);
    //     // for(let i = 0; i < 5; i++) {
    //     // playerSelection = prompt ("Enter rock, paper, or scissors!");
    //     // playerSelection = playerSelection.toLowerCase();
        
        
    //     console.log(computerSelection);
    //     // console.log(`Computer chose: ${computerSelection}`);
        
    //     computerChoice.innerHTML = `Computer chose: ${computerSelection}`;
    //     singleRound(playerSelection, computerSelection);
    //     score.innerHTML = (`Player score: ${score_player} Computer score: ${score_computer}`);
    // }
        roundNumber.innerHTML = `Round Number ${current_round} of 5`;
        current_round++;
        if (current_round == 6)
        {
            if (score_player > score_computer)
            { 
                winnerLoser.showModal();
                winnerLoserText.innerHTML = ("YOU WIN!");
                winnerLoserButton.innerHTML = "YAY!!"
                return;
                }
            else if (score_computer > score_player)
            {
            winnerLoser.showModal();
            winnerLoserText.innerHTML = ("YOU LOST!");
            winnerLoserButton.innerHTML = ("OH NO!!");
            return;
            }
            else 
            {
            winnerLoser.showModal();
            winnerLoserText.innerHTML = ("IT'S A DRAW");
            winnerLoserButton.innerHTML = ("OK!");
            }
        }
}

startButton.addEventListener("click", () => {
    dialog1.showModal();
    startButton.style.display = "none";
    // Auto reset for multiple rounds
    current_round = 1;
    playerChoice.innerHTML = (``);
    computerChoice.innerHTML = (``);
    score.innerHTML = (``);
    roundWinner.innerHTML = ("");
    score_player = 0;
    score_computer = 0;
    roundNumber.innerHTML = `Round Number 1 of 5`;
});


introButton1.addEventListener("click", () => {
    dialog1.close();
    dialog2.showModal();
})

introButton2.addEventListener("click", () => {
    dialog1.close();
    current_round = 1;
    playerChoice.innerHTML = (``);
    computerChoice.innerHTML = (``);
    score.innerHTML = (``);
    roundWinner.innerHTML = ("");
    score_player = 0;
    score_computer = 1;
    roundNumber.innerHTML = `Round Number 1 of 5`;
    winnerLoser.showModal();
    winnerLoserText.innerHTML = ("YOU LOST!");
    winnerLoserButton.innerHTML = ("OH NO!!");
})


preludeButton1.addEventListener("click", () => {
    dialog2.close();
    dialog3.showModal();
})

preludeButton2.addEventListener("click",() => {
    dialog2.close();
    current_round = 1;
    playerChoice.innerHTML = (``);
    computerChoice.innerHTML = (``);
    score.innerHTML = (``);
    roundWinner.innerHTML = ("");
    score_player = 0;
    score_computer = 1;
    roundNumber.innerHTML = `Round Number 1 of 5`;
    winnerLoser.showModal();
    winnerLoserText.innerHTML = ("YOU LOST!");
    winnerLoserButton.innerHTML = ("OH NO!!");
})

rockButton.addEventListener("mousedown", () => {
    startGame("rock");
})
paperButton.addEventListener("mousedown", () => {
    startGame("paper");
})
scissorsButton.addEventListener("mousedown", () => {
    startGame("scissors");
})

winnerLoserButton.addEventListener("click", () => {
    dialog3.close();
    winnerLoser.close();
    if (score_player === score_computer)
    {
    dialog6.showModal();
    }
    else if (score_computer>score_player)
    {
    dialog5.showModal();
    }
    else 
    {
    dialog4.showModal();
    }
})

dratButton.addEventListener ("click", () => {
    dialog4.close();
    startButton.style.display="";
})

yayButton.addEventListener ("click", () => {
    dialog5.close();
    startButton.style.display="";
})

drawButton.addEventListener ("click", () => {
    dialog6.close();
    startButton.style.display="";
})

quitButton.addEventListener("click", () => {
    current_round = 1;
    playerChoice.innerHTML = (``);
    computerChoice.innerHTML = (``);
    score.innerHTML = (``);
    roundWinner.innerHTML = ("");
    score_player = 0;
    score_computer = 1;
    roundNumber.innerHTML = `Round Number 1 of 5`;
    winnerLoser.showModal();
    winnerLoserText.innerHTML = ("YOU LOST!");
    winnerLoserButton.innerHTML = ("OH NO!!");
})

