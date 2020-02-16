const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Return signed JWT from user data. */

function createToken(user) {
  const payload = {
    user_id: user.id
  };
  
  return jwt.sign(payload, SECRET_KEY);
}

module.exports = createToken;