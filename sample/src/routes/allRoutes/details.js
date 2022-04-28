const express = require('express');

const details = require('../../controller/details/details')
const router = express.Router();

router.get('/getByName',details.getByName);
router.get('/getValue',details.getValue);
module.exports=router;