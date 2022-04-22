const logger = require('./src/helper/logger');
const constant = require('./src/helper/constant');
const fs = require('fs');
const { wait } = require('./src/helper/logger');
logger.welcome();
logger.baseError(constant.error);
logger.baseSuccess(constant.success);
fs.readdir('./src/docs/',(err,data)=>{
    if(err)
    console.log(err);
    else
    console.log(data)
})
console.log('apple');
wait(5000,'ball');
console.log('cat')
