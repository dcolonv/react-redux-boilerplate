export const SET_AUTHENTICATION = 'auth/SET_AUTHENTICATION'
export const setAuthentication = (auth) => ({
  type: SET_AUTHENTICATION,
  payload: { auth }
})
