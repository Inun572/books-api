const { Router } = require('express');
const booksRouter = require('./books/booksRouter.js');

const router = Router();

router.use('/books', booksRouter);

module.exports = router;
