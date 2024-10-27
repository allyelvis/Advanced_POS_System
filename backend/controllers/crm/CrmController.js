const Crm = require('../../models/crm/CrmModel');

exports.getAllCrms = async (req, res) => {
  try {
    const crms = await Crm.find();
    res.json(crms);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
