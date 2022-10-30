import {getImagesName} from "./images_repository_services.js";

let cardsRevealed = []

const createCards = async (numberOfPars) => {
  let images = await getImagesName(numberOfPars)
  let cards = []
  for(let i = 0; i < numberOfPars*2; i++) {
    cards.push(createCard(images[i]));
  }
  return cards
}

const createCard = (imageName) => {
  const card = createElementWithClass('div', 'card');
  const front = createElementWithClass('div', 'face front');
  const back = createElementWithClass('div', 'face back');
  card.addEventListener('click', revealCard);
  
  front.style.backgroundImage = `url('../images_repository/${imageName}')`
  
  card.appendChild(front);
  card.appendChild(back);
  
  return card;
}

const createElementWithClass = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const revealCard = ({target}) => {

  if(target.parentNode.className.includes('reveal-card')) {
    return
  }

  if(cardsRevealed.length < 2) {

    target.parentNode.classList.add('reveal-card');
    cardsRevealed.push(target.parentNode);
  }
  

  if(cardsRevealed.length === 2) {
    setTimeout(checkMatching, 1000);
  }
}

const checkMatching = () => {
  cardsRevealed.map((item) => {
    item.classList.remove("reveal-card");
  })
  cardsRevealed = []
}

export {createCards}

