const logger = require('./src/helper/logger');
const constant = require('./src/helper/constant');
const read = require('./src/read/read');
const write = require('./src/write/write');
const express = require('express');
const ping = require('./src/controller/ping')
const app = express();
const routes = require('./src/routes/routes')
const port =  process.env.port || 3011; 
app.use('/api/v1',routes);
app.get('/ping',ping.ping);
app.listen(port,()=> console.log(`The program is listening on port no ${port}`)); 


/*
logger.welcome();
logger.baseError(constant.error);
logger.baseSuccess(constant.success);
read.readFile('./src/docs/start1.txt');
read.readFile('./src/docs/end1.txt');
write.writeFiles('./src/docs/write.txt','New Text added');
read.readFiles('./src/docs',);
logger.fun('apple');
logger.wait(5000,'ball');
logger.fun('cat');
 */