const express = require('express');
const router = express.Router();
const ordersController = require('../../controllers/ordersController');
const ordersMiddleware = require('../../middleware/ordersMiddleware')
router.post('/addOrder',ordersMiddleware.ordersValidator,ordersController.addOrders);
router.put('/addMedicines',ordersMiddleware.medicineValidator,ordersController.addMedicines);
router.get('/byValue',ordersController.listOrder);
router.put('/modify',ordersMiddleware.modifyValidator,ordersController.modifyOrders);;
module.exports=router;


//medicineMiddleware.repetationValidator,
//                 medicineMiddleware.medicineValidator
//,medicineMiddleware.modifyValidator