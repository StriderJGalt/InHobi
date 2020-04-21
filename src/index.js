import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import TaskFeedbackPage from './pages/TaskFeedbackPage';
import { TaskPage } from './pages/taskpage';
import {CoursePage} from './pages/CoursePage';
import MenuPage from './pages/MenuPage';
import { Instructor_courses } from './pages/instructor_profile_courses';
import * as serviceWorker from './worker/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.register();
