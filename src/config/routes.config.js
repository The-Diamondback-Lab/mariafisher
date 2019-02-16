// organisms
import { Lightbox } from '../app/organisms'

// templates
import { Section } from '../app/templates'

/**
 * React Router configuration.
 *
 * @module routes_config
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// routes
const SECTION_01 = {
  path: '/i',
  component: Section,
  name: 'Fisher: 1 Year Later',
  section_id: 'section01',
  prev: null,
  next: '/ii'
}

const SECTION_02 = {
  path: '/ii',
  component: Section,
  name: 'II',
  section_id: 'section02',
  prev: '/',
  next: '/iii'
}

const SECTION_03 = {
  path: '/iii',
  component: Section,
  name: 'III',
  section_id: 'section03',
  prev: '/ii',
  next: '/iiii'
}

const SECTION_04 = {
  path: '/iv',
  component: Section,
  name: 'IV',
  section_id: 'section04',
  prev: '/iii',
  next: '/v'
}

const SECTION_05 = {
  path: '/v',
  component: Section,
  name: 'V',
  section_id: 'section05',
  prev: '/iv',
  next: '/vi'
}

const SECTION_06 = {
  path: '/vi',
  component: Section,
  name: 'VI',
  section_id: 'section06',
  prev: '/v',
  next: '/vii'
}

const SECTION_07 = {
  path: '/vii',
  component: Section,
  name: 'VII',
  section_id: 'section07',
  prev: '/vi',
  next: '/i'
}

const GALLERY_ROUTE = {
  path: '/:section/gallery?image=:id',
  component: Lightbox,
  name: 'Gallery Image'
}

// route arrays
const ROUTES_ARR = [
  SECTION_01, SECTION_02, SECTION_03, SECTION_04, SECTION_05, SECTION_06, SECTION_07, GALLERY_ROUTE
]

export { ROUTES_ARR }
