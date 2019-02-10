// packages
import firebase from 'firebase/app';

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

export { FIREBASE_APP };
