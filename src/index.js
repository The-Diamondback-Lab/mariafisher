// packages
import React, { setGlobal } from 'reactn'
import * as ReactDOM from 'react-dom'

// modules
import { ROOT } from './config/app.config'
import { INITIAL_STATE } from './config/state.config.js'
import * as pwa from './config/pwa.config'

// application
import App from './app/App.jsx'

/**
 * @file Entry point. Sets initial state and renders React components.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// set global state
setGlobal(INITIAL_STATE)

// render application
ReactDOM.render(<App />, ROOT.app)

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls. Learn
 * more about service workers: http://bit.ly/CRA-PWA
 */
pwa.unregister()
