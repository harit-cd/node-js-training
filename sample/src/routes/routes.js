const express = require('express');
const router = express.Router();
const medicineRoutes = require('./allRoutes/medicineRoutes');
const ordersRoutes = require('./allRoutes/ordersRoutes');
router.use('/medicines',medicineRoutes);
router.use('/orders',ordersRoutes);
module.exports=router;