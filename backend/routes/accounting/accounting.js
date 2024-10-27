const express = require('express');
const router = express.Router();
const { getAllAccountings } = require('../../controllers/accounting/AccountingController');

// Example GET route
router.get('/', getAllAccountings);

module.exports = router;
