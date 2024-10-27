const Erp = require('../../models/erp/ErpModel');

exports.getAllErps = async (req, res) => {
  try {
    const erps = await Erp.find();
    res.json(erps);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
