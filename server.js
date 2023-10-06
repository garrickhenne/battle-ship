const express = require('express');
const morgan = require('morgan');
// const PlayerBoard = require('./model/PlayerBoard');
// const Battleship = require('./model/Battleship');
// const Coordinate = require('./model/Coordinate');
const { initGame } = require('./util/GameFactory');

const app = express();
const PORT = 10001;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const newGame = initGame();
  // renderBoard(newGame.player1.board);
  res.render('home', { board: newGame.player1.board });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}. Link to site: https://localhost:${PORT}`);

  // For dev purposes just create a new board now and print it.
  // const game = createGame()
});