const db = require('../../config/dbConfig');

class BaseService {
  constructor(tableName) {
    this.tableName = tableName;
  }
  async get() {
    const [data] = await db.query(
      `SELECT * FROM ${this.tableName}`
    );
    return data;
  }

  async find(id) {
    const [data] = await db.query(
      `SELECT * FROM ${this.tableName} WHERE id = ?`,
      [id]
    );

    return data[0];
  }
}

module.exports = BaseService;
