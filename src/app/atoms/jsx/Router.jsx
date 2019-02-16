// packages
import React from 'reactn'
import { BrowserRouter, Switch } from 'react-router-dom'
import Analytics from 'react-router-ga'

/**
 * @file Functional React component representing the application router.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders the application router, and attaches the Google Analytics router to
 * it.
 *
 * @param {object} props - properties for the component
 * @param {*} props.children - component children
 * @returns {BrowserRouter} application router
 */
const Router = props => {
  const { REACT_APP_GOOGLE_ANALYTICS_ID, NODE_ENV } = process.env
  const { children } = props

  return (
    <BrowserRouter>
      <Analytics
        id={REACT_APP_GOOGLE_ANALYTICS_ID}
        debug={NODE_ENV === 'development'}
      >
        <Switch>
          {children}
        </Switch>
      </Analytics>
    </BrowserRouter>
  )
}

export default Router
