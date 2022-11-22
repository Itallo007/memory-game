import Game from "./game.js";

const loadGame = async () => {
  const game = new Game()
  game.create(30)
  console.log("Game.js")
}

loadGame();