/* eslint-disable camelcase */

// packages
import React from 'reactn'
import { Route } from 'react-router-dom'
import $ from 'jquery'

// modules
import { DEV_MODE } from '../../../config/app.config'

// atoms
import { Container } from '../../atoms'

// organisms
import { Card, Lightbox } from '../../organisms'

/**
 * Class representing a story section.
 *
 * @class Section
 * @hideconstructor
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Section extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: null, loading: true }
  }

  /**
   * Retreives section data and forwards the user to /404 or /404.html if the
   * data isn't found. Also adds the appropriate class to #app to add a section
   * specific background, as defined in the stylesheet.
   *
   * @async
   */
  componentDidMount = async () => {
    const { content, section_id, prev, next } = this.props

    if (!content) window.location.href = DEV_MODE ? '/404.html' : '/404'

    content.section_id = section_id
    content.graphs = (typeof content.graphs === 'string')
      ? content.graphs.split('\n\n') : content.graphs
    content.prev = prev
    content.next = next

    $('#app').addClass(section_id)

    // set state
    this.setState({ data: content, loading: false })
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

    $('#app').removeClass(section_id)
  }

  /**
   * Renders the section.
   *
   * @returns {HTMLElement} html section element
   */
  render = () => {
    const { mobile } = this.global
    const { data, loading } = this.state
    const { section_id, routes } = this.props

    if (loading && !data) return null

    let cover_image = data.images[0]
    delete cover_image.source

    let hide_image = { opacity: 0 }
    let show_image = { opacity: 1 }

    cover_image.style = loading || mobile ? hide_image : show_image

    let id = parseInt(section_id.replace('section0', ''))

    return (
      <div className='adt-section' id={section_id}>
        <Route exact {...routes[0]} component={Lightbox} />
        <Container style={{
          justifyContent: `flex-${id % 2 === 0 ? 'end' : 'start'}`
        }}
        >
          <Card data={data} />
        </Container>
      </div>
    )
  }
}
