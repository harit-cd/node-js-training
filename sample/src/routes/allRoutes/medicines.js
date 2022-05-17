const express = require('express');
const router =express.Router();
let medicines = require('../../controller/medicines/medicines')
router.get('/list',medicines.ping);
//router.post('/push',medicines.push);
module.exports=router;