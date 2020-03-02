import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterlessonViewer, MasterLogIn } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterLogIn />, document.body);
registerServiceWorker();
