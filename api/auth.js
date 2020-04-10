var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');

router.post('/login', function(req, res, next){
    const args = {}
    
    axios.post(`http://68.183.95.58/moodle/login/token.php?username=${req.body.username}&password=${req.body.password}&service=moodle_mobile_app`, args).then(function(response){
        console.log(response.data)
        res.send(response.data)
    }).catch((err) => console.log(err));
});

module.exports = router;