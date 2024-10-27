const Ecommerce = require('../../models/ecommerce/EcommerceModel');

exports.getAllEcommerces = async (req, res) => {
  try {
    const ecommerces = await Ecommerce.find();
    res.json(ecommerces);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
