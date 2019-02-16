// packages
import * as Joi from 'joi'
import URI from 'urijs'

/**
 * Application constants.
 *
 * @module app_config
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// package references
const JOI = Joi

// browser
const LOCAL_STORAGE = window.localStorage
const WINDOW_LOCATION = window.location.href
const WINDOW_PATH = URI.parse(WINDOW_LOCATION).path
const INTRODUCTION = WINDOW_PATH === '/' || WINDOW_PATH === '/i'

// html elements
const ROOT = {
  app: document.getElementById('app'),
  lightbox: document.getElementById('lightbox'),
  sidebar: document.getElementById('sidebar')
}

// style
const BREAKPOINTS = {
  xsmall: 320,
  small: 480,
  schmedium: 768,
  medium: 980,
  large: 1200,
  xlarge: 1440
}

export {
  JOI, LOCAL_STORAGE, WINDOW_LOCATION, WINDOW_PATH, INTRODUCTION, ROOT, BREAKPOINTS
}
