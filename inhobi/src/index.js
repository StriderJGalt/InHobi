import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterLogIn } from './figmaComponents';
import { MastertaskPage } from './taskPage_figmaComponents';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MastertaskPage />, document.body);
registerServiceWorker();
