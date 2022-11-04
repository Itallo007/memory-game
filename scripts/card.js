import Game from "./game.js";

export default class Card {
  constructor(imageName) {
    this.isRevealed = false;
    this.isMatched = false;
    this.htmlElement = this.#create(imageName);
  }

  #create = (imageName) => {
    const card = this.#createElementWithClass('div', 'card');
    const front = this.#createElementWithClass('div', 'face front');
    const back = this.#createElementWithClass('div', 'face back');
    card.addEventListener('click', this.#reveal);
    
    front.style.backgroundImage = `url('../images_repository/${imageName}')`
    
    card.appendChild(front);
    card.appendChild(back);
    
    return card;
  }

  #createElementWithClass = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  #reveal = ({target}) => {
    new Game().revealCard(this);
  }

  hidden = () => {
    this.isRevealed = false;
    this.htmlElement.classList.remove("reveal-card");
  }
}