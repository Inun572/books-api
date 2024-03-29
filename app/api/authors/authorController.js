const {
  getAuthors,
  getAuthorById,
} = require('./authorService');

const authorController = {
  getAuthors: async (req, res) => {
    try {
      const authorId = Number(req.params.id);

      if (req.params.id) {
        if (Object.is(authorId, NaN)) {
          return res.status(400).json({
            message: 'Invalid author id',
          });
        }

        const data = await getAuthorById(authorId);

        if (!data) {
          return res.status(404).json({
            message: 'Author not found',
          });
        }
        return res.json({
          message: 'success',
          data,
        });
      }

      const data = await getAuthors();

      res.json({
        message: 'success',
        data,
      });
    } catch (err) {
      res.status(500).json({
        message: 'Internal server error',
      });
    }
  },
};

module.exports = {
  getAuthors: authorController.getAuthors,
};
