const express = require('express');
const router = require('./api/router');

const app = express();

app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
