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
            if (err.code === 'ER_BAD_FIELD_ERROR') {
              return res.status(400).json({
                message: err.message,
              });
            }
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
      } else {
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
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  addBook: (req, res) => {
    try {
      const {
        title,
        author,
        publisher,
        published_year,
        category,
      } = req.body;
      const query = `INSERT INTO books (title, author, publisher, published_year, category) VALUES ('${title}', '${author}', '${publisher}', '${published_year}', '${category}')`;

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
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  editBook: (req, res) => {
    try {
      const { id } = req.params;
      const {
        title,
        author,
        publisher,
        published_year,
        category,
      } = req.body;
      const query = `UPDATE books SET title = '${title}', author = '${author}', publisher = '${publisher}', published_year = '${published_year}', category = '${category}' WHERE id = ${id}`;

      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }

        return res.json({
          message: 'success update book',
          data: result,
        });
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  deleteBook: (req, res) => {
    try {
      const { id } = req.params;
      const query = `DELETE FROM books WHERE id = ${id}`;

      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }

        return res.json({
          message: 'success delete book',
          data: result,
        });
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

module.exports = {
  getBooks: booksController.getBooks,
  addBook: booksController.addBook,
  editBook: booksController.editBook,
  deleteBook: booksController.deleteBook,
};
