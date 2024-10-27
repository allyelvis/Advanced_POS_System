const Fiscal_printer = require('../../models/fiscal_printer/Fiscal_printerModel');

exports.getAllFiscal_printers = async (req, res) => {
  try {
    const fiscal_printers = await Fiscal_printer.find();
    res.json(fiscal_printers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
