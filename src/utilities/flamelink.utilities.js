/* eslint-disable camelcase */

// config
import {
  FLAMELINK_CONTENT
} from '../config/flamelink.config'

// utility functions
import { throw_error, success } from './response.utilities'

/**
 * A set of utility functions for interacting with the Flamelink data.
 *
 * @module flamelink
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * This function takes the name of a Flamelink schema as an argument and
 * retreives all of the entries for a given content type once.
 *
 * @param {string} schema - name of content type
 * @returns {object} success object containing content
 */
export const get_content = async schema => {
  return new Promise((resolve, reject) => {
    FLAMELINK_CONTENT
      .get(schema)
      .then(content => {
        let map = new Map()

        for (let c in content) {
          let data = content[c]
          map.set(data.slug, data)
        }

        resolve(success({
          status: 200, message: `Retreived ${schema} data`, data: map
        }))
      })
      .catch(error => reject(throw_error({
        status: 500, message: error.message
      })))
  })
}
