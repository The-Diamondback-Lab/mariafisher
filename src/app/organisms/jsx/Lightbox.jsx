// packages
import * as React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

// modules
import { ROOT } from '../../../config/app.config'

/**
 * Class representing a lightbox.
 *
 * @class Lightbox
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Lightbox extends React.Component {
  componentDidMount = () => {
    const { name } = this.props
    document.title = name
  }

  /**
   * Closes the lightbox.
   *
   * @returns {boolean} true if lightbox was closed
   */
  close = () => {
    $('#lightbox').removeClass('open')
    ReactDOM.unmountComponentAtNode(ROOT.lightbox)
    return true
  }

  /**
   * Renders the lightbox.
   *
   * @param {object} props - properties for the component
   * @param {*} props.children - component children
   * @returns {HTMLDivElement} html div element
   */
  render = props => {
    const { children } = this.props

    return (
      <div className='ado-lightbox'>
        <div className='ada-container'>
          {children}
        </div>
      </div>
    )
  }
}
