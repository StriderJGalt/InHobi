import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { MasterLogIn } from './pages/Login';
import { MasterlessonViewer } from "./pages/taskViewer";
import { MasterCMDashboard } from "./pages/CMDashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MastertaskPage } from "./pages/taskSubmission";
import { ProtectedRouteAdmin } from "./route/protectedRouteAdmin";
import { ProtectedRouteUser } from "./route/protectedRouteUser";
import { MastertaskFeedbackPage } from './taskFeedbackPage_figmaComponents';
import { createBrowserHistory } from 'history';
import { CoursePage } from './pages/CoursePage';

export const history = createBrowserHistory;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MasterLogIn} />
        <ProtectedRouteUser exact path="/lesson" component={MasterlessonViewer} />
        <ProtectedRouteAdmin exact path="/admin" component={MasterCMDashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
