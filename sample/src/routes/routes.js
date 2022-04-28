
const express = require('express');
const godown = require('./allRoutes/godown');
const medicines = require('./allRoutes/medicines');
const employee = require('./allRoutes/employee');
const details = require('./allRoutes/details');
const router = express.Router();

router.use('/godown',godown);
router.use('/medicines',medicines);
router.use('/employee',employee);
router.use('/details',details);
module.exports=router;
