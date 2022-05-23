const ordersData = require('../docs/orders.json');
const ping = require('./ping');
const responseBuilder = require('../helper/responseBuilder');
const constant = require('../helper/constant');
const medicineData= require('../docs/medicine.json');
function add(body){
    let path ='src/docs/orders.json';
    let today = new Date;
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    body['orderId']=ordersData.length+1;
    body['date']=date;
    ordersData.push(body);
    let data = JSON.stringify(ordersData,null,2);
    ping.writeData(path,data);
    let result = responseBuilder.list(body);
    return result;
}
function medicineCal(body){
    let path ='src/docs/orders.json';
    if(!body.orderId){
        let resp = responseBuilder.error(constant.validator.noValue);
        return resp
    }   
    let orderId= body.orderId;
    console.log(orderId)
    let cost =0;
    let value=[];
    let finalData=[];
    let num=0;
    for(let elem of body.medicines){
        value.push(elem);
    }
    for(let elem of ordersData){
        if(orderId==elem.orderId){
            if(elem.customerId!=null){
                num =2;
            }
            else 
                num = 1;
        }
    }
    if(num==1){
        console.log('godown data')
        for(let data of medicineData){
            for(let elem of value){
                if(elem.id==data.id){
                    console.log('cost')
                    if(elem.quantity<=1000){
                        cost = cost +(elem.quantity* data.wholesalePrice);
                        elem['wholesale']=data.wholesalePrice;
                        console.log(cost)
                    }
                    else if(elem.quantity>1000){
                        let resp=responseBuilder.error(constant.medicine.exceedQuantity);
                        return resp;
                    }
                    
                }
            }
        }
    }
    else if(num==2){
        for(let data of medicineData){
            for(let elem of value){
                if(elem.id==data.id){
                    console.log('cost')
                    if(elem.quantity<=10){
                        cost = cost +(elem.quantity* data.unitPrice);
                        elem['unitPrice']=data.unitPrice;
                        console.log(cost)
                    }
                    else if(elem.quantity>10){
                        let resp=responseBuilder.error(constant.medicine.exceedQuantity);
                        return resp;
                    }
                    
                }
            }
        }
    }
    for(let elem of ordersData){
        console.log('loop')
        if(orderId==elem.orderId){
            console.log('orders')
            elem['medicines']=value;
            elem['totalCost']=cost;
            finalData.push(elem);
        }
    }
    let data = JSON.stringify(ordersData,null,2);
        ping.writeData(path,data);
        let result = responseBuilder.list(finalData);
        return result;
}
    
function list(data,body){
    let value=[];
    let num =0;
    if(body){
        for(let elem of ordersData){
            if(body.orderId){  
                num=1;
                if(body.orderId==elem.orderId)
                    value.push(elem)
            }
            else if(body.customerId){
                num=1;
                if(body.customerId==elem.customerId)
                    value.push(elem);
            }
            else if(body.shopId){
                num=1;
                if(body.shopId==elem.shopId)
                    value.push(elem);
            }
            else if(body.date){
                num=1;
                if(body.date==elem.date)
                    value.push(elem);
            }
            else if(body.godownId){
                num=1;
                if(body.godownId==elem.godownId)
                    value.push(elem)
            }
            else if(body.medicineId){
                num=1;
                console.log(elem.medicines)
                for(let mediVal of elem.medicines){
                    if(mediVal.id==body.medicineId){
                        value.push(elem);
                    }
                }
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

function change(body){
    let id = body.orderId;
    console.log(id);
    let value=[];
    // let medicineBody = [];
    // for(let elem of body.medicines){
    //     medicineBody.push(elem);
    // }
    let path ='src/docs/orders.json';
    for(let elem of ordersData){
        if(elem.orderId==id){
            value.push(elem);
            if(body.customerId)
                elem.customerId=body.customerId;
            if(body.date)
                elem.date=body.date;
            if(body.shopId)
                elem.shopId=body.shopId;
            if(body.godownId)
                elem.godownId=body.godownId;
            if(body.medicines){
                elem.medicines=body.medicines;
                console.log('medicines')
                elem['totalCost']=changeMedicine(elem.medicines);
            }
        }
}
    let data = JSON.stringify(ordersData,null,2);
    console.log(data)
    ping.writeData(path,data);
    let result = responseBuilder.list(value);
    return result;
}

function changeMedicine(medicines){
    let cost =0;
    let value=[];
    for(let elem of medicines){
        value.push(elem);
    }
    for(let data of medicineData){
        for(let elem of value){
            if(elem.id==data.id){
                console.log('cost')
                if(elem.quantity<=10){
                    cost = cost +(elem.quantity* data.unitPrice);
                    elem['unitPrice']=data.unitPrice;
                    console.log(cost);
                }
                else if(elem.quantity>10){
                    let resp=responseBuilder.error(constant.medicine.exceedQuantity);
                    return resp;
                }    
            }
        }
    }
    return cost;
}

module.exports={
    add,
    medicineCal,
    list,
    change
}