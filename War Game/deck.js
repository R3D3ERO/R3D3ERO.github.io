const ARCHETYPE = ["♠", "♣", "♥", "♦"]
const YUGIOH = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",]




export default class Deck {
constructor(cards = freshDeck()) {
	this.cards = cards
  }

  get numberofCards() {
  	return this.cards.length
  }
    shuffle() {
  	for (let i = this.numberofCards - 1; i > 0; i--) {
  		const newIndex = Math.floor (Math.random() * (i + 1))
  		const oldValue = this.cards[newIndex]
  		this.cards[newIndex] = this.cards[i]
  		this.cards[i] = oldValue
  	}
  }
}
 class Card {
constructor(archetype, yugioh) {
  this.archetype = archetype
  this.yugioh = yugioh 
  }
  get color(){
    return this.suit ==='♣' || this.archetype === '♠' ? 'black' : 'red'
  }

  getHTML()
  {
    const cardDiv = document.createElement('div')
    cardDiv.innertext = this.archetype
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.archetype = ${this.archetype} ${this.yugioh}
    return cardDiv
  }
}



function freshDeck() {
return ARCHETYPE.flatmap(archetype => {
return YUGIOH.map(yugioh => {
return new Card(archetype, yugioh)
   })
 })
}