let userScore = 0;
let compScore = 0;
const userscore_span = document.getElementById("userscore");
const  compscore_span = document.getElementById("compscore");
const  ScoreBoard_div = document.querySelector(".ScoreBoard");;
const  results_p = document.querySelector (".results > p");
const  rock_div = document.getElementById ("r");
const  paper_div = document.getElementById ("p");
const  scissor_div = document.getElementById ("s");
/* Code to link to the html document to js app*/


function getComputerChoice() {
const choices = ['r','p','s']
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
} /* Code to randomize the choices of the computer*/

function toword(letter){
	if (letter==="r") return "Rock";
    if (letter==="p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerchoice) {
	userScore++;
	userscore_span.innerHTML=userScore;
	compscore_span.innerHTML = compScore;
	results_p.innerHTML = toword(userChoice) + " beats " + toword(computerchoice) + " Round Win ";
} /* Code to output result screen if the player wins*/


function lose(userChoice, computerchoice){
compScore++;
	userscore_span.innerHTML=userScore;
	compscore_span.innerHTML = compScore;
	results_p.innerHTML = toword(userChoice) + " loses to " + toword(computerchoice) + " Round Lost ";
}/* Code to output result screen if the player loses*/


function draw(userChoice, computerchoice){
	
	results_p.innerHTML = toword(userChoice) + " same hand " + toword(computerchoice) + " Round Draw ";
} /* Code to output result screen if game ends in draw*/

function game(userChoice) {
 const computerchoice =getComputerChoice();
 switch (userChoice + computerchoice) {
 case "rs":
 case "pr":
 case "sp":
 win(userChoice,computerchoice);
 break;
case "rp":
case "ps":
case "sr":
 lose(userChoice,computerchoice);
break;
case "rr":
case "pp":
case "ss":
 draw(userChoice,computerchoice);
 }
} /* Code to output every possible scenario between the player and the computer*/ 

function main() {
rock_div.addEventListener('click', function() {
	game("r");
})

paper_div.addEventListener('click', function() {
	game("p");
})

scissor_div.addEventListener('click', function(){
	game("s");
})

}

main();