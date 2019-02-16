// packages
import flamelink from 'flamelink'

// modules
import { FIREBASE_APP } from './firebase.config'

/**
 * Manages the Flamelink resources for the project.
 *
 * @module flamelink_config
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// intialize flamelink
const FLAMELINK_APP = flamelink({ FIREBASE_APP })

// create flamelink references
const FLAMELINK_CONTENT = FLAMELINK_APP.content
const FLAMELINK_NAVIGATION = FLAMELINK_APP.nav

export { FLAMELINK_APP, FLAMELINK_CONTENT, FLAMELINK_NAVIGATION }
