import {getImagesName} from "./images_repository_services.js";
import Card from "./card.js";
import {start} from "./timer.js";
import Attempt from "./attempt.js";

export default class Game {
  static instance;
  totalPars = 0;
  setOfCards = [];
  cardsRevealed = [];
  totalOfParsFormed = 0;
  totalAttempts = [];
  currentAttempt = null;

  constructor() {
    if(!Game.instance) {
      Game.instance = this;
    }

    return Game.instance;
  }

  create(totalPars) {
    this.totalPars = totalPars;
    this.totalOfParsFormed = 0;
    this.setOfCards = this.createCards();
    this.totalOfParsFormed = 0;
    let columns = totalPars <= 20 ? 8 : 10;
    this.mountGrid(columns)
    start()
  }
  
  createCards = () => {
    let images = getImagesName(this.totalPars);
    let cards = []
    images.map(image => {
      cards.push(new Card(image));
    });
    return cards;
  }

  mountGrid = (columns) => {
    let containerElement = document.querySelector('.container');
    containerElement.innerHTML = '';
    // containerElement.style.gridTemplateColumns = `repeat(${columns}, minmax(3rem, 6rem))`;
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

  checkMatching = () => {
    let [cardObj1, cardObj2] = [...this.cardsRevealed];
  
    if(cardObj1.htmlElement.childNodes[0].style.backgroundImage === cardObj2.htmlElement.childNodes[0].style.backgroundImage) {
      this.cardsRevealed.map(item => {
        setTimeout(() => {
          item.htmlElement.childNodes[0].style.filter = "grayscale(100%)";
        }, 400)
      })
      this.totalOfParsFormed++
      this.cardsRevealed = []
      this.checkGame()
    } else {
      setTimeout(this.hiddenCards, 700)
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
    if(this.totalOfParsFormed === this.totalPars) {
      setTimeout(() => {
        alert('You win!');
        this.create(this.totalPars);
      }, 300);
    }
  }

}