const logger = require('./logger');

function list(data){
    let result = logger.success(data);
    return result;
}
function error(messgae){
    let result = logger.failure(messgae);
    return result;
}

module.exports={
    list,
    error
}