// packages
import * as React from 'react'

/**
 * @file Functional React component representing a paragraph element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Functional component representing a paragraph.
 *
 * @param {object} props - properties for the component
 * @param {*} props.children - component children
 * @returns {HTMLParagraphElement} html paragraph element
 */
const Text = ({ children }) => <p className='ada-text'>{children}</p>

export default Text
