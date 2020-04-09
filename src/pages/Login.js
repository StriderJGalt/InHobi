import React, { PureComponent } from 'react';
import Auth from '../auth/auth';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'

export class MasterLogIn extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      username:'',
      password:''
    }
    
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  onChangePass(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(username, password) {
    Auth.login(username, password);
  }

  render() {
    return (
      <div className="body">
      <div className="titleLabel">
        <h1> InHobi</h1>
        <h3> A Social Good App </h3>
      </div>

      <form className="login_form" onSubmit={this.onSubmit(this.state.username, this.state.password)}>
          {/* <h3>Sign In</h3> */}

          <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChangePass} />
          </div>

          
          {/* 
            REMEMBER ME CHECKBOX

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
          </div> */}

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <p className="forgot-password text-right">
              Forgot Password?
          </p>
      </form>
      </div>
  );
  }
}

