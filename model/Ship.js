class Ship {

  // size: number
  // head: first coordinate
  // tail: last coordinate
  constructor(name, size, head, tail) {
    this._size = size;
    this._head = head;
    this._tail = tail;
    this._name = name;
  }

  get size() {
    return this._size;
  }

  get name() {
    return this._name;
  }
}

module.exports = Ship;