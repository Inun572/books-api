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
};

module.exports = {
  getBooks: booksController.getBooks,
};
