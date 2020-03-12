import React from "react";
import get_site_info from "../api/site";

let Client = require('node-rest-client').Client;
let client =    new Client();
class Auth {
    constructor() {
        this.authenticated = false;
        this.user = false;
        this.userid = '',
        this.admin = false;
        this.token = '';
        this.firstname = '';
        this.lastname = '';
        this.siteinfo = {};
    }

    login(username, password){
        const args = {
            data: {
                username: username,
                password: password,
                service: "moodle_mobile_app"
            },
            headers: {
                "Content-Type": "application/json"
            }
        }
        client.post("http://68.183.95.58/moodle/login/token.php", args, function(data,response) {
            if (response["errorcode"]!='invalidlogin'){
                this.authenticated = true;
                this.user = true;
                this.token = response["token"];
                this.siteinfo = get_site_info(this.token);
                this.firstname = this.siteinfo["firstname"];
                this.lastname = this.siteinfo["lastname"];
                this.userid = this.siteinfo["userid"];
            }
        });
    }

    logout(callback){
        this.authenticated = false;
        this.token = '';
        callback();
    }

    isAuthenticated(){
        return this.authenticated;
    }

    isUser(){
        return this.user;
    }

    isAdmin(){
        return this.admin;
    }

    getToken(){
        return this.token;
    }

    getName(){
        return {
            "fname": this.firstname,
            "lname": this.lname
        }
    }
}

export default new Auth();
