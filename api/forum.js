var express = require('express');
const cors = require('cors');
var router = express.Router();
const axios = require('axios');

router.post('/get_discussion_post', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base = api_base.concat(`postid=${req.body.post_id}`);
    api_base = api_base.concat(`&moodlewssettingfilter=true`);
    api_base = api_base.concat(`&moodlewssettingfileurl=true`);
    api_base = api_base.concat(`&moodlewsrestformat=json`);
    api_base = api_base.concat(`&wsfunction=mod_forum_get_discussion_post`);
    api_base = api_base.concat(`&wstoken=${req.body.wstoken}`);

    const args = {}
    axios.post(api_base, args).then((response) => {
        res.send(response.data)
    }).catch((err) => console.log(err));
});

router.post('/get_discussion_posts', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base = api_base.concat(`userid=${req.body.user_id}`);
    api_base = api_base.concat(`cmid=${req.body.cm_id}`);
    api_base = api_base.concat(`&moodlewssettingfilter=true`);
    api_base = api_base.concat(`&moodlewssettingfileurl=true`);
    api_base = api_base.concat(`&moodlewsrestformat=json`);
    api_base = api_base.concat(`&wsfunction=mod_forum_get_discussion_posts`);
    api_base = api_base.concat(`&wstoken=${req.body.wstoken}`);

    const args = {}
    axios.post(api_base, args).then((response) => {
        res.send(response.data)
    }).catch((err) => console.log(err));
});

router.post('/get_discussion_posts_by_id', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base = api_base.concat(`discussionid=${req.body.discussion_id}`);
    api_base = api_base.concat(`&moodlewssettingfilter=true`);
    api_base = api_base.concat(`&moodlewssettingfileurl=true`);
    api_base = api_base.concat(`&moodlewsrestformat=json`);
    api_base = api_base.concat(`&wsfunction=mod_forum_get_discussion_posts`);
    api_base = api_base.concat(`&wstoken=${req.body.wstoken}`);

    const args = {}
    axios.post(api_base, args).then((response) => {
        res.send(response.data)
    }).catch((err) => console.log(err));
});

router.post('/can_add_discussion', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base = api_base.concat(`forumid=${req.body.forum_id}`);
    api_base = api_base.concat(`&moodlewssettingfilter=true`);
    api_base = api_base.concat(`&moodlewssettingfileurl=true`);
    api_base = api_base.concat(`&moodlewsrestformat=json`);
    api_base = api_base.concat(`&wsfunction=mod_forum_can_add_discussion`);
    api_base = api_base.concat(`&wstoken=${req.body.wstoken}`);

    const args = {}
    axios.post(api_base, args).then((response) => {
        res.send(response.data)
    }).catch((err) => console.log(err));
});

router.post('/add_discussion', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base = api_base.concat(`forumid=${req.body.forum_id}`);
    api_base = api_base.concat(`subject=${req.body.subject}`);
    api_base = api_base.concat(`message=${req.body.message}`);
    api_base = api_base.concat(`&moodlewssettingfilter=true`);
    api_base = api_base.concat(`&moodlewssettingfileurl=true`);
    api_base = api_base.concat(`&moodlewsrestformat=json`);
    api_base = api_base.concat(`&wsfunction=mod_forum_add_discussion`);
    api_base = api_base.concat(`&wstoken=${req.body.wstoken}`);

    const args = {}
    axios.post(api_base, args).then((response) => {
        res.send(response.data)
    }).catch((err) => console.log(err));
});

router.post('/add_discussion_post', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base = api_base.concat(`postid=${req.body.post_id}`);
    api_base = api_base.concat(`subject=${req.body.subject}`);
    api_base = api_base.concat(`message=${req.body.message}`);
    api_base = api_base.concat(`&moodlewssettingfilter=true`);
    api_base = api_base.concat(`&moodlewssettingfileurl=true`);
    api_base = api_base.concat(`&moodlewsrestformat=json`);
    api_base = api_base.concat(`&wsfunction=mod_forum_add_discussion_post`);
    api_base = api_base.concat(`&wstoken=${req.body.wstoken}`);

    const args = {}
    axios.post(api_base, args).then((response) => {
        res.send(response.data)
    }).catch((err) => console.log(err));
});

router.post('/delete_post', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base = api_base.concat(`postid=${req.body.post_id}`);
    api_base = api_base.concat(`&moodlewssettingfilter=true`);
    api_base = api_base.concat(`&moodlewssettingfileurl=true`);
    api_base = api_base.concat(`&moodlewsrestformat=json`);
    api_base = api_base.concat(`&wsfunction=mod_forum_delete_post`);
    api_base = api_base.concat(`&wstoken=${req.body.wstoken}`);

    const args = {}
    axios.post(api_base, args).then((response) => {
        res.send(response.data)
    }).catch((err) => console.log(err));
});

module.exports = router;