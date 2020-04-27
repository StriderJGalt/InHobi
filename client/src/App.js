import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

import { MasterLogIn } from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage'
import InstructorsPage from './pages/InstructorsPage'
import CoursesPage from './pages/CoursesPage'
import MenuPage from './pages/MenuPage';
import { CoursePage } from './pages/DashboardCoursePage';
import MasterlessonViewer from "./pages/lessonViewer";
// import CourseGroupPage from "./pages/CourseGroupPage";
import { TaskPage } from "./pages/taskpage";
import { TaskSub } from "./pages/taskSubmission";
import { Course_about } from './pages/Course';
// import { Course_syllabus } from './pages/Course_syllabus';
import { Instructor_about } from './pages/instructor_profile_about';
import { Instructor_courses } from './pages/instructor_profile_courses';
import DashboardGroups from './pages/DashboardGroups'
import { MasterCMDashboard } from "./pages/CmDashboardPage";
import CmDashboardPage from "./pages/CmDashboardPage";
import TaskFeedbackPage from './pages/TaskFeedbackPage';

import Admin_Dashboard from './pages/AdminDashboard';

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
        <Route exact path="/InstructorAbout" component={Instructor_about} />
        <Route exact path="/InstructorCourses" component={Instructor_courses} />
        <Route exact path="/DashboardGroups" component={DashboardGroups} />
        <Route exact path="/CoursesPage" component={CoursesPage} />
        <Route exact path="/CourseProfile" component={Course_about} />
        <ProtectedRouteUser exact path="/taskPage" component={TaskPage} />
        <ProtectedRouteUser exact path="/taskSubmission" component={TaskSub} />

        <ProtectedRouteAdmin exact path="/cmDash" component={CmDashboardPage} />
        <ProtectedRouteAdmin exact path="/taskFeedback" component={TaskFeedbackPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
