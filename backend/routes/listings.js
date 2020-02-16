const express = require('express');
const router = new express.Router();
const { ensureCorrectUser } = require('../middleware/auth');
const Listing = require('../models/listing');

// Get all food listings within range of pinpoint
router.get('/', async function (req, res, next) {
  try {
    const listings = await Listing.findAll()
    return res.json(listings);
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

// Create a new listing
router.post('/', async function (req, res, next) {
  try {
    const listing = await Listing.create(req.body);
    return res.json({ listing });
  } catch (err) {
    return next(err);
  }
});

// Update a food listing
router.patch('/:id', ensureCorrectUser, async function (req, res, next) {
  try {
    return res.json({});
  } catch (err) {
    return next(err);
  }
});

// Delete a food listing
router.delete('/', ensureCorrectUser, async function (req, res, next) {
  try {
    return res.status(201).json({});
  } catch (err) {
    return next(err);
  }
});


module.exports = router;