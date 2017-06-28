import { SET_AUTHENTICATION } from './actions'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_AUTHENTICATION:
      return {...state, auth: payload.auth}
    default:
      return state
  }
}
