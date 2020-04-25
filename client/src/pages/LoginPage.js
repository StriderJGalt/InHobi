import React, { PureComponent } from 'react';
import Auth from '../auth/auth';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../css/LoginPage.css'

export class MasterLogIn extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.clickSignup = this.clickSignup.bind(this);
    this.clickContinue = this.clickContinue.bind(this);
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

  clickContinue() {
    window.location = "/HomePage";
  }

  clickSignup() {
    window.location = "/SignupPage";
  }

  render() {
    return (
      <div className="LoginPage">
        <div className="Title">
          <h1> InHobi</h1>
          <h2> A Social Good App </h2>
        </div>

        <form className="login_form" onSubmit={this.onSubmit}>
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Name" value={this.state.username} onChange={this.onChangeUsername} />

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChangePass} />

          <button type="submit" className="btn" style={{color:'black'}}>SUBMIT</button>
          <div className="text_btns">
            <div>Forgot Password</div>
            <div onClick={this.clickSignup}>Sign Up</div>
          </div>
          <div onClick={this.clickContinue} className="continue">Continue without login ></div>
        </form>
      </div>
    );
  }
}

