import Deck from "./deck.js"

const comCardSlot = document.querySelector('.computer-card-slot')

const deck = new Deck()
deck.shuffle()


computerCardSlot.appendChild(deck.cards[0].getHTML())