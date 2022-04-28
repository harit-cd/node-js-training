const express = require('express');
const router = express.Router();

const employee = require('../../controller/employee/employee');


router.get('/list',employee.ping);

module.exports=router;