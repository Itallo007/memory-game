import {getImagesName} from "./images_repository_services.js";
import Card from "./card.js";
import {start} from "./timer.js";
import Attempt from "./attempt.js";

export default class Game {
  static instance;
  currentLevel = null;
  setOfCards = [];
  totalOfParsFormed = 0;
  totalAttempts = [];
  currentAttempt = null;

  constructor() {
    if(!Game.instance) {
      Game.instance = this;
    }

    return Game.instance;
  }

  create(level) {
    this.currentLevel = level;
    this.totalOfParsFormed = 0;
    this.setOfCards = this.createCards();
    this.mountGrid()
    start()
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
      this.incrementTotalAttempts();
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
        this.totalOfParsFormed++
        this.checkGame()
      } else {
        setTimeout(this.hiddenCards, 700)
      }
    }
  }
  
  hiddenCards = () => {
    this.currentAttempt.cards.map(card => {
      card.hidden();
    })
    this.currentAttempt = null;
  }

  incrementTotalAttempts = () => {
    if(this.currentAttempt) {
      this.totalAttempts.push(this.currentAttempt)
      document.getElementById("attCount").innerHTML = this.totalAttempts.length
    }
  }

  checkGame = () => {
    if(this.totalOfParsFormed === this.currentLevel.numberOfPars) {
      setTimeout(() => {
        alert('You win!');
        this.create(this.currentLevel.next);
      }, 300);
    }
  }

}