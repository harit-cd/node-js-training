const express = require('express');
const responseBuilder =require('../helper/responseBuilder');
const constant = require('../helper/constant');
function ordersValidator(req,res,next){
    let body = req.body;
    if(body.customerId){
        if(!body.shopId){
            let resp = responseBuilder.error(constant.validator.noValue);
            res.send(resp);
        }
        else
            next();
    }
    else if(body.godownId){
        if(!body.shopId){
            let resp = responseBuilder.error(constant.validator.noValue);
            res.send(resp);
        }
        else
            next();
    }
    
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
    let num =0;
    value = body.medicines;
    for(let elem of value){
        if(!elem.id||!elem.quantity){
            num=1;
            let resp = responseBuilder.error(constant.medicine.insufficientValue)
            res.send(resp);
        }
    }
    if(num==0)
        next();
    
}
module.exports={
    ordersValidator,
    modifyValidator,
    medicineValidator
}