var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');

router.post('/course_image', function(req, res, next){
    api_base =`${req.body.image_url}`;
    api_base=api_base.concat(`?token=${req.body.wstoken}`);
    const args = {
        responseType: 'arraybuffer'
    }
    axios.get(api_base, args).then(function(response){
        response = Buffer.from(response.data, 'binary').toString('base64');
        base=`${req.body.mimetype};base64,`
        base=base.concat(`${response}`)
        res.send(base)
    }).catch((err) => console.log(err));
});

module.exports = router;