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
        base=`data:${req.body.mimetype};base64,`
        base=base.concat(`${response}`)
        res.send(base)
    }).catch((err) => console.log(err));
});

router.post('/files_upload', function(req, res, next){
    api_base = `http://68.183.95.58/moodle/webservice/rest/server.php?`;
    api_base=api_base.concat(`component=user`);
    api_base=api_base.concat(`&filearea=draft`);
    api_base=api_base.concat(`&itemid=0`);
    api_base=api_base.concat(`&filepath=/`);
    api_base=api_base.concat(`&filename=${req.body.filename}`);
    api_base=api_base.concat(`&filecontent=${req.body.filecontent}`);
    api_base=api_base.concat(`&moodlewsrestformat=json`);
    api_base=api_base.concat(`&wsfunction=core_files_upload`);
    api_base=api_base.concat(`&wstoken=${req.body.wstoken}`);
    const args = {}
    axios.post(api_base, args).then(function(response){
        res.send(response.data)
    }).catch((err) => console.log(err));
});
module.exports = router;