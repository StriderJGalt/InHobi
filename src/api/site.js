import React from "react";
let Client = require('node-rest-client').Client;
let client =  new Client();

export default function get_site_info(wstoken) {
    const args = {
        data: {
            "moodlewssettingfilter": "true",
            "moodlewssettingfileurl": "true",
            "wsfunction": "core_webservice_get_site_info",
            "wstoken": wstoken
        }
    }
    client.post("http://68.183.95.58/moodle/webservice/rest/server.php?", args, function(data, response){
        return response;
    });
}