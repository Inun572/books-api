const db = require('../../dbConfig.js');

const getBooks = () => {
  const query = `SELECT * FROM books`;
  return db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    return result;
  });
};

const getBookById = (id) => {
  const query = `SELECT * FROM books WHERE id = ${id}`;
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    return result[0];
  });
};

module.exports = {
  getBooks,
  getBookById,
};
