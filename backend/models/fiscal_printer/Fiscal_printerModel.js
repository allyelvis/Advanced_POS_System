const mongoose = require('mongoose');

const Fiscal_printerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fiscal_printer', Fiscal_printerSchema);
