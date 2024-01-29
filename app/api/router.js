const { Router } = require('express');
const booksRouter = require('./books/booksRouter.js');
const authorRouter = require('./authors/authorRouter.js');
const categoryRouter = require('./categories/categoryRouter.js');
const publisherRouter = require('./publishers/publishersRouter.js');

const router = Router();

router.use('/books', booksRouter);
router.use('/authors', authorRouter);
router.use('/categories', categoryRouter);
router.use('/publishers', publisherRouter);

module.exports = router;
