var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');


router.get('/login', function(req, res, next){
    
    var token = '';
    const args = {}

    axios.post(`http://68.183.95.58/moodle/login/token.php?username=${req.body.username}&password=${req.body.password}&service=moodle_mobile_app`, args).then(function(response){
        token = response.data.token;
        res.send(`Logged In With Token: ${token}`)
    }).catch((err) => console.log(err));

    
});

module.exports = router;
