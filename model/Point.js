class Point {
  constructor(point) {
    if (point > 9 || point < 0 || typeof point !== 'number') {
      throw Error('Point is not valid.');
    }
    this._point = point;
  }

  get point() {
    return this._point;
  }

  // [1, 9]
  toXCoordinate() {
    return this._point + 1;
  }

  // [A, J]
  toYCoordinate() {
    return (this._point + 10).toString(36).toUpperCase();
  }
}

module.exports = Point;