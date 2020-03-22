const express = require('express');
const app = express();
const auth = require('./api/auth');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())
app.use('/', auth)
app.listen(8080)
