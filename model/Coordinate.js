const Point = require('./Point');

class Coordinate {
  // x denotes row [1-10] by number.
  // y denotes column [A-J] by number.
  constructor(x, y) {
    this._x = new Point(x);
    this._y = new Point(y);
  }

  get x() {
    return this._x.point;
  }

  get y() {
    return this._y.point;
  }

  toXCoordinate() {
    return this.x.toXCoordinate();
  }

  toYCoordinate() {
    return this.y.toYCoordinate();
  }
}

module.exports = Coordinate;