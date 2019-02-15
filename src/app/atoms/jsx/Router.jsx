// packages
import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Analytics from 'react-router-ga'

export default class Router extends React.Component {
  render() {
    const { children } = this.props

    return (
      <BrowserRouter>
        <Analytics id={process.env.REACT_APP_GOOGLE_ANALYTICS_ID} debug>
          <Switch>
            {children}
          </Switch>
        </Analytics>
      </BrowserRouter>
    )
  }
}