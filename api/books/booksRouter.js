const { Router } = require('express');
const {
  getBooks,
  addBook,
  editBook,
  deleteBook,
} = require('./booksController');

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBooks);
// router.post('/', addBook);
// router.put('/:id', editBook);
// router.delete('/:id', deleteBook);

module.exports = router;
