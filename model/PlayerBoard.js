// Each player has a 10x10 board on which the player is able to place 5 ships:

// A Carrier, which is 5 tiles long
// A Battleship, which is 4 tiles long
// A Cruiser, which is 3 tiles long
// A Submarine, which is 3 tiles long
// A Destroyer, which is 2 tiles long
// Each ship can be placed either horizontally or vertically on the board, and cannot be placed partially off the board.

// Each tile is denoted by a coordinate, A-J for columns and 1-10 for rows

// i.e. the top left corner would be at coordinate A1
// Each player then takes turns picking a tile on the opposing player’s grid, taking a shot at that tile.

// If the tile contains a ship, the shot is a HIT
// If the tile does not contain a ship, the shot is a MISS
// A ship is sunk if all the tiles for that ship have been marked as a HIT.

// The game ends when one player has sunk all of the opposing players ships.
const Coordinate = require('./Coordinate');

class PlayerBoard {
  constructor() {
    this._board = this.createBoard();
  }

  // Creates a 10x10 board matrix.
  createBoard() {
    let bd = [];

    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push({ coordinate: new Coordinate(i, j) });
      }
      bd.push(row);
    }

    return bd;
  }

  addShip(ship, from, to) {

  }

  // Prints the boards coordinates
  // TODO: Mainly for dev purposes, can probably delete function later on or adapt to new.
  printCoordinates() {
    let rtn = [];
    for (let i = 0; i < this.board.length; i++) {
      const row = [];
      for (let j = 0; j < this.board[i].length; j++) {
        const boardPiece = this.board[i][j].coordinate;
        row.push({ row: boardPiece.x, column: boardPiece.y });
      }
      rtn.push(row);
    }

    return rtn;
  }

  get board() {
    return this._board;
  }

  set board(value) {
    this._board = value;
  }
}

module.exports = PlayerBoard;