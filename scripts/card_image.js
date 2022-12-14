import Card from "./card.js";

export default class CardImage extends Card {
  constructor(imageName) {
    super(imageName);
    this.htmlElement = this.create(imageName);
  }
  create = (imageName) => {
    const card = this.createElementWithClass('div', 'card');
    const front = this.createElementWithClass('div', 'face front');
    const back = this.createElementWithClass('div', 'face back');
    card.addEventListener('click', this.handleClick);
    
    front.style.backgroundImage = `url('images_repository/${imageName}')`

    let name = imageName.replace('.png', '');
    card.id = name;
    
    card.appendChild(front);
    card.appendChild(back);
    
    return card;
  }  
}