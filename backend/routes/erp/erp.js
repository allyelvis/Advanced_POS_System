const express = require('express');
const router = express.Router();
const { getAllErps } = require('../../controllers/erp/ErpController');

// Example GET route
router.get('/', getAllErps);

module.exports = router;
