const express = require('express');
const responseBuilder =require('../helper/responseBuilder');
const constant = require('../helper/constant');
function ordersValidator(req,res,next){
    let body = req.body;
    if(!body.customerId){
            let resp = responseBuilder.error(constant.validator.noValue);
            res.send(resp);
    }
    else
    next();
}
function modifyValidator(req,res,next){
    let body = req.body;
    if(!body.orderId){
        let result=responseBuilder.error(constant.validator.noValue);
        res.send(result);
    }
    else
    next();
}
function medicineValidator(req,res,next){
    let body = req.body;
    let value =[];
    value = body.medicines;
    for(let elem of value){
        if(!elem.id||!elem.quantity){
            responseBuilder.error(constant.medicine)
        }
    }
}
module.exports={
    ordersValidator,
    modifyValidator
}