const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const jsonschema = require("jsonschema");
const usersSchema = require("../schemas/userSchema.json");
const ExpressError = require("../helpers/expressError");
const createToken = require('../helpers/createToken');
const { ensureCorrectUser } = require('../middleware/auth');

/** GET / => {users: [user, ...]}  */

router.get('/', async function (req, res, next) {
  try {
    const users = await User.getAll();
    return res.json({ users });
  } catch (error) {
    return next(error);
  }
});

/** GET /:username => {user: user} */

router.get('/:id', ensureCorrectUser, async function (req, res, next) {
  try {
    const user = await User.getUser(req.params.id);
    return res.json({ user });
  } catch (error) {
    return next(error);
  }
});

/** POST / {userdata}  => {token: token} */

router.post('/', async function (req, res, next) {
  try {
    const result = jsonschema.validate(req.body, usersSchema);

    if (!result.valid) {
      const listOfErrors = result.errors.map(err => err.stack);
      const error = new ExpressError(listOfErrors, 400);
      return next(error);
    }

    const user = await User.register(req.body);
    const token = createToken(user);
    return res.json({ token }, 201);
  } catch (error) {
    return next(error);
  }
});

/** DELETE /:username => {message: "User deleted"} */

router.delete('/:username', async function (req, res, next) {
  try {
    await User.deleteUser(req.params.username);
    return res.json({ message: 'User deleted' });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;