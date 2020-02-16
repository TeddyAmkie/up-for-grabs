const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const jsonschema = require("jsonschema");
const usersSchema = require("../schemas/userSchema.json");
const ExpressError = require("../helpers/expressError");

// Create a user
router.post('/', async function(req, res, next) {
  try {
    const result = jsonschema.validate(req.body, usersSchema);
    
    if (!result.valid) {
      const listOfErrors = result.errors.map(err => err.stack);
      const error = new ExpressError(listOfErrors, 400);
      return next(error);
    }

    const user = await User.register(req.body);
    return res.json({ user }, 201);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;