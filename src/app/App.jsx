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

const { NODE_ENV } = process.env;

export default class App extends React.Component {
  async componentDidMount() {
    let paths = ROUTES_ARR.map(route => route.path)

    if (NODE_ENV === 'development' && WINDOW_PATH === '/') {
      window.location.href = '/i'
    } else if (WINDOW_PATH !== '404' && !paths.includes(WINDOW_PATH)) {
      window.location.href = NODE_ENV === 'development' ? '/404.html' : '/404'
    }
  }

  render() {
    return (
      <Router>
        <div className="ada-container">
          {ROUTES_ARR.map((route, i) => (
            <Route
              exact={i === 0} path={route.path} key={`route-${i}`}
              render={props =>
                <route.component {...props} {...route} />
              }
            />
          ))}
        </div>
      </Router>
    )
  }
}
