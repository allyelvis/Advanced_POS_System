const express = require('express');
const router = express.Router();
const { getAllHotel_pmss } = require('../../controllers/hotel_pms/Hotel_pmsController');

// Example GET route
router.get('/', getAllHotel_pmss);

module.exports = router;
