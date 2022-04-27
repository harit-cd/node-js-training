
const express = require('express');
const godown = require('./allRoutes/godown');
const medicines = require('./allRoutes/medicines')
const router = express.Router();

router.use('/godown',godown);
router.use('/medicines',medicines);

module.exports=router;
