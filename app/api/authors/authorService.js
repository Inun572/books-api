const db = require('../../config/dbConfig');

const getAuthors = async () => {
  const [data] = await db.query('SELECT * FROM authors');
  return data;
};

const getAuthorById = async (id) => {
  const [data] = await db.query(
    'SELECT * FROM authors WHERE id = ?',
    [id]
  );
  return data[0];
};

module.exports = { getAuthors, getAuthorById };
