/* eslint-disable camelcase */

// packages
import React, { setGlobal } from 'reactn'
import { Route } from 'react-router-dom'
import $ from 'jquery'
import URI from 'urijs'

// modules
import { ROUTES_ARR } from '../config/routes.config'
import { get_content, get_navigation } from '../utilities/flamelink.utilities'

// atoms
import { RequestManager, Router } from './atoms'

// molecules
import { Navigation } from './molecules'

// organisms
import { Footer } from './organisms'

// style
import './app.css'

export default class App extends React.Component {
  ref = React.createRef()

  /**
   * During development, it determines whether to forward the user to /i, and
   * whether to forward the user to /404 or /404.html. It also populates the
   * global state and handles the loading state.
   *
   * @async
   */
  componentDidMount = async () => {
    const { NODE_ENV } = process.env
    const WINDOW_PATH = URI.parse(window.location.href).path

    // add loading class to app
    $('#app').addClass('loading')

    let paths = ROUTES_ARR.map(route => route.path)

    // determine where to forward user
    if (NODE_ENV === 'development' && WINDOW_PATH === '/') {
      window.location.href = '/i'
    } else if (WINDOW_PATH !== '404' && !paths.includes(WINDOW_PATH)) {
      this.handle_error()
    }

    // get story sections
    let content = await get_content('section')
    if (!content.ok) this.handle_error('Unable to retreive story.')

    // get navigation content
    let navigation = await get_navigation(content.data, 'default')
    if (!navigation.ok) this.handle_error('Unable to retreive navigation.')

    setGlobal({ navigation: navigation.data, content: content.data })

    // update loading state
    setTimeout(() => this.handle_loading(), 1500)
  }

  /**
   * Updates the loading state.
   *
   * @async
   * @returns {boolean} true if loading state has been properly updated
   */
  handle_loading = () => {
    setGlobal({ requesting: false })
    $('#app').removeClass('loading')
    return true
  }

  handle_error = message => {
    const { NODE_ENV } = process.env

    if (message) window.alert(message)
    window.location.href = NODE_ENV === 'development' ? '/404.html' : '/404'
  }

  /**
   * Renders the application.
   *
   * @returns {React.Component} application component
   */
  render = () => {
    const { navigation, requesting } = this.global

    let component = (props, route) => {
      let data = {}
      Object.assign(data, route)

      delete data.component
      return <route.component {...props} {...data} />
    }

    return (
      <Router>
        <RequestManager requesting={requesting}>
          <Navigation items={navigation} />
          {
            navigation
              ? navigation.map((route, i) => {
                let data = {}
                Object.assign(data, route)

                delete data.component
                return <Route
                  exact {...data}
                  render={props => component(props, route)}
                  key={i}
                />
              })
              : null
          }
          <Footer />
        </RequestManager>
      </Router>
    )
  }
}
