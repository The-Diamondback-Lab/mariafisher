// packages
import * as React from 'react'

// atoms
import Icon from './Icon.jsx'
import Text from './Text.jsx'

/**
 * Class representing a div with a loading state.
 *
 * @class Loading
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Loading extends React.Component {
  static CLASS_NAME = 'ada-loading'

  ref = React.createRef()

  /**
   * Adds the class 'fadeIn'.
   */
  componentDidMount = () => {
    const { current } = this.ref
    current.classList.add('fadeIn')
  }

  /**
   * Removes the class 'fadeIn' and adds the class 'fadeOut'.
   */
  componentWillUnmount = () => {
    const { current } = this.ref

    current.classList.remove('fadeIn')
    current.classList.add('fadeOut')
  }

  /**
   * Renders a div with a loading state.
   *
   * @returns {HTMLDivElement} html div element with a loading state
   */
  render = () => {
    const { CLASS_NAME } = Loading

    return (
      <div ref={this.ref} className={`${CLASS_NAME} animated`}>
        <Icon spin weight='far' name='fa-sync-alt' />
        <Text>Loading</Text>
      </div>
    )
  }
}
