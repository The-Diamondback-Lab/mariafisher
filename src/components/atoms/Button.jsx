// packages
import * as React from 'react'

/**
 * Class representing a button
 *
 * @class Button
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Button extends React.Component {
  static CLASS_NAME = 'ada-button'

  /**
   * Renders a button.
   *
   * @returns {HTMLButtonElement} html button element
   */
  render = () => {
    const { CLASS_NAME } = Button
    const { children, style, onClick } = this.props

    return (
      <button className={CLASS_NAME} style={style} onClick={onClick}>
        {children}
      </button>
    )
  }
}
