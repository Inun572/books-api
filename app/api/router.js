const { Router } = require('express');
const booksRouter = require('./books/booksRouter.js');
const authorRouter = require('./authors/authorRouter.js');

const router = Router();

router.use('/books', booksRouter);
router.use('/authors', authorRouter);

module.exports = router;
