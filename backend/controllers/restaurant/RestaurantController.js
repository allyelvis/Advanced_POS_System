const Restaurant = require('../../models/restaurant/RestaurantModel');

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
