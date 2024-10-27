const express = require('express');
const router = express.Router();
const { getAllKitchen_panels } = require('../../controllers/kitchen_panel/Kitchen_panelController');

// Example GET route
router.get('/', getAllKitchen_panels);

module.exports = router;
