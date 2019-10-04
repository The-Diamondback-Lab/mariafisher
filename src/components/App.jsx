// Packages
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import $ from 'jquery'

// Components
import { RequestManager } from './atoms'
import { Navigation } from './molecules'
import { Footer } from './organisms'
import { Section } from './templates'

/**
 * Component representing the web application.
 * It will be rendered into <div id="root">
 *
 * @class App
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class App extends Component {
  ref = React.createRef()

  /**
   * Creates a new web application.
   *
   * @param {object} props - Component properties
   * @param {object} props.api - Application data
   * @param {object} props.api.content - Story content
   * @param {object} props.api.content.foo - Section content
   * @returns {<App />}
   */
  constructor(props) {
    super(props)

    const { NODE_ENV } = process.env

    /**
     * @todo Get tracking id
     *
     * @property {*[]} analytics - Google Analytics configuration options
     * @property {string} analytics[0] - Google Analytics tracking id
     * @property {object} analytics[1] - Additional config options
     * @instance
     */
    this.analytics = ['', { debug: ['development', 'test'].includes(NODE_ENV) }]

    /**
     * @property {string} env - development | test | staging | production
     * @instance
     */
    this.env = NODE_ENV

    /**
     * @property {boolean} logging - For general messages, logging should be
     * enabled if the Node environment is 'development' or 'test'
     * @instance
     */
    this.logging = ['development', 'test'].includes(NODE_ENV)

    /**
     * @property {object} state - Internal component state
     * @property {boolean} state.analytics - True if Google Analytics was
     * initialized; this value will be updated in a production Node environment
     * @property {string | null} state.deck - Id of current deck
     * @property {FeathersError | null} state.error - Current error
     * @property {object} state.info - Error information
     * @property {boolean} state.loading - True if fetching content
     * @property {boolean} state.mobile - True if viewport width <= 768px
     * @property {object[] | null} state.slides - Slide content
     * @property {object[] | null} state.ticker - Ticker content
     * @instance
     */
    this.state = {
      analytics: false,
      error: null,
      content: null,
      loading: true,
      mobile: $(window).width() <= 768,
      routes: null
    }
  }

  /**
   * getDerivedStateFromProps is invoked right before calling the render method,
   * both on the initial mount and on subsequent updates. It should return an
   * object to update the state, or null to update nothing.
   *
   * Prepares the routes array for React Router.
   *
   * @param {object} props - Incoming component properties
   * @param {object} state - Incoming component state
   * @returns {object | null} Object to update state, or null
   */
  static getDerivedStateFromProps(props, state) {
    const { api } = props

    return {
      content: Object.values(api.content).map(section => {
        const card = Object.assign({}, { ...section })

        card.slug = card.routing.path
        delete card.routing

        return { ...section.routing, card, component: Section }
      })
    }
  }

  /**
   * Invoked after an error has been thrown by a descendant component.
   *
   * The error will transformed into a FeathersError if it isn't already of that
   * type. Afterwards, the internal error state will be updated.
   *
   * @param {FeathersError | Error} error - Current error
   * @param {object} info - Error information
   * @returns {undefined}
   */
  componentDidCatch(error, info) {
    // Transform error and update internal state
    this.setState({ error: this.error(error), info })
  }

  /**
   * Attaches a window listener to update the internal mobile state.
   * In a 'production' Node environment, Google Analytics and Pageview tracking
   * will be initialized.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    if (this.logging) console.info('Application mounted.')

    // Check routing
    if (window.location.pathname === '/') window.location = '/i'

    // Attach window listener to update internal mobile state
    this.resize()
    $(window).resize(() => this.resize())

    // Google Analytics and Pageview tracking
    this.tracking()

    // Update loading state
    this.fetch(false)
  }

  /**
   * Before the component unmounts, the window listener to update the mobile
   * state will be removed.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    // Remove window listener
    $(window).off('resize')
  }

  /**
   * Returns the web application.
   *
   * If an error is caught, the Error screen component will be rendered,
   * displaying the error name, message, and additional error information.
   *
   * While the application is loading, the Loading screen component will be
   * rendered.
   *
   * After the application has finished loading, the story will be rendered.
   *
   * @returns {<BrowserRouter />}
   */
  render() {
    const { content, loading, mobile } = this.state

    return (
      <BrowserRouter>
        <RequestManager requesting={loading}>
          <Navigation items={content.map(c => c.path)} mobile={mobile} />
          <Switch>
            {
              content
                ? content.map((section, i) => {
                  const { card, path } = section

                  const component = (card, props) => {
                    props = { ...props, card, id: `section0${i + 1}`, pos: i }
                    return <section.component {...props} mobile={mobile} />
                  }

                  return (
                    <Route
                      exact path={path} key={path}
                      render={props => component(card, props)}
                    />
                  )
                })
                : null
            }
          </Switch>
          <Footer />
        </RequestManager>
      </BrowserRouter>
    )
  }

  /**
   * Transform the incoming error into a FeathersError.
   *
   * @param {FeathersError | Error} error - Exception that was thrown
   * @param {object} info - Error infomation
   * @returns {FeathersError}
   * @see {@link https://docs.feathersjs.com/api/errors.html#feathers-errors}
   */
  error = error => {
    const { name } = error

    const feathers_errors = [
      'BadGateway', 'BadRequest', 'Conflict', 'Forbidden', 'GeneralError', 'LengthRequired', 'NotAuthenticated', 'NotFound', 'NotImplemented', 'PaymentError', 'MethodNotAllowed', 'NotAcceptable', 'Timeout', 'TooManyRequests', 'Unavailable', 'Unprocessable'
    ]

    // Return error already a FeathersError
    if (feathers_errors.includes(name)) return error

    // Return transformed error
    const { utils } = this.props
    return utils.error.feathers(error, { data: { errors: { origin: name } } })
  }

  /**
   * Updates the internal loading state.
   *
   * @param {boolean} loading - True if fetching content, false otherwise
   * @returns {boolean} @see @param loading
   */
  fetch = loading => this.setState({ loading }, () => loading)

  /**
   * Updates the internal mobile state.
   *
   * @returns {undefined}
   */
  resize = () => this.setState({ mobile: $(window).width() <= 768 })

  /**
   * In a production Node environment, Google Analytics and Pageview tracking
   * will be initialized.
   *
   * @returns {boolean} True if production Node environment and Google Analytics
   * was successfully initialized
   */
  tracking = () => {
    let analytics = false

    if (this.logging) {
      console.warn('Google Analytics and Pageview tracking will not be initialized in development or test environments.')
    }

    if (this.env === 'production') {
      const { pathname, search } = window.location

      // Initialize Google Analytics and pageview tracking
      ReactGA.initialize(...this.analytics)
      ReactGA.pageview(pathname + search)

      analytics = true
    }

    return this.setState({ analytics }, () => analytics)
  }
}
