// packages
import * as React from 'react'

/**
 * @file Functional React component representing a heading element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Functional component representing a heading.
 *
 * @param {object} props - properties for the component
 * @param {number} props.size - heading size, defaults to 1
 * @param {*} props.children - component children
 * @returns {HTMLHeadingElement} html heading element
 */
const Heading = ({ size, children }) => {
  const CLASS_NAME = 'ada-heading'

  let heading = <h1 className={CLASS_NAME}>{children}</h1>

  if (size === 2) heading = <h2 className={CLASS_NAME}>{children}</h2>
  if (size === 3) heading = <h3 className={CLASS_NAME}>{children}</h3>
  if (size === 4) heading = <h4 className={CLASS_NAME}>{children}</h4>
  if (size === 5) heading = <h5 className={CLASS_NAME}>{children}</h5>
  if (size === 6) heading = <h6 className={CLASS_NAME}>{children}</h6>

  return heading
}

export default Heading
