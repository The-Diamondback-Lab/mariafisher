// packages
import flamelink from 'flamelink/dist/flamelink.js'

// modules
import { FIREBASE_CONFIG } from './firebase.config'

/**
 * @file Manages the Flamelink resources for the project.
 * @module flamelink_config
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// intialize firebase appplication
const FLAMELINK_APP = flamelink(FIREBASE_CONFIG)

// if firebase app is null, throw error
if (!FLAMELINK_APP) throw new Error('Unable to initalize Flamelink')

// create flamelink references
const FLAMELINK_CONTENT = FLAMELINK_APP.content
const FLAMELINK_NAVIGATION = FLAMELINK_APP.nav

export { FLAMELINK_APP, FLAMELINK_CONTENT, FLAMELINK_NAVIGATION }
