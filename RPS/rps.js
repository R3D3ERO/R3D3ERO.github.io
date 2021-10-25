const userScore = 0;
const compScore = 0;
const userscore_span = document.getElementByID ("user-score");
const compscore_span = document.getElementByID ("comp-score");
const scoreBoard_div = document.querySelector("Score-Board");;
const results_div = document.querySelector ("results");
const rock_div = document.getElementByID ("r");
const paper_div = document.getElementByID ("p");
const scissor_div = document.getElementByID ("s");

rock_div.addEventListener('click',function() {
	console.log("click on rock");
})

paper_div.addEventListener('click',function() {
	console.log("click on rock");
})

scissor_div.addEventListener('click',function() {
	console.log("click on rock");
})