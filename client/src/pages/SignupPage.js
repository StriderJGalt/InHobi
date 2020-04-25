import React, { Component } from 'react';
import Auth from '../auth/auth';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../css/SignupPage.css'

export default class SignupPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username:'',
      password:''
    }
    
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.clickSignin = this.clickSignin.bind(this);
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  onChangePass(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault()
    Auth.login(this.state.username, this.state.password, this.props);
  }

  clickSignin() {
    window.location = "/";
  }

  render() {
    return (
      <div className="SignupPage">
        <div className="Title">
            <h1> InHobi</h1>
            {/* <h2> A Social Good App </h2> */}
        </div>
      
          <div className="text_btns">
            {/* <div>Forgot Password</div> */}
            <div onClick={this.clickSignin}>Already registered? Log in</div>
          </div>
        <form className="signup_form" onSubmit={this.onSubmit}>
        <fieldset>
              <legend>User Details</legend>
              <label for="fname">First Name</label>
              <input type="text" id="fname" required placeholder="John" /*value={this.state.username} onChange={this.onChangeUsername}*//>
              <label for="lname">Last Name</label>
              <input type="text" id="lname" required placeholder="Galt" /*value={this.state.username} onChange={this.onChangeUsername}*//>
              <label for="email">Email</label>
              <input type="email" id="email" required placeholder="JohnGalt@gmail.com" /*value={this.state.username} onChange={this.onChangeUsername}*//>

            </fieldset>
            <fieldset>
              <legend>Account Details</legend>
              <label for="username">Username</label>
              <input type="text" id="username" required placeholder="JGalt" minlength="8" value={this.state.username} onChange={this.onChangeUsername}/>

              <label for="password">Password</label>
              <input type="password" id="password" required minlength="8" placeholder="examplePassword" value={this.state.password} onChange={this.onChangePass} />
            </fieldset>

          <button type="submit" className="btn" >SUBMIT</button>
      </form>
          {/* <div className="continue">Continue without login ></div> */}
      </div>
  );
  }
}

