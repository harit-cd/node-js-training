const ordersData = require('../docs/orders.json');
const ping = require('./ping');
const responseBuilder = require('../helper/responseBuilder');
const constant = require('../helper/constant');
const medicineData= require('../docs/medicine.json');
const { colours } = require('nodemon/lib/config/defaults');
function add(body){
    let path ='src/docs/orders.json';
    body['orderId']=ordersData.length+1;
    ordersData.push(body);
    let data = JSON.stringify(ordersData,null,2);
    ping.writeData(path,data);
    let result = responseBuilder.list(body);
    return result;
}
function medicineCal(body){
    let path ='src/docs/orders.json'
    if(!body.orderId){
        let resp = responseBuilder.error(constant.validator.noValue);
        return resp
    }   
    let orderId= body.orderId;
    console.log(orderId)
    let cost =0;
    let value=[];
    for(let elem of body.medicines){
        value.push(elem);
    }
    for(let data of medicineData){
        for(let elem of value){
            if(elem.id==data.id){
                console.log('cost')
                cost = elem.quantity*(cost + data.unitPrice);
                console.log(cost)
            }
        }
    }
    for(let elem of ordersData){
        console.log('loop')
        if(orderId==elem.orderId){
            console.log('orders')
            elem['medicine']=value;
            elem['totalCost']=cost;
            
        }
    }
    let data = JSON.stringify(ordersData,null,2);
        ping.writeData(path,data);
        let result = responseBuilder.list(value);
        return result;
    
    
    // let cost=[];
    // let cost=0;
    // let num=0;
    // let path ='src/docs/orders.json';
    // for(let elem of ordersData){
    //     if(elem.orderId==orderId){
    //         value.push(elem);
    //         if(body.medicine){
    //             for(let elem of body.medicine){
    //                value['medicineId'+num]=elem.medicine.at(num);
    //                num++;
    //             }
    //             for(let elem of medicineData){
    //                for(let medicine of value){
    //                    if(elem.id==medicine)
    //                }
    //             }
    //         }
    //     }
    // }
    

   
}

module.exports={
    add,
    medicineCal
}