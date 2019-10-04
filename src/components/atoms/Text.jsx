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
const Text = ({ text, children }) => {
  const CLASS_NAME = 'ada-text'

  if (text) {
    return (
      <p
        className={CLASS_NAME}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }
  return <p className={CLASS_NAME}>{children}</p>
}

export default Text
