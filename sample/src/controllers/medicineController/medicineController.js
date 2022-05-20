const express = require('express');
const medicineUtils = require('../../utils/medicineUtils');
const medicineData = require('../../docs/medicine.json');
function addMedicines(req,res){
    let body = req.body;
    let result = medicineUtils.add(body);
    res.send(result)
}
function listMedicines(req,res){
    let result = medicineUtils.list(req.body)
    res.send(result);
}
function getExpired(req,res){
    let result = medicineUtils.expired();
    res.send(result);
}

function modifyMedicine(req,res){
    let result = medicineUtils.change(req.body);
    res.send(result);
}
module.exports={
    addMedicines,
    listMedicines,
    getExpired,
    modifyMedicine
}