var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');

router.post('/site_info', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`moodlewssettingfilter=true`);
    api_base=api_base.concat(`&moodlewssettingfileurl=true`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=core_webservice_get_site_info`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}

    axios.post(api_base, args).then(function(response){
        console.log(response.data)
        res.send(response.data)
    }).catch((err) => console.log(err));
});

module.exports = router;