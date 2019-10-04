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
const Heading = ({ heading, size, children }) => {
  const CLASS_NAME = 'ada-heading'

  let element

  if (heading) {
    if (size === 2) {
      element = <h2 className={CLASS_NAME} dangerouslySetInnerHTML={{ __html: heading }} />
    } else if (size === 3) {
      element = <h3 className={CLASS_NAME} dangerouslySetInnerHTML={{ __html: heading }} />
    } else if (size === 4) {
      element = <h4 className={CLASS_NAME} dangerouslySetInnerHTML={{ __html: heading }} />
    } else if (size === 5) {
      element = <h5 className={CLASS_NAME} dangerouslySetInnerHTML={{ __html: heading }} />
    } else if (size === 6) {
      element = <h6 className={CLASS_NAME} dangerouslySetInnerHTML={{ __html: heading }} />
    } else {
      element = <h1 className={CLASS_NAME} dangerouslySetInnerHTML={{ __html: heading }} />
    }
  } else {
    element = <h1 className={CLASS_NAME}>{children}</h1>

    if (size === 2) element = <h2 className={CLASS_NAME}>{children}</h2>
    if (size === 3) element = <h3 className={CLASS_NAME}>{children}</h3>
    if (size === 4) element = <h4 className={CLASS_NAME}>{children}</h4>
    if (size === 5) element = <h5 className={CLASS_NAME}>{children}</h5>
    if (size === 6) element = <h6 className={CLASS_NAME}>{children}</h6>
  }
  return element
}

export default Heading
