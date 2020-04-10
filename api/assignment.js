var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');


router.post('/assignments', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`courseids[0]=${req.body.courseid}`);
    api_base=api_base.concat(`&includenotenrolledcourses=1`);
    api_base=api_base.concat(`&moodlewssettingfilter=true`);
    api_base=api_base.concat(`&moodlewssettingfileurl=true`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=mod_assign_get_assignments`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}

    axios.post(api_base, args).then(function(response){
        res.send(response.data);
    }).catch((err) => console.log(err));
});

router.post('/submissions', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`assignmentids[0]=${req.body.assign_id}`);
    api_base=api_base.concat(`&moodlewssettingfilter=true`);
    api_base=api_base.concat(`&moodlewssettingfileurl=true`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=mod_assign_get_submissions`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}

    axios.post(api_base, args).then(function(response){
        res.send(response.data);
    }).catch((err) => console.log(err));
});


router.post('/submission_status', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`assignid=${req.body.assign_id}`);
    api_base=api_base.concat(`&userid=${req.body.userid}`);
    api_base=api_base.concat(`&moodlewssettingfilter=true`);
    api_base=api_base.concat(`&moodlewssettingfileurl=true`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=mod_assign_get_submission_status`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}

    axios.post(api_base, args).then(function(response){
        res.send(response.data);
    }).catch((err) => console.log(err));
});

router.post('/submit_assignment', (req, res, next) => {
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`assignmentid=${req.body.assign_id}`);
    api_base=api_base.concat(`&plugindata=${req.body.text}`);
    api_base=api_base.concat(`&wsfunction=mod_assign_save_submission`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}

    axios.post(api_base, args).then(function(response){
        res.send(response.data);
    }).catch((err) => console.log(err));
});

module.exports = router;