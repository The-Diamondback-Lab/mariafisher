// Packages
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Content
import content from './api/content.json'

// Utility functions
import utils from './utils'

// React application
import App from './components/App'

// Service worker
import * as sw from './config/sw.config'

// Compiled Sass stylesheet
import './sass/app.sass'

/**
 * @file Application entry point
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Component representing the application component, @see @class App, with the
 * api content and utility functions passed as props.
 *
 * @returns {<App/>}
 */
const ConnectedApp = props => <App {...props} api={{ content }} utils={utils} />

/* Render application */
ReactDOM.render(<ConnectedApp />, document.getElementById('root'))

/**
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * @see {@link https://bit.ly/CRA-PWA}
 */
sw.unregister()
