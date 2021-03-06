/** Shared config for application; can be required in many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 3001;

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "up-for-grabs-test";
} else {
  DB_URI = process.env.DATABASE_URL || 'up-for-grabs';
}

console.log("Using database", DB_URI);

module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI
}