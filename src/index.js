import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import Routes from '.component/Container.js';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
