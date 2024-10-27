const express = require('express');
const router = express.Router();
const { getAllGarages } = require('../../controllers/garage/GarageController');

// Example GET route
router.get('/', getAllGarages);

module.exports = router;
