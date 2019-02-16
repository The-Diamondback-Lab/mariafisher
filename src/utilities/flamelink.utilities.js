/* eslint-disable camelcase */

// config
import {
  FLAMELINK_APP, FLAMELINK_CONTENT, FLAMELINK_NAVIGATION
} from '../config/flamelink.config'

// utility functions
import { validate_schema } from './app.utilities'
import { throw_error, success } from './response.utilities'

/**
 * A set of utility functions for interacting with the Flamelink data.
 *
 * @module flamelink
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
