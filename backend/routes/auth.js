/** Routes for authentication. */

const User = require('../models/User');
const express = require('express');
const router = new express.Router();
const createToken = require('../helpers/createToken');

router.post('/login', async function(req, res, next) {
  try {
    const user = await User.authenticate(req.body);
    const token = createToken(user);
    return res.json({ token }, 201);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;