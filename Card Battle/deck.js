const SUITS = ["@", "$", "%", "&"]
const VALUES= ["A","2","3","4","5","6","7","8","9","10","J","Q","K",]




export default class Deck {
constructor(cards = freshDeck()) {
	this.cards = cards
  }

  get numberofCards() {
  	return this.cards.length
  }
	 pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
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
constructor(suit, value) {
  this.suit = suit
  this.value = value 
  }
  get color(){
    return this.suit ==='$' || this.archetype === '@' ? 'black' : 'red'
  }

  getHTML()
  {
    const cardDiv = document.createElement("div")
    cardDiv.innertext = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.suit} ${this.value}`
    return cardDiv
  }
}



function freshDeck() {
return SUITS.flatmap(suit => {
return VALUES.map(value => {
return new Card (suit, value)
   })
 })
}
