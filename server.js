const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

const auth = require('./api/auth');
const site = require('./api/site');
const assgn = require('./api/assignment');
const course = require('./api/course');

const PORT = 8080
app.use(cors())
app.use(bodyParser.urlencoded())

app.use('/', auth);
app.use('/site', site);
app.use('/assgn', assgn);
app.use('/course', course);

app.listen(PORT, () => {
  console.log("Server Is Running On Port: " + PORT)
})
