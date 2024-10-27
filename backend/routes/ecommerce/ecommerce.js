const express = require('express');
const router = express.Router();
const { getAllEcommerces } = require('../../controllers/ecommerce/EcommerceController');

// Example GET route
router.get('/', getAllEcommerces);

module.exports = router;
