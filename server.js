const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 10001;

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send('Hit point.');
  // do nothing
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}. Link to site: https://localhost:${PORT}`);
});