const Accounting = require('../../models/accounting/AccountingModel');

exports.getAllAccountings = async (req, res) => {
  try {
    const accountings = await Accounting.find();
    res.json(accountings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
