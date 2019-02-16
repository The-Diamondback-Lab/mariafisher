/* eslint-disable camelcase */

// packages
import React from 'reactn'
import $ from 'jquery'

// modules
import { INTRODUCTION, WINDOW_PATH } from '../../../config/app.config'

// atoms
import { Heading } from '../../atoms'

/**
 * Class representing the application.
 *
 * @class App
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Section extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: null, requesting: true }
  }

  /**
   * Retreives section data and forwards the user to /404 or /404.html if the
   * data isn't found. Also adds the appropriate class to #app to add a section
   * specific background, as defined in the stylesheet.
   *
   * @async
   * @returns {boolean} true if application has mounted
   */
  componentDidMount = async () => {
    const DEV_MODE = process.env.NODE_ENV === 'development'
    const { content } = this.global
    const { section_id } = this.props

    const DATA = content.get(WINDOW_PATH)

    if (!DATA) window.location.href = DEV_MODE ? '/404.html' : '/404'

    // set window title
    const { title } = DATA
    let doc_title = INTRODUCTION ? title : `${title} - Fisher: 1 Year Later`

    document.title = doc_title

    // add class to update section specific image background
    $('#app').addClass(section_id)

    return true
  }

  /**
   * Removes the previously added class, which denotes the background image to
   * use, from #app.
   *
   * @async
   * @returns {boolean} true if application has mounted
   */
  componentWillUnmount = () => {
    const { section_id } = this.props

    // remove class that adds section specific image background
    $('#app').removeClass(section_id)
  }

  /**
   * Renders the section.
   *
   * @returns {HTMLElement} html section element
   */
  render = () => {
    const { name, section_id } = this.props

    return (
      <section className='adt-section' id={section_id}>
        <div className='ada-container'>
          {
            INTRODUCTION
              ? <Heading>
                Fisher: <span>1 Year Later</span>
              </Heading>
              : <Heading heading={name} />
          }
        </div>
      </section>
    )
  }
}
