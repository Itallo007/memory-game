import {createCards} from "./card.js";

const mountGrid = (cards) => {
  let containerElement = document.querySelector('.container');
  cards.map(item => {
    containerElement.appendChild(item);
  })
}

const loadGame = async () => {
  mountGrid(await createCards(10))
  
}

loadGame();
