function playRound(playerSelection, computerSelection)
{
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    roundWinner = roundResult(playerChoice, computerChoice);
    console.log(computerChoice);
    console.log(playerChoice);
    console.log(roundWinner);
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



playRound();