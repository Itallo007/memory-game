import Card from "./card.js";

export default class CardText extends Card {
  constructor(imageName) {
    super(imageName);
    this.htmlElement = this.create(imageName);
  }
  create = (imageName) => {
    const card = this.createElementWithClass('div', 'card');
    const front = this.createElementWithClass('div', 'face front');
    const back = this.createElementWithClass('div', 'face back');
    card.addEventListener('click', this.handleClick);

    let name = imageName.replace('.png', '');
    card.id = name;

    let str = name.replace(/^a-z/, /A-Z/).replace('_', ' ');
    let span = document.createElement('span');
    span.innerHTML = str;

    front.appendChild(span);
    
    card.appendChild(front);
    card.appendChild(back);
    
    return card;
  }
}