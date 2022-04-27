const express = require('express');
const router =express.Router();
let medicines = require('../../controller/medicines/medicines')
router.get('/list',medicines.ping)

module.exports=router;