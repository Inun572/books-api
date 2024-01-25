const db = require('../../dbConfig');
const { getBooks, getBookById } = require('./booksService');

const booksController = {
  getBooks: async (req, res) => {
    try {
      const bookId = Number(req.params.id);

      if (req.params.id) {
        if (Object.is(bookId, NaN)) {
          return res.status(400).json({
            message: 'Invalid book id',
          });
        } else {
          const data = await getBookById(bookId);

          if (!data) {
            return res.status(404).json({
              message: 'Book not found',
            });
          }
          res.json({
            message: 'success',
            data,
          });
        }
      } else {
        const data = await getBooks();
        res.json({
          message: 'success',
          data,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  },
  // addBook: async (req, res) => {
  //   try {
  //     const {
  //       title,
  //       author,
  //       publisher,
  //       published_year,
  //       category,
  //     } = req.body;
  //     const query = `INSERT INTO books (title, author, publisher, published_year, category) VALUES ('${title}', '${author}', '${publisher}', '${published_year}', '${category}')`;

  //     await db.query(query, (err, result) => {
  //       if (err) {
  //         throw err;
  //       }

  //       return res.json({
  //         message: 'success adding book',
  //         data: result,
  //       });
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: error.message,
  //     });
  //   }
  // },
  // editBook: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const {
  //       title,
  //       author,
  //       publisher,
  //       published_year,
  //       category,
  //     } = req.body;
  //     const query = `UPDATE books SET title = '${title}', author = '${author}', publisher = '${publisher}', published_year = '${published_year}', category = '${category}' WHERE id = ${id}`;

  //     await db.query(query, (err, result) => {
  //       if (err) {
  //         throw err;
  //       }

  //       return res.json({
  //         message: 'success update book',
  //         data: result,
  //       });
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: error.message,
  //     });
  //   }
  // },
  // deleteBook: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const query = `DELETE FROM books WHERE id = ${id}`;

  //     await db.query(query, (err, result) => {
  //       if (err) {
  //         throw err;
  //       }

  //       return res.json({
  //         message: 'success delete book',
  //         data: result,
  //       });
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: error.message,
  //     });
  //   }
  // },
};

module.exports = {
  getBooks: booksController.getBooks,
  addBook: booksController.addBook,
  editBook: booksController.editBook,
  deleteBook: booksController.deleteBook,
};
