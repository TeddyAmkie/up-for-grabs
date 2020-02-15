const db = require("../db");

class Listing {

  // Create a listing from input: 
  // { name, image, description, quantity, user_id, category, location }
  static async create(item) {
    const result = await db.query(
      `INSERT INTO listings (name, image, description, quantity, user_id, category, location)
      VALUES ($1, $2, $3, $4, $5, $6, $7 )`,
      [name, image, description, quantity, user_id, category, location]
    );
    return result.rows[0];
  }
  /** Find all listings within a set area. */
  static async findAll() {
    const result = await db.query(
      `SELECT (name, image, description, quantity, user_id, category, location, time_created)
      FROM listings`
    );
    return result.rows;
  }
}
module.exports = Question;