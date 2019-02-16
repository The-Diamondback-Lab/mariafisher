// packages
import React from 'reactn'

/**
 * @file Functional React component representing a Font Awesome icon.
 * [Reference]{@link https://fontawesome.com/icons}
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Functional component representing a Font Awesome icon.
 *
 * @param {object} props - properties for the component
 * @param {boolean} props.spin - if true, icon will rotate
 * @param {string} props.name - name of font awesome icon to render
 * @returns {HTMLStyleElement} html i element representing an icon
 */
const Icon = ({ spin, weight, name }) =>
  <i className={`ada-icon${spin ? ' fa-spin ' : ''}${weight} ${name}`} />

export default Icon
