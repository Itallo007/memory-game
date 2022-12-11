import {getImagesName} from "./images_repository_services.js";
import Card from "./card.js";
import {start} from "./timer.js";
import Attempt from "./attempt.js";

export default class Game {
  static #instance;
  currentLevel = null;
  setOfCards = [];
  attempts = [];
  currentAttempt = null;
  #score = 0;
  #comboCount = 0;
  #combo = 0;

  create(level) {
    this.#resetScore();
    this.#resetCombo();
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

  incrementCombo = () => {
    this.#comboCount++;
    this.#combo = (this.#comboCount * this.#comboCount) * 10
    document.querySelector('#comboCount').innerHTML = this.#combo
  }

  #resetCombo = () => {
    this.#combo = 0
    this.#comboCount = 0
    document.querySelector('#comboCount').innerHTML = this.#combo
  }

  updateScore = () => {
    this.#score += this.#combo
    document.querySelector('#scoreCount').innerHTML = this.#score
    this.#resetCombo()
  }

  #resetScore = () => {
    this.#score = 0
    document.querySelector('#scoreCount').innerHTML = this.#score
  }

  addCardToCurrentAttempt = (cardObj) => {
    if(!this.currentAttempt) {
      this.currentAttempt = new Attempt();
      this.incrementAttempts();
    } 
    this.currentAttempt.addCard(cardObj);
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
      this.updateScore();
      return true;
    }
    return false;
  }

  checkExhaustedAttempts = () => {
    if(this.remainingAttempts === 0) {
      window.confirm("Você não tem mais tentativas!");
      this.create(this.currentLevel);
      return false;
    }
    return true;
  }

  lockTheGame = () => {
    document.querySelector(".container").style.pointerEvents = "none";
  }

  unlockTheGame = () => {
    if(this.checkExhaustedAttempts()) {
      document.querySelector(".container").style.pointerEvents = "auto";
    }
  }

  static get instance() {
    if(!Game.#instance) {
      Game.#instance = new Game();
    }

    return Game.#instance;
  }

  get totalOfParsFormed() {
    return this.attempts.filter(item => item.successful).length
  }

  get remainingAttempts() {
    return this.currentLevel.numberOfAttempts - this.attempts.length;
  }

}