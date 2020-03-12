import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MasterLogIn } from './LogIn_figmaComponents';
import { MasterlessonViewer } from "./lessonViewer_figmaComponents";
import { MasterCMDashboard } from "./CMDashBoard_figmaComponents";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MastertaskPage } from "./taskPage_figmaComponents";
import { ProtectedRouteAdmin } from "./route/protectedRouteAdmin";
import { ProtectedRouteUser } from "./route/protectedRouteUser";
import { MastertaskFeedbackPage } from './taskFeedbackPage_figmaComponents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MasterCMDashboard} />
        <ProtectedRouteUser exact path="/lesson" component={MasterlessonViewer} />
        <ProtectedRouteAdmin exact path="/admin" component={MasterCMDashboard} />
        <ProtectedRouteUser exact path="/task" component={MastertaskPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
