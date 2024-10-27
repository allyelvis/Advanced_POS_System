const Hotel_pms = require('../../models/hotel_pms/Hotel_pmsModel');

exports.getAllHotel_pmss = async (req, res) => {
  try {
    const hotel_pmss = await Hotel_pms.find();
    res.json(hotel_pmss);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
