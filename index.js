function playRound()
{
    welcomeMessage();
    playerScore = 0;
    computerScore = 0;
    while(!isGameOver(playerScore, computerScore))
    {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        roundWinner = roundResult(playerChoice, computerChoice);
        declareRoundWinner(playerChoice, computerChoice, roundWinner);
        if(roundWinner === "player")
        {
            playerScore += 1;
        }
        if(roundWinner === "computer")
        {
            computerScore += 1;
        }
    }
    gameResults(playerScore, computerScore);
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

function getPlayerChoice()
{
    input = prompt("Enter a choice: (rock/paper/scissors): ");
    input = formatInput(input);
    validInput = validateInput(input);
    
    while(!validInput)
    {
        console.log("Sorry that isn't valid input.");
        input = prompt("Enter a choice: (rock/paper/scissors): ");
        input = formatInput(input);
        validInput = validateInput(input);
    }
    
    return input;
}

function validateInput(input)
{
    
    if(input == "rock" || input === "paper" || input === "scissors")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function formatInput(input)
{
    output = input.toLowerCase();
    return output;
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

function declareRoundWinner(playerChoice, computerChoice, roundWinner)
{

    console.log("The computer chose: " + computerChoice);
    console.log("You chose: " + playerChoice);

    if(roundWinner === "draw")
    {
        console.log("This round was a draw!");
    }
    else if (roundWinner === "player")
    {
        console.log("You won this round!");
    }
    else
    {
        console.log("The computer wins this round!");
    }
}

function welcomeMessage()
{
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("You'll be up agaisnt the computer, first one to win five rounds wins!");
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

function gameResults(playerScore, computerScore)
{
    console.log("The game is over!");
    if(playerScore > computerScore)
    {
        console.log("You win!");
    }
    else
    {
        console.log("Computer wins!");
    }
    console.log("Final score: " + playerScore + " - " + computerScore);
}
// playRound();

