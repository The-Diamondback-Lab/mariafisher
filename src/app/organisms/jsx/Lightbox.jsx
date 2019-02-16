// packages
import * as React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

// modules
import { ROOT } from '../../../config/app.config'

// atoms
import { Button, Heading, Icon, Text } from '../../atoms'

export default class Lightbox extends React.Component {
  close = e => {
    $('#lightbox').removeClass('open')
    ReactDOM.unmountComponentAtNode(ROOT.lightbox)
  }

  render () {
    const { image } = this.props
    const { src, caption } = image

    return (
      <div className='ado-lightbox'>
        <div className='ada-container'>
          <figure>
            <img src={src} alt={caption} />
            <figcaption />
            <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
          </figure>
        </div>
        <div className='lightbox-footer'>
          <div className='ada-container' />
        </div>
      </div>
    )
  }
}
