import React from "react";
let Client = require('node-rest-client').Client;
let client =  new Client();

function get_course_details(course_id, wstoken) {
    const args = {
        data: {
            "course_id": course_id,
            "options[0][name]": "excludemodules",
            "options[0[[value]": "0",
            "options[1][name]": "excludecontents",
            "options[1][value]": 1,
            "options[2][name]": "includestealthmodules",
            "options[2][value]": 1,
            "moodlewssettingfilter": "true",
            "moodlewssettingfileurl": "true",
            "wsfunction": "core_course_get_contents",
            "wstoken": wstoken
        }
    }
    client.post("http://68.183.95.58/moodle/webservice/rest/server.php?", args, function(data, response){
        return response;
    });
}