import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MasterLogIn } from './LogIn_figmaComponents';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ProtectedRouteAdmin } from "./route/protectedRouteAdmin";
import { ProtectedRouteUser } from "./route/protectedRouteUser";

function App() {
  return (
    <div className="App">
	  <BrowserRouter>
          <Route exact path="/" component={MasterLogIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
