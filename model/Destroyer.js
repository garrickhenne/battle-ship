const Ship = require('./Ship');

// A Destroyer, which is 2 tiles long;
class Destroyer extends Ship {
  constructor(head, tail) {
    super('Destroyer', 2, head, tail);
  }
}

module.exports = Destroyer;