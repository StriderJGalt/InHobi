import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import TaskPage from './taskpage';
import CoursePage from './pages/CoursePage';
import * as serviceWorker from './worker/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<TaskPage />, document.getElementById('root'));

// ReactDOM.render(<CoursePage />, document.getElementById('root'));      //testing

// If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.register();
