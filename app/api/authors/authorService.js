const db = require('../../config/dbConfig');

class Author {
  async getAuthors() {
    const [data] = await db.query('SELECT * FROM authors');
    return data;
  }

  async getAuthorById(id) {
    const [data] = await db.query(
      'SELECT * FROM authors WHERE id = ?',
      [id]
    );
    return data[0];
  }
}

module.exports = new Author();
