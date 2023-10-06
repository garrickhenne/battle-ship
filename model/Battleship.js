const Ship = require('./Ship');

// A Battleship, which is 4 tiles long
class Battleship extends Ship {
  constructor(head, tail) {
    super(4, head, tail);
  }
}