import {getImagesName} from "./images_repository_services.js";
import Card from "./card.js";
import {start} from "./timer.js";

export default class Game {
  static instance;
  totalPars = 0;
  setOfCards = [];
  cardsRevealed = []
  totalOfParsFormed = 0;

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
    containerElement.style.gridTemplateColumns = `repeat(${columns}, 6rem)`;
    this.setOfCards.map(item => {
      containerElement.appendChild(item.htmlElement);
    })
  }

  revealCard(cardObj) {
    
    if(cardObj.isRevealed) {
      return
    }
    
    if(this.cardsRevealed.length < 2) {
      cardObj.isRevealed = true;
      cardObj.htmlElement.classList.add('reveal-card');
      this.cardsRevealed.push(cardObj);
    }
    
    if(this.cardsRevealed.length === 2) {
      setTimeout(this.checkMatching, 800);
    }
  }

  checkMatching = () => {
    let [cardObj1, cardObj2] = [...this.cardsRevealed];
  
    if(cardObj1.htmlElement.childNodes[0].style.backgroundImage === cardObj2.htmlElement.childNodes[0].style.backgroundImage) {
      this.cardsRevealed.map(item => {
        item.htmlElement.childNodes[0].style.filter = "grayscale(100%)";
      })
      this.totalOfParsFormed++
      this.cardsRevealed = []
      this.checkGame()
    } else {
      setTimeout(this.hiddenCards, 500)
    }
  }
  
  hiddenCards = () => {
    this.cardsRevealed.map(card => {
      card.hidden();
    })
    this.cardsRevealed = [];
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