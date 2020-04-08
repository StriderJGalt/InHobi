import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

//import { MasterLogIn } from './pages/Login';

import { CoursePage } from './pages/CoursePage';
//import MasterlessonViewer from "./pages/lessonViewer";
import { TaskPage } from "./pages/taskpage";
import { TaskSub } from "./pages/taskSubmission";

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
        {/* <Route exact path="/" component={MasterLogIn} /> */}

        <ProtectedRouteUser exact path="/courses" component={CoursePage} />
        {/* <ProtectedRouteUser exact path="/lessonViewer" component={MasterlessonViewer} /> */}
        <ProtectedRouteUser exact path="/taskPage" component={TaskPage} />
        <ProtectedRouteUser exact path="/taskSubmission" component={TaskSub} />

        <ProtectedRouteAdmin exact path="/cmDash" component={CmDashboardPage} />
        <ProtectedRouteAdmin exact path="/taskFeedback" component={TaskFeedbackPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
