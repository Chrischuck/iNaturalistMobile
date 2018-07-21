import { combineReducers } from 'redux';

import session from './session'
import observations from './observations'

export default combineReducers({
  session,
  observations
});
