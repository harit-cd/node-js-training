const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');
let port = 3004;
app.use(bodyParser.json());
app.use('/api',routes)


app.listen(port,console.log(`The server is listening to http://localhost:${port}`));