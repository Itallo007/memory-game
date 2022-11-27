import Game from "./game.js";

const loadGame = async () => {
  const game = new Game()
  game.create(20)
}

loadGame();