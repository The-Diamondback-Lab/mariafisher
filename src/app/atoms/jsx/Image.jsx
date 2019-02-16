// packages
import React from 'reactn'

/**
 * @file Functional React component representing an image.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Functional component representing an image.
 *
 * @param {object} props - properties for the component
 * @param {string} props.src - image source
 * @param {string} props.alt - image description
 * @returns {HTMLElement} html image element
 */
const Image = ({ src, alt }) => {
  return <img className='ada-image' src={alt} alt={alt} />
}

export default Image
