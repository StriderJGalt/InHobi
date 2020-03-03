import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterLogIn } from './figmaComponents';
import { MastertaskPage } from './taskPage_figmaComponents';
import { MasterlessonViewer } from './lessonViewer_figmaComponents';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterlessonViewer />, document.body);
registerServiceWorker();
