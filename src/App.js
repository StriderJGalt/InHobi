import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

import { MasterLogIn } from './pages/LoginPage';
import SignupPage  from './pages/SignupPage';
import HomePage from './pages/HomePage'
import InstructorsPage from './pages/InstructorsPage'
import CoursesPage from './pages/CoursesPage'
import MenuPage from './pages/MenuPage';
import { CoursePage } from './pages/CoursePage';
import MasterlessonViewer from "./pages/lessonViewer";
// import CourseGroupPage from "./pages/CourseGroupPage";
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
        <Route exact path="/" component={MasterLogIn} />
        <Route exact path="/SignupPage" component={SignupPage} />
        <ProtectedRouteUser exact path="/courses" component={CoursePage} />
        <ProtectedRouteUser exact path="/lessonViewer" component={MasterlessonViewer} />
        {/* <Route exact path="/CourseGroupPage" component={CourseGroupPage} /> */}
        <Route exact path="/MenuPage" component={MenuPage} />
        <Route exact path="/HomePage" component={HomePage} />
        <Route exact path="/InstructorsPage" component={InstructorsPage} />
        <Route exact path="/CoursesPage" component={CoursesPage} />
        <ProtectedRouteUser exact path="/taskPage" component={TaskPage} />
        <ProtectedRouteUser exact path="/taskSubmission" component={TaskSub} />

        <ProtectedRouteAdmin exact path="/cmDash" component={CmDashboardPage} />
        <ProtectedRouteAdmin exact path="/taskFeedback" component={TaskFeedbackPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
