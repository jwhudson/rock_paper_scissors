function playRound(playerSelection, computerSelection)
{
    computerChoice = getComputerChoice();
    playerChoice = getplayerChoice();
    roundWinner = roundResult(playerChoice, computerChoice);
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
    validInput = validateInput(input);

    while(!ValidInput)
    {
        console.log("Sorry that isn't valid input.");
        input = prompt("Enter a choice: (rock/paper/scissors): ");
        validInput = validateInput(input);
    }
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

function roundResult(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection)
    {
        return "draw";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissor") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissor" && computerSelection === "paper"))
    {
        return "player";
    }
    else
    {
        return "computer";
    }
}