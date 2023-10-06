const Ship = require('./Ship');

// A Carrier, which is 5 tiles long
class Carrier extends Ship {
  constructor(head, tail) {
    super(5, head, tail);
  }
}

module.exports = Carrier;