// packages
import * as React from 'react'

/**
 * @file Functional React component representing a figcaption element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Functional component representing a figcaption.
 *
 * @param {object} props - properties for the component
 * @param {*} props.children - component children
 * @returns {HTMLElement} html figcaption element
 */
const Figcaption = ({ children }) =>
  <figcaption className='ada-figcaption'>{children}</figcaption>

export default Figcaption
