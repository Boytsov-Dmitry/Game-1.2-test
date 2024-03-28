import defaultGame, 
    { GameSavingData, 
    readGameSaving as loadGame, 
    writeGameSaving as saveGame } 
from './Game/game.js';


const game = new Game();
game.start();