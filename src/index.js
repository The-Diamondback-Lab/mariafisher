// packages
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// config + constants
import * as service_worker from './config/serviceWorker.config';
import { ROOT } from './config/constants.config';

// application
import App from './app/App.jsx';

/*
 * Entry point. Sets initial state and renders React components.
 */

// render application
ReactDOM.render(<App />, ROOT.app);

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls. Learn
 * more about service workers: http://bit.ly/CRA-PWA
 */
service_worker.unregister();
