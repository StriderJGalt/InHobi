const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

const auth = require('./api/auth');
const site = require('./api/site');
const assgn = require('./api/assignment');
const course = require('./api/course');
const forum = require('./api/forum');
<<<<<<< HEAD
const utils = require('./api/utils')
=======

>>>>>>> b0717630af627abd8f9b044e30151fb6de0f41f1

const PORT = 8080
app.use(cors())
app.use(bodyParser.urlencoded())

app.use('/', auth);
app.use('/site', site);
app.use('/assgn', assgn);
app.use('/course', course);
<<<<<<< HEAD
app.use('/forum', forum)
app.use('/utils', utils)
=======
app.use('/forum', forum);
>>>>>>> b0717630af627abd8f9b044e30151fb6de0f41f1

app.listen(PORT, () => {
  console.log("Server Is Running On Port: " + PORT)
})
