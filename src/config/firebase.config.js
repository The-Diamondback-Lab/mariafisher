// packages
import * as firebase from 'firebase/app'

/**
 * Manages the Firebase configuration and resources for the project.
 *
 * @module firebase_config
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// not using .env to store firebase credentials because flamelink
// throws an error when using process.env variables
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCeP6oTMNEyOoB7MWD0xC18gvJQcKMlyQY',
  authDomain: 'fisher1yearlater.firebaseapp.com',
  databaseURL: 'https://fisher1yearlater.firebaseio.com',
  projectId: 'fisher1yearlater'
}

// intialize firebase appplication
const FIREBASE_APP = firebase.initializeApp(FIREBASE_CONFIG)

// if firebase app is null, throw error
if (!FIREBASE_APP) throw new Error('Unable to initalize Firebase')

export { FIREBASE_CONFIG, FIREBASE_APP }
