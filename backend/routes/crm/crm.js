const express = require('express');
const router = express.Router();
const { getAllCrms } = require('../../controllers/crm/CrmController');

// Example GET route
router.get('/', getAllCrms);

module.exports = router;
