const db = require('../db');
const ExpressError = require('../expressError');

class User {
  static async create(data) {
    const result = await db.query(
      ` INSERT INTO users (
          username,
          password,
          account_type,
          email,
          photo_url)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING
          username,
          password,
          account_type,
          email,
          photo_url`,
      [data.username,
       data.password,
       data.account_type,
       data.email,
       data.photo_url
      ]
    );

    return result.rows[0];
  }
}

module.exports = User;