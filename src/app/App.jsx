/* eslint-disable camelcase */

// packages
import React, { setGlobal } from 'reactn'
import { Route } from 'react-router-dom'
import $ from 'jquery'

// modules
import { WINDOW_PATH } from '../config/app.config'
import { ROUTES_ARR } from '../config/routes.config'

// atoms
import { Router } from './atoms'

// molecules
import { Loading } from './molecules'

// style
import './app.css'

/**
 * Class representing the application.
 *
 * @class App
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class App extends React.Component {
  /**
   * During development, it determines whether to forward the user to /i, and
   * whether to forward the user to /404 or /404.html. It also populates the
   * global state and handles the loading state.
   *
   * @async
   * @returns {boolean} true if application has mounted
   */
  componentDidMount = async () => {
    const { NODE_ENV } = process.env
    let paths = ROUTES_ARR.map(route => route.path)

    if (NODE_ENV === 'development' && WINDOW_PATH === '/') {
      window.location.href = '/i'
    } else if (WINDOW_PATH !== '404' && !paths.includes(WINDOW_PATH)) {
      window.location.href = NODE_ENV === 'development' ? '/404.html' : '/404'
    }

    setTimeout(() => this.handle_loading(), 2500)

    return true
  }

  /**
   * Updates the loading state.
   *
   * @async
   * @returns {boolean} true if loading state has been properly updated
   */
  handle_loading = () => {
    setGlobal({ requesting: false })
    $('#app > .ada-container > .adm-loading').addClass('fadeOut')

    return true
  }

  /**
   * Renders the application.
   *
   * @returns {React.Component} application component
   */
  render = () => {
    const { requesting } = this.global

    return (
      <Router>
        <div className='ada-container'>
          {/* show loading screen or routes */}
          {
            requesting
              ? <Loading />
              : ROUTES_ARR.map((route, i) => (
                <Route
                  exact={i === 0} path={route.path} key={`route-${i}`}
                  render={props =>
                    <route.component {...props} {...route} />
                  }
                />
              ))
          }
        </div>
      </Router>
    )
  }
}
