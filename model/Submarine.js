const Ship = require('./Ship');

// A Submarine, which is 3 tiles long
class Submarine extends Ship {
  constructor(head, tail) {
    super('Submarine', 3, head, tail);
  }
}

module.exports = Submarine;