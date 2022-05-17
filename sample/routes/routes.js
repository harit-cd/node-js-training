const express = require('express');
const router = express.Router();
const medicineRoutes = require('./allRoutes/medicineRoutes');
router.use('/medicines',medicineRoutes);
module.exports=router;