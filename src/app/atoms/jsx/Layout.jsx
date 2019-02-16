// packages
import * as React from 'react'

/**
 * @file Functional React component representing the layout wrapper.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders the page layout.
 *
 * @returns {HTMLDivElement} application component
 */
const Layout = () => {
  const { page, children } = this.props

  return (
    <div className={`adp-${page}`}>
      <div className='ada-container'>
        {children}
      </div>
    </div>
  )
}

export default Layout
