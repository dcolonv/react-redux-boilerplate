import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import auth from './auth/reducer'

export default combineReducers({
  auth,
  routing
})
