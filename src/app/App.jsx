/* eslint-disable camelcase */

// packages
import React, { setGlobal } from 'reactn'
import { Route } from 'react-router-dom'
import $ from 'jquery'

// modules
import { WINDOW_PATH } from '../config/app.config'
import { ROUTES_ARR } from '../config/routes.config'
import { get_content } from '../utilities/flamelink.utilities'

// atoms
import { RequestManager, Router } from './atoms'

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

    // determine where to forward user
    if (NODE_ENV === 'development' && WINDOW_PATH === '/') {
      window.location.href = '/i'
    } else if (WINDOW_PATH !== '404' && !paths.includes(WINDOW_PATH)) {
      window.location.href = NODE_ENV === 'development' ? '/404.html' : '/404'
    }

    // populate global state
    let content = await get_content('section')

    if (!content.ok) {
      window.alert('Unable to retreive content.')
      window.location.href = NODE_ENV === 'development' ? '/404.html' : '/404'
    }

    setGlobal({ content: content.data })

    // update loading state
    setTimeout(() => this.handle_loading(), 1500)

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

    let component = (props, route) => <route.component {...props} {...route} />

    return (
      <Router>
        <RequestManager requesting={requesting}>
          {ROUTES_ARR.map((route, i) => (
            <Route
              exact path={route.path} key={i}
              render={props => component(props, route)}
            />
          ))}
        </RequestManager>
      </Router>
    )
  }
}
