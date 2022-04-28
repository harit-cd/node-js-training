
const utilsping = require('../../utils/utilsping');
const responseBuilder = require('../../helper/responseBuilder');
const data = require('../../docs/medicineData.json');
function ping(request,response){
    let value = data.find((data)=> data.id == request.query.id )
    if(value==null){
        response.send(responseBuilder.success(data));
    }
    else{
        response.send(responseBuilder.success(value));
    }
     
}

module.exports={
    ping
}