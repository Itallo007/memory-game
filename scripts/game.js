import {getImagesName} from "./images_repository_services.js";
import Card from "./card.js";
import {start} from "./timer.js";
import Attempt from "./attempt.js";

export default class Game {
  static instance;
  currentLevel = null;
  setOfCards = [];
  attempts = [];
  currentAttempt = null;

  constructor() {
    if(!Game.instance) {
      Game.instance = this;
    }

    return Game.instance;
  }

  create(level) {
    this.currentLevel = level;
    this.setOfCards = this.createCards();
    this.resetAttempts();
    this.mountGrid()
    start(level.limitTime, () => {
      window.confirm('Tempo esgotado')
      this.create(level)
    })
  }
  
  createCards = () => {
    let images = getImagesName(this.currentLevel.numberOfPars);
    let cards = []
    images.map(image => {
      cards.push(new Card(image));
    });
    return cards;
  }

  mountGrid = () => {
    let containerElement = document.querySelector('.container');
    containerElement.innerHTML = '';
    this.setOfCards.map(item => {
      containerElement.appendChild(item.htmlElement);
    })
  }

  revealCard(cardObj) {
    if(cardObj.isRevealed) {
      return
    }

    if(!this.currentAttempt) {
      this.currentAttempt = new Attempt();
      this.incrementAttempts();
      this.currentAttempt.addCard(cardObj);
    } else {
      this.currentAttempt.addCard(cardObj);
  
      if(this.currentAttempt.successful) {
        this.currentAttempt.cards.map(item => {
          setTimeout(() => {
            item.htmlElement.childNodes[0].style.filter = "grayscale(100%)";
          }, 400)
        })
        this.currentAttempt = null
        if (this.checkGame()) return
      } else {
        setTimeout(this.hiddenCards, 700)
      }
      this.checkExhaustedAttempts();
    }
  }
  
  hiddenCards = () => {
    this.currentAttempt.cards.map(card => {
      card.hidden();
    })
    this.currentAttempt = null;
  }

  incrementAttempts = () => {
    if(this.currentAttempt) {
      this.attempts.push(this.currentAttempt)
      document.getElementById("attCount").innerHTML = this.remainingAttempts
    }
  }

  resetAttempts = () => {
    this.currentAttempt = null;
    this.attempts = [];
    document.getElementById("attCount").innerHTML = this.currentLevel.numberOfAttempts;
  }

  checkGame = () => {
    if(this.totalOfParsFormed === this.currentLevel.numberOfPars) {
      setTimeout(() => {
        alert('You win!');
        this.create(this.currentLevel.next);
      }, 500);
      return true;
    }
    return false;
  }

  checkExhaustedAttempts = () => {
    if(this.remainingAttempts === 0) {
      window.confirm("Você não tem mais tentativas!");
      this.create(this.currentLevel);
      // setTimeout(() => {
      // }, 200)
    }
  }

  get totalOfParsFormed() {
    return this.attempts.filter(item => item.successful).length
  }

  get remainingAttempts() {
    return this.currentLevel.numberOfAttempts - this.attempts.length;
  }

}