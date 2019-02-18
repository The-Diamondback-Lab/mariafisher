// packages
import * as React from 'react'

/**
 * Class representing an image.
 *
 * @class Image
 * @hideconstructor
 * [Reference]{@link https://www.w3schools.com/tags/tag_img.asp}
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Image extends React.Component {
  static CLASS_NAME = 'ada-image'

  state = { loading: true }
  ref = React.createRef()

  componentDidMount = async () => {

  }

  static getDerivedStateFromProps = (props, state) => {

  }

  /**
   * Renders an image.
   *
   * @returns {HTMLElement} html image element
   */
  render = () => {
    const { CLASS_NAME } = Image
    const {
      id, style, src, srcset, alt, hidden
    } = this.props

    return (
      <img
        id={id} className={CLASS_NAME} style={style}
        src={src} srcSet={srcset} alt={alt}
        hidden={hidden}
      />
    )
  }
}
