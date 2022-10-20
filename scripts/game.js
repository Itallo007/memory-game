gameSettings = {
  pars: 10
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

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', ({target}) => {
    target.parentNode.classList.toggle('reveal-card');
    console.log(target.parentNode)
  });

  return card;
}

const loadGame = () => {
  containerElement = document.querySelector('.container');
  for(let i = 0; i < gameSettings.pars*2; i++) {
    containerElement.appendChild(createCard());
  }
}

loadGame();
