
export default class Attempt {
  cards = []
  successful = false
  
  addCard(newCard) {
    if(this.cards.length < 2 && newCard) {
      this.cards.push(newCard)
      newCard.reveal()
    }

    if(this.cards.length === 2) {
      this.check()
    }
  }
  
  check() {
    this.successful =  this.cards[0].htmlElement.childNodes[0].style.backgroundImage === this.cards[1].htmlElement.childNodes[0].style.backgroundImage

    return this.successful
  }
}