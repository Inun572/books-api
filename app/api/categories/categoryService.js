const db = require('../../config/dbConfig');

class Categories {
  async getCategories() {
    const [data] = await db.query(
      'SELECT * FROM categories'
    );
    return data;
  }

  async getCategoryById(id) {
    const [data] = await db.query(
      'SELECT * FROM categories WHERE id = ?',
      [id]
    );
    return data[0];
  }
}

module.exports = new Categories();
