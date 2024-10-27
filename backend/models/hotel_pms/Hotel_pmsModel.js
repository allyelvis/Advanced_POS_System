const mongoose = require('mongoose');

const Hotel_pmsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Hotel_pms', Hotel_pmsSchema);
