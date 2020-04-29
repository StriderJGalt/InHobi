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
        
        const args = {
            username: username,
            password: password
        };
        var bis = this;
        axios.post('/login', args).then(function(response){
            
            if(response.data.errorcode!='invalidlogin'){
                
                bis.authenticated = true;
                bis.token = response.data.token;
                bis.user = true;
                bis.admin = false;
                axios.post('/site/site_info',{wstoken:bis.token}).then(function(site_info_response){
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

    logout(props){
        this.authenticated = false;
        this.user = false;
        this.userid = '';
        this.admin = false;
        this.token = '';
        this.firstname = '';
        this.lastname = '';
        this.siteinfo = {};
        props.history.push({
            pathname:'/'
        })
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
        return this.firstname+" "+this.lastname
    }

    getUserID(){
        return this.userid;
    }
}

export default new Auth();
