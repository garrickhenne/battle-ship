const Ship = require('./Ship');

// A Submarine, which is 3 tiles long
class Submarine extends Ship {
  constructor(head, tail) {
    super(3, head, tail);
  }
}