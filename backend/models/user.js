const db = require('../db');
const bcrypt = require('bcrypt');
const ExpressError = require('../expressError');

let BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 12;

class User {
  static async register(data) {
    // Check for duplicate email
    const duplicateCheck = await db.query(
      ` SELECT email
        FROM users
        WHERE email = $1`,
      [data.email]
    )

    if (duplicateCheck.rows[0]) {
      const err = new ExpressError(
        `There already exists a user with e-mail ${data.email}`
      );
      err.status = 401;
      throw err;
    }

    const hashedPassword = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);

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
       hashedPassword,
       data.account_type,
       data.email,
       data.photo_url
      ]
    );

    return result.rows[0];
  }
}

module.exports = User;