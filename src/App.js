import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

import { MasterLogIn } from './pages/Login';

import { CoursePage } from './pages/CoursePage';
import { MasterlessonViewer } from "./pages/taskViewer";
import { TaskSub } from "./pages/taskSubmission";

import { MasterCMDashboard } from "./pages/CMDashboard";
import { MastertaskFeedbackPage } from './pages/taskFeedback';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRouteAdmin } from "./route/protectedRouteAdmin";
import { ProtectedRouteUser } from "./route/protectedRouteUser";

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MasterLogIn} />

        <ProtectedRouteUser exact path="/userDash" component={CoursePage} />
        <ProtectedRouteUser exact path="/taskViewer" component={MasterlessonViewer} />
        <ProtectedRouteUser exact path="/taskSubmit" component={CoursePage} />

        <ProtectedRouteAdmin exact path="/adminDash" component={MasterCMDashboard} />
        <ProtectedRouteAdmin exact path="/taskFeedback" component={MastertaskFeedbackPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
