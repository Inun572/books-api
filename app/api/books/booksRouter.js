const { Router } = require('express');
const { getBooks } = require('./booksController');

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBooks);

module.exports = router;
