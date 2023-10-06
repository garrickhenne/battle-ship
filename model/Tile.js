class Tile {
  constructor(coordinate, ship) {
    this._coordinate = coordinate;
    this._ship = ship || null;
  }

  hasShip() {
    return !!this._ship;
  }

  get ship() {
    return this._ship;
  }

  set ship(value) {
    this._ship = value;
  }

  set coordinate(value) {
    this._coordinate = value;
  }
  get coordinate() {
    return this._coordinate;
  }
}

module.exports = Tile;