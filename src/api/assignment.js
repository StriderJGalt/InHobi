import React from "react";
let Client = require('node-rest-client').Client;
let client = new Client();

function get_assignment(course_id, wstoken) {
    const args = {
        data: {
            "course_ids[0]": course_id,
            "includenotenrolledcourses": "1",
            "moodlewssettingfilter": "true",
            "moodlewssettingfileurl": "true",
            "wsfunction": "mod_assign_get_assignments",
            "wstoken": wstoken
        }
    }
    client.post("http://68.183.95.58/moodle/webservice/rest/server.php?", args, function(data, response){
        return response;
    });
}

function get_submissions(assign_id, wstoken){
    const args = {
        data: {
            "asssignmentids[0]": assign_id,
            "moodlewssettingfilter": "true",
            "moodlewssettingfileurl": "true",
            "wsfunction": "mod_assign_get_submissions",
            "wstoken": wstoken
        }
    }
    client.post("http://68.183.95.58/moodle/webservice/rest/server.php?", args, function(data, response){
        return response;
    });
}

function get_submission_status(assign_id, userid, wstoken) {
    const args = {
        data: {
            "asssignid": assign_id,
            "userid": userid,
            "moodlewssettingfilter": "true",
            "moodlewssettingfileurl": "true",
            "wsfunction": "mod_assign_get_submission_status",
            "wstoken": wstoken
        }
    }
    client.post("http://68.183.95.58/moodle/webservice/rest/server.php?", args, function(data, response){
        return response;
    });
}