// packages
import { addReducer } from 'reactn'

/**
 * Manages the initial state of the application via Reactn, as well adds
 * reducers for handling state changes.
 *
 * @module state_config
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// define initial state
const INITIAL_STATE = {
  content: null,
  navigation: null,
  mobile: false,
  requesting: true,
  scrolled: 0
}

// reducers
addReducer('update_content', state => ({ content: state.content }))
addReducer('update_mobile', state => ({ mobile: state.mobile }))
addReducer('update_navigation', state => ({ navigation: state.navigation }))
addReducer('update_requesting', state => ({ requesting: state.requesting }))
addReducer('update_scrolled', state => ({ scrolled: state.scrolled }))

// expose state
export { INITIAL_STATE }
