const PlayerBoard = require('./PlayerBoard');

class Game {
  // Creates a game with two player boards
  constructor(player1Ships, player2Ships) {
    this.player1 = new PlayerBoard();
    this.player1.initShips(player1Ships);

    this.player2 = new PlayerBoard();
    this.player2.initShips(player2Ships);
  }
}

module.exports = Game;