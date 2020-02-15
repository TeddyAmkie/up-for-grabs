const express = require('express');
const router = new express.Router();
const { ensureCorrectUser } = require('../middleware/auth');

// Get all food listings within range of pinpoint
router.get('/', async function (req, res, next) {
  try {
    return res.json({});
  } catch (err) {
    return next(err);
  }
});

// Get food listing based on passed in id
router.get('/:id', async function (req, res, next) {
  try {

    return res.json({});
  } catch (err) {
    return next(err);
  }
});

// Update a food listing
router.patch('/:id', ensureCorrectUser, async function (req, res, next) {
  try {
    return res.json({  });
  } catch (err) {
    return next(err);
  }
});

// Delete a food listing
router.delete('/', ensureCorrectUser, async function (req, res, next) {
  try {
    return res.status(201).json({  });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;