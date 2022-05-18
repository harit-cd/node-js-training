const express = require('express');
const ordersUtils = require('../utils/ordersUtils');
const ordersData = require('../docs/orders.json');

function addOrders(req,res){
    let body = req.body;
    let result = ordersUtils.add(body);
    res.send(result)
}
function addMedicines(req,res){
    let body = req.body;
    let result = ordersUtils.medicineCal(body);
    res.send(result)
}

module.exports={
    addOrders,
    addMedicines
}