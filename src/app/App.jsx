// packages
import * as React from 'react';
import { Route } from 'react-router-dom';

// config
import { WINDOW_PATH } from '../config/constants.config';
import { ROUTES_ARR } from '../config/routes.config';

// atoms
import { Router } from './atoms';

// style
import './app.css';

export default class App extends React.Component {
  async componentDidMount() {
    let valid_path = true
    let paths = ROUTES_ARR.map(route => route.path)

    if (WINDOW_PATH !== '404' && !paths.includes(WINDOW_PATH)) {
      window.location.href = '/404.html'
    }
  }

  render() {
    return (
      <Router>
        {ROUTES_ARR.map((route, i) => (
          <Route
            exact={i === 0} path={route.path} key={`route-${i}`}
            render={props =>
              <route.component {...props} {...route} />
            }
          />
        ))}
      </Router>
    )
  }
}
