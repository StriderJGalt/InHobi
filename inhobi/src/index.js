import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterLogIn } from './figmaComponents';
import { MastertaskFeedbackPage } from './taskFeedbackPage_figmaComponents';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MastertaskFeedbackPage />, document.body);
registerServiceWorker();
