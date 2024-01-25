const db = require('../../dbConfig.js');

const getBooks = async () => {
  const query = `SELECT * FROM books`;
  const [data] = await db.query(query);

  return data;
};

const getBookById = async (id) => {
  const query = `SELECT * FROM books WHERE id = ${id}`;
  const [data] = await db.query(query);

  return data[0];
};

const addNewBook = async () => {};

module.exports = {
  getBooks,
  getBookById,
};
