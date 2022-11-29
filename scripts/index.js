import Game from "./game.js";
import levels from "./game_levels.js";

const loadGame = async () => {
  const game = new Game()
  game.create(levels[0])
}

loadGame();