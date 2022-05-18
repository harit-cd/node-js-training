const express = require('express');
const router = express.Router();
const ordersController = require('../../controllers/ordersController');
const ordersMiddleware = require('../../middleware/ordersMiddleware')
router.post('/addOrder',ordersController.addOrders);
router.put('/addMedicines',ordersController.addMedicines)
// router.get('/byValue',medicineController.listMedicines);
// router.get('/expired',medicineController.getExpired);
// router.put('/modify',medicineMiddleware.modifyValidator,medicineController.modifyMedicine);
module.exports=router;


//medicineMiddleware.repetationValidator,
//                 medicineMiddleware.medicineValidator