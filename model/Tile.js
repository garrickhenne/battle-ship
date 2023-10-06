class Tile {
  constructor(coordinate, ship) {
    this._coordinate = coordinate;
    this._ship = ship || null;
    this._chosen = false;
  }

  hasShip() {
    return !!this._ship;
  }

  get wasChosen() {
    return this._chosen;
  }

  choose() {
    this._chosen = true;
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