import Game from "./game.js";
import levels from "./game_levels.js";

const loadGame = () => {
  const game = Game.instance
  game.create(levels[0])
}

loadGame();