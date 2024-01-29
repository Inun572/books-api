const db = require('../../config/dbConfig.js');

const getBooks = async () => {
  const query = `SELECT books.id, books.title, books.isbn, books.synopsis, authors.name as author, publishers.name as publisher, categories.name as category FROM books JOIN authors ON books.author_id = authors.id JOIN publishers ON books.publisher_id = publishers.id JOIN categories ON books.category_id = categories.id`;
  const [data] = await db.query(query);

  return data;
};

const getBookById = async (id) => {
  const query = `SELECT books.id, books.title, books.isbn, books.synopsis, authors.name as author, publishers.name as publisher, categories.name as category FROM books JOIN authors ON books.author_id = authors.id JOIN publishers ON books.publisher_id = publishers.id JOIN categories ON books.category_id = categories.id WHERE books.id = ${id}`;
  const [data] = await db.query(query);

  return data[0];
};

const addNewBook = async () => {};

module.exports = {
  getBooks,
  getBookById,
};
