import React from "react";
import axios from "axios";

let Client = require('node-rest-client').Client;
let client =    new Client();
class Auth {
    constructor() {
        this.authenticated = false;
        this.user = false;
        this.userid = '';
        this.admin = false;
        this.token = '';
        this.firstname = '';
        this.lastname = '';
        this.siteinfo = {};
    }

    login(username, password, props){
        console.log('hello from auth', username, password)
        const args = {
            username: username,
            password: password
        };
        var bis = this;
        axios.post('http://localhost:8080/login', args).then(function(response){
            
            if(response.data.errorcode!='invalidlogin'){
                console.log('invalid login')
                bis.authenticated = true;
                bis.token = response.data.token;
                bis.user = true;
                bis.admin = false;
                axios.post('http://localhost:8080/site/site_info',{wstoken:bis.token}).then(function(site_info_response){
                    bis.firstname = site_info_response.data.firstname;
                    bis.lastname = site_info_response.data.lastname;
                    bis.userid = site_info_response.data.userid;
                    bis.siteinfo = site_info_response.data;

                    if(site_info_response.data.userissiteadmin==true){
                        bis.admin = true;
                        bis.user = false;
                        props.history.push({
                            pathname: '/cmDash',
                        });
                    }
                    else{
                        props.history.push({
                            pathname: '/courses',
                        });
                    }
                });
                
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
