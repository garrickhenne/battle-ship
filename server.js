const express = require('express');
const morgan = require('morgan');
// const PlayerBoard = require('./model/PlayerBoard');
const Battleship = require('./model/Battleship');
// const Coordinate = require('./model/Coordinate');
const { initGame } = require('./util/GameFactory');
const Coordinate = require('./model/Coordinate');
const { createShip } = require('./util/ShipFactory');
const path = require('path');

const app = express();
const PORT = 10001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// db for game, move to own file later.
let game;

app.get('/', (req, res) => {
  game = initGame();
  // const head = new Coordinate(0, 0);
  // const tail = new Coordinate(0, 4);
  // const battleship = new Battleship(head, tail);
  // newGame.player1.addShip(battleship, head, tail);
  // renderBoard(newGame.player1.board);
  res.sendFile(path.join(__dirname, 'public', 'views', 'home.html'));
});

app.post('/ship/:coordinate', (req, res) => {
  // body is a json object of player, ship, head, tail.
  const reqObj = JSON.parse(req.body);
  const { shipName, player, head, tail } = reqObj;
  const ship = createShip(ship, head, tail);
  game.player1.board.addShip(ship, head, tail);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}. Link to site: http://localhost:${PORT}`);

  // For dev purposes just create a new board now and print it.
  // const game = createGame()
});