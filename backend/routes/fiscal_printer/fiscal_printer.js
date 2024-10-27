const express = require('express');
const router = express.Router();
const { getAllFiscal_printers } = require('../../controllers/fiscal_printer/Fiscal_printerController');

// Example GET route
router.get('/', getAllFiscal_printers);

module.exports = router;
