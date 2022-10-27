gameSettings = {
  pars: 10,
  cardsRevealed: []
}

const createElementWithClass = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCard = () => {
  const card = createElementWithClass('div', 'card');
  const front = createElementWithClass('div', 'face front');
  const back = createElementWithClass('div', 'face back');
  card.addEventListener('click', revealCard);

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

const revealCard = ({target}) => {

  if(target.parentNode.className.includes('reveal-card')) {
    return
  }
  
  target.parentNode.classList.add('reveal-card');
  gameSettings.cardsRevealed.push(target.parentNode);

  console.log(gameSettings.cardsRevealed)
  // console.log(target.parentNode.classList)
  

  if(gameSettings.cardsRevealed.length === 2) {
    setTimeout(checkMatching, 1000);
  }

  // console.log(gameSettings.cardsRevealed)

}

const checkMatching = () => {
  gameSettings.cardsRevealed.map((item) => {
    console.log(item)
    item.classList.remove("reveal-card");
  })
  gameSettings.cardsRevealed = []

}

const loadGame = () => {
  containerElement = document.querySelector('.container');
  for(let i = 0; i < gameSettings.pars*2; i++) {
    containerElement.appendChild(createCard());
  }
}

loadGame();
