import {getImagesName} from "./images_repository_services.js";

let cardsRevealed = []
let parsMatched = 0
let totalPars = 0

const createCards = async (numberOfPars) => {
  let images = await getImagesName(numberOfPars)
  totalPars = numberOfPars
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
    setTimeout(checkMatching, 800);
    // checkMatching();
  }
}

const hiddenCards = (cards) => {
  cards.map((item) => {
    item.classList.remove("reveal-card");
  })
}

const checkMatching = () => {
  let [card1, card2] = cardsRevealed

  if(cardsRevealed[0].childNodes[0].style.backgroundImage === cardsRevealed[1].childNodes[0].style.backgroundImage) {
    cardsRevealed.map(item => {
      item.childNodes[0].style.filter = "grayscale(100%)";
    })
    parsMatched++
    checkGame()
  } else {
    setTimeout(hiddenCards(cardsRevealed), 500)
  }
  cardsRevealed = []
}

const checkGame = () => {
  if(parsMatched === totalPars) {
    alert("You win!");
  }
}

export {createCards}

