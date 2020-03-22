const express = require('express');
const app = express();
const auth = require('./api/auth');
const cors = require('cors');

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/', auth)
app.listen(PORT, () => {
  console.log("Server Is Running On Port: " + PORT)
})
