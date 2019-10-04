/**
 * Application constants.
 *
 * @module app_config
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// browser
const DEV_MODE = process.env.NODE_ENV === 'development'
const LOCAL_STORAGE = window.localStorage
const WINDOW_LOCATION = window.location.href
const WINDOW_PATH = window.location.pathname
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
  DEV_MODE, LOCAL_STORAGE, WINDOW_LOCATION, WINDOW_PATH, INTRODUCTION, ROOT, BREAKPOINTS
}
