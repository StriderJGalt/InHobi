import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

// import { MasterLogIn } from './pages/Login';
import { MasterLogIn } from './pages/Login';

import { CoursePage } from './pages/CoursePage';
import MasterlessonViewer from "./pages/lessonViewer";
import { TaskPage } from "./pages/taskpage";
import { TaskSub } from "./pages/taskSubmission";

import { MasterCMDashboard } from "./pages/CmDashboardPage";
import CmDashboardPage from "./pages/CmDashboardPage";
import TaskFeedbackPage from './pages/TaskFeedbackPage';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRouteAdmin } from "./route/protectedRouteAdmin";
import { ProtectedRouteUser } from "./route/protectedRouteUser";

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Route exact path="/" component={CoursePage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/lessonViewer" component={MasterlessonViewer} />

        <Route exact path="/taskPage" component={TaskPage} />
        <Route exact path="/taskSubmission" component={TaskSub} />

        <ProtectedRouteAdmin exact path="/cmDash" component={CmDashboardPage} />
        <ProtectedRouteAdmin exact path="/taskFeedback" component={TaskFeedbackPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
