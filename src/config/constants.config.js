// packages
import URI from 'urijs';

/**
 * Application constants.
 *
 * @file Constants
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

//  singletons
const LOCAL_STORAGE = window.localStorage;
const WINDOW_LOCATION = window.location.href;
const WINDOW_PATH = URI.parse(WINDOW_LOCATION).path;
const PRODUCTION =
  !WINDOW_LOCATION.includes('netlify') && WINDOW_PATH.includes('/admin');

// html elements
const ROOT = {
  app: document.getElementById('app'),
  lightbox: document.getElementById('lightbox'),
  sidebar: document.getElementById('sidebar')
};

// style
const BREAKPOINTS = {
  xsmall: 320,
  small: 480,
  schmedium: 768,
  medium: 980,
  large: 1200,
  xlarge: 1440
};

const LANDING_IMAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/terpbase.appspot.com/o/assets%2Fimages%2Flanding.jpg?alt=media&token=e9dc68c0-370d-4119-816e-e749b3d7bfd7';

export {
  LOCAL_STORAGE, WINDOW_LOCATION, WINDOW_PATH, PRODUCTION, ROOT, BREAKPOINTS, LANDING_IMAGE_URL
};
