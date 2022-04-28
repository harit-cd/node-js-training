let utilsping = require('../../utils/utilsping');
let responseBuilder =require('../../helper/responseBuilder')

function ping(request,response){
    console.log('Listing the employee');
    let data = utilsping.add(request.query.number,request.query.number1);
    response.send(responseBuilder.success(data));
}

module.exports={
    ping
}