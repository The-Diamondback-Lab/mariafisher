// packages
import * as React from 'react'

// molecules
import { Navigation } from '../../molecules'

/**
 * @file Functional React component representing the footer.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders the footer.
 *
 * @returns {HTMLElement} html footer element
 */
const Footer = () => {
  return (
    <footer className='ado-footer'>
      <div className='ada-container'>
        <Navigation />
      </div>
    </footer>
  )
}

export default Footer
