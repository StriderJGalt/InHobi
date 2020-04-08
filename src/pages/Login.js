import React, { PureComponent } from 'react';
import Auth from '../auth/auth';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'

export class MasterLogIn extends PureComponent {

  constructor (props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    // Submit Logic
    alert("login!")
  }

  render() {
    return (
      <div class="body">
      <div class="titleLabel">
        <h1> InHobi</h1>
        <h3> A Social Good App </h3>
      </div>

      <form class="login_form" onSubmit={this.onSubmit}>
          {/* <h3>Sign In</h3> */}

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
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
              Forgot <a href="#">password?</a>
          </p>
      </form>
      </div>
  );
  }
}

