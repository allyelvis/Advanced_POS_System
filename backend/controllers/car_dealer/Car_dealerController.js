const Car_dealer = require('../../models/car_dealer/Car_dealerModel');

exports.getAllCar_dealers = async (req, res) => {
  try {
    const car_dealers = await Car_dealer.find();
    res.json(car_dealers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
