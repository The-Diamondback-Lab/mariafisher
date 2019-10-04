// packages
import * as React from 'react'

/**
 * Class representing a div with a class of 'ada-container'.
 *
 * @class Container
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Container extends React.Component {
  static CLASS_NAME = 'ada-container'

  /**
   * Renders a div with a class of 'ada-container'.
   *
   * @returns {HTMLDivElement} html div element with a class of 'ada-container'
   */
  render = () => {
    const { CLASS_NAME } = Container
    const { children, style } = this.props

    return (
      <div className={CLASS_NAME} style={style}>
        {children}
      </div>
    )
  }
}
