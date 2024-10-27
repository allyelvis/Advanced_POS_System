const Garage = require('../../models/garage/GarageModel');

exports.getAllGarages = async (req, res) => {
  try {
    const garages = await Garage.find();
    res.json(garages);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
