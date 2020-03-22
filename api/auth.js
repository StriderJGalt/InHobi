var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/login', function(req, res, next){
    console.log(req.body["username"]);
    var token = '';
    const args = {
            username : req.body["username"],
            password : req.body["password"],
            service : "moodle_mobile_app"
    }
    axios.post('http://68.183.95.58/moodle/login/token.php', args).then(function(response){
        console.log(response);
    });
    res.send("hello!")
});

module.exports = router;
