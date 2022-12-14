import Game from "./game.js";

export default class CardImage {
  constructor(imageName) {
    this.isRevealed = false;
    this.isMatched = false;
    // this.htmlElement = this.create(imageName);
  }

  createElementWithClass = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  handleClick = () => {
    if(this.isRevealed) return;
    Game.instance.addCardToCurrentAttempt(this);
  }

  reveal = () => {
    this.isRevealed = true;
    this.htmlElement.classList.add("reveal-card");
  }

  hidden = () => {
    this.isRevealed = false;
    this.htmlElement.classList.remove("reveal-card");
  }
}