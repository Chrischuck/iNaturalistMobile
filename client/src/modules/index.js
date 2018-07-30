import { combineReducers } from 'redux';

import session from './session'
import observations from './observations'
import me from './me'

export default combineReducers({
  session,
  observations,
  me
});
