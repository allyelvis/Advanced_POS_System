const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

// Import and use routes for each module
const restaurant const retail const car_dealer const accounting const kitchen_panel const garage const fiscal_printer const hotel_pms const crm const erp const ecommerceRoute = require('./routes/}/ecommerce'/{restaurant retail car_dealer accounting kitchen_panel garage fiscal_printer hotel_pms crm erp ecommerce});
app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTrestaurant app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTretail app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTcar_dealer app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTaccounting app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTkitchen_panel app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTgarage app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTfiscal_printer app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORThotel_pms app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTcrm app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTerp app.use(/}/$module, ecommerceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORTecommerce`));
