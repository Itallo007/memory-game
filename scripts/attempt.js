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
    this.successful =  this.cards[0].htmlElement.id === this.cards[1].htmlElement.id

    if(this.successful) {
      this.cards.map(item => {
        setTimeout(() => {
          item.htmlElement.childNodes[0].style.filter = "grayscale(100%)";
        }, 400)
      })
      Game.instance.incrementCombo();
      if(Game.instance.checkGame()) return;
      Game.instance.unlockTheGame()  
    } else {
      Game.instance.updateScore();
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