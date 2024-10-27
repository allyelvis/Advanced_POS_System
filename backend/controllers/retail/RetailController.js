const Retail = require('../../models/retail/RetailModel');

exports.getAllRetails = async (req, res) => {
  try {
    const retails = await Retail.find();
    res.json(retails);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
