const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    genrateComputerChoice();
    getResult();
}))

function genrateComputerChoice()
{
    const randomNumber =Math.floor(Math.random() * possibleChoices.length)+1// or 3;
    if(randomNumber===1)
    {
        computerChoice='rock'
    }
    if(randomNumber===2)
    {
        computerChoice='sizer'
    }
    if(randomNumber===3)
    {
        computerChoice='paper'
    }
    computerChoiceDisplay.innerHTML=computerChoice;
    

}
function getResult()
{
    if(computerChoice===userChoice)
    {
        result='its a Draw!';
    }
    if(computerChoice==='rock' && userChoice==='paper')
    {
        result='You Won!';
    }
    if(computerChoice==='rock' && userChoice==='sizer')
    {
        result='You lost!';
    }
    if(computerChoice==='paper' && userChoice==='rock')
    {
        result='You lost!';
    }
    if(computerChoice==='paper' && userChoice==='sizer')
    {
        result='You Won!';
    }
    if(computerChoice==='sizer' && userChoice==='paper')
    {
        result='You lost!';
    }
    if(computerChoice==='sizer' && userChoice==='rock')
    {
        result='You Won!';
    }
    resultDisplay.innerHTML=result;

}