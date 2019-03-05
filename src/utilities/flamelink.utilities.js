/* eslint-disable camelcase */

// config
import {
  FLAMELINK_CONTENT, FLAMELINK_NAVIGATION, FLAMELINK_STORAGE
} from '../config/flamelink.config'

// modules
import { throw_error, success } from './response.utilities'

// organisms
import { Lightbox } from '../app/organisms'

// templates
import { Section } from '../app/templates'

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

          delete data['__meta__']

          if (data.images) {
            data.images.forEach(async img => {
              img.alt = `${img.caption} Photo by ${img.source}.`
              img.id = img.image[0]
              img.src = await FLAMELINK_STORAGE.getURL(`${img.id}`)
              delete img.image
              delete img.uniqueKey
            })
          } else {
            data.images = []
          }

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

export const get_navigation = async (content, name) => {
  try {
    let items = await FLAMELINK_NAVIGATION.getItems(name)
    let navigation = []

    let numeral = num => {
      if (num === 1) return 'i'
      if (num === 2) return 'ii'
      if (num === 3) return 'iii'
      if (num === 4) return 'iv'
      if (num === 5) return 'v'
      if (num === 6) return 'vi'
      if (num === 6) return 'vii'
    }

    let route = (item, index, next) => {
      const { component, cssClass, title, url, parentIndex } = item
      let copy = {}
      Object.assign(copy, item)

      item = {
        component: component === 'Lightbox' ? Lightbox : Section,
        style: cssClass,
        name: title,
        path: url
      }

      if (parentIndex === 0) {
        let id = Math.ceil((index + 1) / 2)

        item.section_id = `section0${id}`
        item.routes = [route(next)]
        item.prev = id === 1 ? null : `/${numeral(id - 1)}`
        item.next = id === 6 ? null : `/${numeral(id + 1)}`
        item.content = content.get(`${item.path}`)
        item.gallery = id === 1 ? null : `${item.path}?gallery`
      } else {
        let parent = copy.url.replace('?gallery', '')
        parent = content.get(`${parent}`)

        if (parent) item.gallery = parent.images
      }

      return item
    }

    items.forEach((item, i) => {
      if (i % 2 === 0) navigation.push(route(item, i, items[i + 1]))
    })

    return success({
      status: 200,
      message: 'Retreived navigation.',
      data: navigation
    })
  } catch (error) {
    return throw_error({ status: 502, message: error.message })
  }
}
