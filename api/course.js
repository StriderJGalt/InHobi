var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');

router.get('/course_details', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`course_id=${req.body.course_id}`);
    api_base=api_base.concat(`&options[0][name]=excludemodules`);
    api_base=api_base.concat(`&options[0][value]=0`);
    api_base=api_base.concat(`&options[1][name]=excludecontents`);
    api_base=api_base.concat(`&options[1][value]=1`);
    api_base=api_base.concat(`&options[2][name]=includestealthmodules`);
    api_base=api_base.concat(`&options[2][value]=1`);
    api_base=api_base.concat(`&moodlewssettingfilter=true`);
    api_base=api_base.concat(`&moodlewssettingfileurl=true`);
    api_base=api_base.concat(`&wsfunction=core_course_get_contents`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}
    axios.post(api_base, args).then(function(response){
        res.send(response.data)
    }).catch((err) => console.log(err));
});

module.exports = router;