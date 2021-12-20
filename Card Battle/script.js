import Deck from "./deck.js"

const CARD_VALUE_MAP = {
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	"9": 9,
	"10": 10,
	"J": 11,
	"Q": 12,
	"K": 13,
}

const comCardSlot = document.querySelector(".com-card-slot")
const CardSlot = document.querySelector(".player-card-slot")
const comDeckElement = document.querySelector('.com-deck')
const playerDeckElement = document.querySelector('.player-Deck')
const text = document.querySelector('.text')


let playerDeck, comDeck, inRound, stop


document.addEventListener ('click',() =>) {
 if(stop){
 	startGame()
 	return
 }
 if(inRound) {
 	cleanBeforeRound ()
 } else {
 	flipcards
 }
}

startGame()
function startGame(){
	const deck = new Deck()
	deck.shuffle()



const deckMid = math.ceil(deck.numberOfCards / 2)
playerDeck = new Deck(deck.cards.slice(0,deckMid))
comdeck = new deck (deck.cards.slice(deckMid,deck.numberOfCards))
inRound = false
stop = false

cleanBeforeRound()
}

function cleanBeforeRound() {
	inRound = false
	comCardSlot.innerHTML = ''
	playerCardSlot.innerHTML =''
	text.innerText = ''

	updateDeckCount ()

}

function flipcards (){
	inRound = true
	const playerCard= playerDeck.pop()
	const comCard= comDeck.pop()
	playerCardSlot.appendChild(playerCard.html())
	comCardSlot.appendChild(comCard.getHTML())

	updateDeckCount()
	if (isRoundWinner(playerCard, comCard)) {
		text.innerText="win"
		playerDeck.push(playerCard)
		playerDeck.push(comCard)
 } else if (isRoundWinner(comCard,playerCard)) {
 	text.innerText ="lose"
 	comDeck.push(playerCard)
 	comDeck.push(comCard)
 } else {
 	text.innerText = "Draw"
 	playerDeck.push (playerCard)
 	comDeck.push(comCard)
 }

 if(isGameOver(playerDeck)){
 	text.innerText ='You Lose'
 	stop = true
  } else if (isGameOver(computerDeck)) {
  	text.innerText = 'You Win'
  	stop = True
  }
}

function updateDeckCount() {
	comDeckElement.innerText = comdeck.numberOfCards
	playerDeckElement.innerText = playerDeck.numberOfCards
}

function isRoundWinner ( cardOne, cardTwo) {
	return CARD_VALUE_MAP [cardOne.value] > CARD_VALUE_MAPP [cardTwo.Value]
}

function isGameOver (deck) {
	return deck.numberOfCards === 0
}

console.log(playerDeck)
console.log(computer deck)

computerCardSlot.appendChild(deck.cards[0].getHTML())