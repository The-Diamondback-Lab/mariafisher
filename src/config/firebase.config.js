// packages
import * as firebase from 'firebase';
import flamelink from 'flamelink';

/**
 * Firebase configuration
 *
 * @file Manages the Firebase configuration settings for the project.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const { REACT_APP_WEB_API_KEY } = process.env;

// intialize firebase appplication
const FIREBASE_APP = firebase.initializeApp({
  apiKey: REACT_APP_WEB_API_KEY
});

// if firebase app is null, throw error
if (!FIREBASE_APP) {
  let message = 'Unable to initalize Firebase';
  console.error(message);
  throw new Error(message);
}

// create flamelink references
const FLAMELINK_APP = flamelink({ FIREBASE_APP });
const FLAMELINK_CONTENT = FLAMELINK_APP.content;
const FLAMELINK_NAVIGATION = FLAMELINK_APP.nav;

export { FIREBASE_APP, FLAMELINK_APP, FLAMELINK_CONTENT, FLAMELINK_NAVIGATION };
