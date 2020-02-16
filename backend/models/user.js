const db = require('../db');
const bcrypt = require('bcrypt');
const ExpressError = require('../helpers/expressError');

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 12;

/** Related functions for users. */

class User {
  /** Register user with data. Returns new user data or throws duplicate error. */

  static async register(data) {
    // check for duplicate email
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

  /** Authenticate user with username, password. Returns user or throws error. */

  static async authenticate(data) {
    // try to find the user first.
    console.log(data);
    const result = await db.query(
      ` SELECT id,
               username,
               password,
               account_type,
               email,
               photo_url
          FROM users
          WHERE email = $1`,
        [data.email]
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(data.password, user.password);
      if (isValid) {
        return user;
      }
    }
    
    throw ExpressError("Invalid Password", 401);
  }

  /** Get all users. */

  static async getAll() {
    const result = await db.query(
      ` SELECT username,
               account_type,
               email
          FROM users
          ORDER BY username`
    );

    return result.rows;
  }
}

module.exports = User;