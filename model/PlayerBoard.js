const Coordinate = require('./Coordinate');
const Tile = require('./Tile');
// Each player has a 10x10 board on which the player is able to place 5 ships:

// Each ship can be placed either horizontally or vertically on the board, and cannot be placed partially off the board.

// Each tile is denoted by a coordinate, A-J for columns and 1-10 for rows

// i.e. the top left corner would be at coordinate A1
// Each player then takes turns picking a tile on the opposing player’s grid, taking a shot at that tile.

// If the tile contains a ship, the shot is a HIT
// If the tile does not contain a ship, the shot is a MISS
// A ship is sunk if all the tiles for that ship have been marked as a HIT.

// The game ends when one player has sunk all of the opposing players ships.

class PlayerBoard {
  constructor() {
    this._board = this.createBoard();
    // Health is the sum of all battleships that havnt been hit.
    // Player always starts with 5 ships, 1 of each type.
    // This could probably be changed and implemented somewhere else in the future.
    this._health = 17;
  }

  // Creates a 10x10 board matrix.
  createBoard() {
    let bd = [];

    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        const tile = new Tile(new Coordinate(i, j));
        row.push(tile);
      }
      bd.push(row);
    }

    return bd;
  }

  thisPlayerHit() {
    this._health--;
  }

  // Returns an object representing if the tile was already shot, and if there was a ship there or not.
  // Else, register shot to tile and return object representing if ship was shot there.
  registerShot(coordinate) {
    const tile = this.board[coordinate.x][coordinate.y];
    if (tile.wasChosen) {
      return { alreadyChosen: true, hitShip: !!tile.ship };
    }

    tile.choose();
    this.thisPlayerHit();
    return { alreadyChosen: false, hitShip: !!tile.ship };
  }

  // Ships is an array of ship classes.
  initShips(ships) {
    // TODO:
  }

  // ship: ship type
  // head: coordinate
  // tail: coordinate
  addShip(ship, head, tail) {
    const isPlacedHorizontal = (head, tail) => {
      return head.x === tail.x;
    };

    const placeHorizontal = (ship, head) => {
      let length = ship.size;
      let index = head.y;
      let next = this.board[head.x][index];
      while (length) {
        if (next.ship) {
          throw Error('Ship is already placed here.');
        }
        next.ship = ship;

        index++;
        next = this.board[head.x][index];
        length--;
      }
    };

    const placeVertical = (ship, head) => {
      let length = ship.size;
      let index = head.x;
      let next = this.board[index][head.y];
      while (length) {
        if (next.ship) {
          throw Error('Ship is already placed here.');
        }
        next.ship = ship;

        index++;
        next = this.board[index][head.y];
        length--;
      }
    };

    if (isPlacedHorizontal(head, tail)) {
      placeHorizontal(ship, head);
      return;
    }

    placeVertical(ship, head);
  }

  // Prints the boards coordinates
  // TODO: Mainly for dev purposes, can probably delete function later on or adapt to new.
  printCoordinates() {
    let rtn = [];
    for (let i = 0; i < this.board.length; i++) {
      const row = [];
      for (let j = 0; j < this.board[i].length; j++) {
        const boardPiece = this.board[i][j].coordinate;
        row.push({ row: boardPiece.x.toXCoordinate(), column: boardPiece.y.toYCoordinate() });
      }
      rtn.push(row);
    }

    return rtn;
  }

  get health() {
    return this._health;
  }

  get board() {
    return this._board;
  }

  set board(value) {
    this._board = value;
  }
}

module.exports = PlayerBoard;