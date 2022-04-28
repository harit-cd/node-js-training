
let utilsping = require('../utils/utilsping');
let responseBuilder = require('../helper/responseBuilder');
function ping(request,response){
   let data = utilsping.ping(request.query.number);
 response.send(responseBuilder.success({
    "message":"sqaure of the given number",
    "number":request.query.number,
    "square": data    
}));
}

module.exports={
    ping
}