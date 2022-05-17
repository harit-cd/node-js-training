const medicineData = require('../src/docs/medicine.json');
const ping = require('./ping');
const responseBuilder = require('../src/helper/responseBuilder');
const constant = require('../src/helper/constant');
function add(body){
    let path ='src/docs/medicine.json';
    body['id']=medicineData.length+1;
    medicineData.push(body);
    let data = JSON.stringify(medicineData,null,2);
    ping.writeData(path,data);
    let result = responseBuilder.list(body);
    return result;
}
function list(data,body){
    let value=[];
    let num =0;
    //console.log(body)
    if(body){
        for(let elem of medicineData){
            if(body.name){  
                num=1;
                if(body.name==elem.name)
                    value.push(elem)
            }
            else if(body.id){
                num=1;
                if(body.id==elem.id)
                    value.push(elem);
            }
            else if(body.expiryDate){
                num=1;
                if(body.expiryDate==elem.expiryDate)
                    value.push(elem);
            }
            else if(body.manufactureDate){
                num=1;
                if(body.manufactureDate==elem.manufactureDate)
                    value.push(elem);
            }
            else if(body.company){
                num=1;
                if(body.company==elem.company)
                    value.push(elem);
            }
        }
    }
    if(num==0){
        let result = responseBuilder.list(data);
        return result;
    }
    else if(num==1 && value==0){
        let result = responseBuilder.error(constant.validator.notExist)
        return result;
    }
    else{
        let result = responseBuilder.list(value);
        return result;
    }   
}
function expired(){
    let value = [];
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    console.log(date)
    for(let elem of medicineData){
        console.log('in for')
        let currentDate = new Date(date);
        let exp = elem.expiryDate;
        let expDate = new Date(exp);
        console.log('expDate'+expDate)
        console.log('current'+expDate)
        if(currentDate>expDate){
            console.log('in if')
            value.push(elem);
        }
    }
    let result = responseBuilder.list(value);
    return result;
}

function change(body){
    let id = body.id;
    console.log(id);
    let value=[];
    let path ='src/docs/medicine.json';
    for(let elem of medicineData){
        if(elem.id==id){
            value.push(elem);
            if(body.name)
                elem.name = body.name;
            if(body.expiryDate)
                elem.expiryDate=body.expiryDate;
            if(body.manufactureDate)
                elem.manufactureDate=body.manufactureDate;
            if(body.unitPrice)
                elem.unitPrice=body.unitPrice
            if(body.company)
                elem.company=body.company
        }
    }
    let data = JSON.stringify(medicineData,null,2);
    ping.writeData(path,data);
    let result = responseBuilder.list(value);
    return result;

}
    

module.exports={
    add,
    list,
    change,
    expired
}