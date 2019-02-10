// packages
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Analytics from 'react-router-ga';

// config
import { PRODUCTION } from '../config/constants.config';
import { ROUTES_ARR } from '../config/routes.config';

// style
import './app.css';

export default class App extends React.Component {
  componentDidMount() {
    /*
     * if a user tries to access /admin with the hostname netlify,
     * redirect to the 404 page
     */
    if (PRODUCTION) window.location.href = '/404';
  }

  render() {
    return (
      <BrowserRouter>
        <Analytics id={process.env.REACT_APP_GOOGLE_ANALYTICS_ID} debug>
          <Switch>
            {ROUTES_ARR.map((route, i) => (
              <Route
                exact={i === 0} path={route.path} key={`route-${i}`}
                render={props =>
                  <route.component {...props} {...route} />
                }
              />
            ))}
          </Switch>
        </Analytics>
      </BrowserRouter>
    );
  }
}
