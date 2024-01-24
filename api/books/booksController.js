const db = require('../../dbConfig');
const { getBooks, getBookById } = require('./booksService');

const booksController = {
  getBooks: (req, res) => {
    try {
      const { id } = req.params;

      if (id) {
        // const data = getBookById(id);
        const query = `SELECT * FROM books WHERE id = ${id}`;
        db.query(query, (err, result) => {
          if (err) {
            throw err;
          }

          if (result.length === 0) {
            return res.status(404).json({
              message: 'Book not found',
            });
          }

          return res.json({
            message: 'success',
            data: result[0],
          });
        });
      }

      // const data = getBooks();
      const query = `SELECT * FROM books`;
      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }

        return res.json({
          message: 'success',
          data: result,
        });
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  addBook: (req, res) => {
    res.send('addBook');
  },
  editBook: (req, res) => {
    res.send('editBook');
  },
  deleteBook: (req, res) => {
    res.send('deleteBook');
  },
};

module.exports = {
  getBooks: booksController.getBooks,
  addBook: booksController.addBook,
  editBook: booksController.editBook,
  deleteBook: booksController.deleteBook,
};
