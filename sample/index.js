const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
let port = 3005;
app.use(bodyParser.json());
app.use('/api',routes)


app.listen(port,console.log(`The server is listening to http://localhost:${port}`));