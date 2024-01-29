const express = require('express');
const router = require('./app/api/router');

const app = express();

app.use(express.json());

app.use('/v1', router);

app.get('/', (req, res) => {
  res.json({
    message: 'Try /v1/books to get all books',
  });
});

module.exports = app;
