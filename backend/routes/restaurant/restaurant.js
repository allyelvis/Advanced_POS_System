const express = require('express');
const router = express.Router();
const { getAllRestaurants } = require('../../controllers/restaurant/RestaurantController');

// Example GET route
router.get('/', getAllRestaurants);

module.exports = router;
