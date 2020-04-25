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
<<<<<<< HEAD
        <ProtectedRouteUser exact path="/courses" component={CoursePage} />
        <ProtectedRouteUser exact path="/lessonViewer" component={MasterlessonViewer} />
=======
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/lessonViewer" component={MasterlessonViewer} />
>>>>>>> b0717630af627abd8f9b044e30151fb6de0f41f1
        {/* <Route exact path="/CourseGroupPage" component={CourseGroupPage} /> */}
        <Route exact path="/MenuPage" component={MenuPage} />
        <Route exact path="/HomePage" component={HomePage} />
        <Route exact path="/InstructorsPage" component={InstructorsPage} />
        <Route exact path="/InstructorAbout" component={Instructor_about} />
        <Route exact path="/InstructorCourses" component={Instructor_courses} />
        <Route exact path="/CoursesPage" component={CoursesPage} />
<<<<<<< HEAD
        <ProtectedRouteUser exact path="/taskPage" component={TaskPage} />
        <ProtectedRouteUser exact path="/taskSubmission" component={TaskSub} />

        <ProtectedRouteAdmin exact path="/cmDash" component={CmDashboardPage} />
        <ProtectedRouteAdmin exact path="/taskFeedback" component={TaskFeedbackPage} />
=======
        <Route exact path="/taskPage" component={TaskPage} />
        <Route exact path="/taskSubmission" component={TaskSub} />
        <Route exact path="/Course" component={Course_about} />
        {/* <Route exact path="/CourseSyllabus" component={Course_syllabus} /> */}
        <Route exact path="/cmDash" component={CmDashboardPage} />
        <Route exact path="/taskFeedback" component={TaskFeedbackPage} />
        <Route exact path="/AdminDash" component={Admin_Dashboard} />
>>>>>>> b0717630af627abd8f9b044e30151fb6de0f41f1
      </BrowserRouter>
    </div>
  );
}

export default App;
