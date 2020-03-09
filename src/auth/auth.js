import React from "react";

class Auth {
    constructor() {
        this.authenticated = false;
        this.user = false;
        this.admin = false;
        this.token = '';
    }

    login(callback){
        callback();
    }

    logout(callback){
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
}

export default new Auth();
