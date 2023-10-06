const Ship = require('./Ship');

// A Cruiser, which is 3 tiles long
class Cruiser extends Ship {
  constructor(head, tail) {
    super('Cruiser', 3, head, tail);
  }
}

module.exports = Cruiser;