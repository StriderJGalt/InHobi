var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');

router.post('/enrolled_courses', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`userid=${req.body.userid}`);
    api_base=api_base.concat(`&returnusercount=0`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=core_enrol_get_users_courses`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}
    axios.post(api_base, args).then(function(response){
        res.send(response.data)
    }).catch((err) => console.log(err));
});

router.post('/course_contents', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`courseid=${req.body.courseid}`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=core_course_get_contents`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}
    axios.post(api_base, args).then(function(response){
        res.send(response.data)
    }).catch((err) => console.log(err));
});


router.post('/mark_complete', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`&cmid=${req.body.cmid}`);
    api_base=api_base.concat(`&completed=1`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=core_completion_update_activity_completion_status_manually`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}
    axios.post(api_base, args).then(function(response){
        res.send(response.data)
    }).catch((err) => console.log(err));
});
module.exports = router;