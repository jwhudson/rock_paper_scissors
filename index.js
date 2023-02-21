const buttons = document.querySelectorAll(".player-side .box");
const gameText = document.querySelector(".game-text");
const gameScore = document.querySelector(".game-score");

buttons.forEach((button) => {
    button.addEventListener('click', function() { playRound(this)});
});


let playerScore = 0;
let computerScore = 0;

welcomeMessage();

async function playRound(playerChoice)
{
    playerChoice = playerMove(playerChoice.className);
    console.log(playerChoice);
    computerChoice = getComputerChoice();
    roundWinner = roundResult(playerChoice, computerChoice);
    declareRoundWinner(roundWinner);
    if(roundWinner === "player")
    {
        playerScore += 1;
    }
    if(roundWinner === "computer")
    {
        computerScore += 1;
    }
    updateGameScore(playerScore, computerScore);
    if(isGameOver(playerScore, computerScore))
    {
        await gameResults(playerScore, computerScore);
        playerScore = 0;
        computerScore = 0;
        welcomeMessage();
    }
}

function getComputerChoice()
{
    let output = "";
    let rng =  Math.floor(Math.random() * 3);
    
    if(rng === 1)
    {
        output = "rock";
    }
    else if(rng === 2)
    {
        output = "paper";
    }
    else 
    {
        output = "scissors";
    }
    return output;
}

function playerMove(inputString)
{
    let inputArr = inputString.split(" ");
    return inputArr[1];
}

function roundResult(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection)
    {
        return "draw";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper"))
    {
        return "player";
    }
    else
    {
        return "computer";
    }
}

function declareRoundWinner(roundWinner)
{
    if(roundWinner == "computer")
    {
        gameText.textContent = gameMessages(5);
    }
    else if(roundWinner == "player")
    {
        gameText.textContent = gameMessages(4);
    }
    else
    {
        gameText.textContent = gameMessages(6);
    }
}

async function welcomeMessage()
{
    gameScore.textContent = "0 - 0";
    gameText.textContent = gameMessages(1);
    await justASecond();
    gameText.textContent = gameMessages(2);
    await justASecond();
    gameText.textContent = gameMessages(3);
}

function isGameOver(playerScore, computerScore)
{
    if(playerScore === 5 || computerScore === 5)
    {
        return true;
    }
    else
    {
        return false;
    }
}

async function gameResults(playerScore, computerScore)
{
    if(playerScore > computerScore)
    {
        gameText.textContent = gameMessages(7);
        await justASecond();
    }
    else
    {
        gameText.textContent = gameMessages(8);
        await justASecond();
    }
}

async function justASecond()
{
    await new Promise(resolve => setTimeout(resolve, 3000));
}

function updateGameScore(playerScore, computerScore)
{
    let outputMessage = `${playerScore} - ${computerScore}`;
    gameScore.textContent = outputMessage;
}

function gameMessages(lastAction)
{
    let outputMessage = "";
    switch(lastAction) {
        case 1:
            outputMessage = "Welcome to Rock, Paper, Scissors!";
            break;
        case 2:
            outputMessage = "You'll be up against the computer. First to 5 wins!";
            break;
        case 3:
            outputMessage = "Make your choice..";
            break;
        case 4:
            outputMessage = "You won that round!";
            break;
        case 5:
            outputMessage = "Computer wins this round..";
            break;
        case 6:
            outputMessage = "It's a draw";
            break;
        case 7:
            outputMessage = "You won that game!";
            break;
        case 8:
            outputMessage = "Computer wins the game..";
            break;
    }
    return outputMessage;
}



