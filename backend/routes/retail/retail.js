const express = require('express');
const router = express.Router();
const { getAllRetails } = require('../../controllers/retail/RetailController');

// Example GET route
router.get('/', getAllRetails);

module.exports = router;
