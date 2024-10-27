const express = require('express');
const router = express.Router();
const { getAllCar_dealers } = require('../../controllers/car_dealer/Car_dealerController');

// Example GET route
router.get('/', getAllCar_dealers);

module.exports = router;
