import Game from "./game.js"

export default class Attempt {
  cards = []
  successful = false
  
  addCard(newCard) {
    if(this.cards.length < 2 && newCard) {
      this.cards.push(newCard)
      newCard.reveal()
    }

    if(this.cards.length === 2) {
      Game.instance.lockTheGame()
      this.check()
    }
  }
  
  check() {
    this.successful =  this.cards[0].htmlElement.childNodes[0].style.backgroundImage === this.cards[1].htmlElement.childNodes[0].style.backgroundImage

    if(this.successful) {
      this.cards.map(item => {
        setTimeout(() => {
          item.htmlElement.childNodes[0].style.filter = "grayscale(100%)";
        }, 400)
      })
      if(Game.instance.checkGame()) return;
      Game.instance.unlockTheGame()  
    } else {
      setTimeout(() => {
        this.cards.map(item => {
          item.hidden()
        })
        Game.instance.unlockTheGame()
      }, 700)
    }
    Game.instance.currentAttempt = null
  }
}