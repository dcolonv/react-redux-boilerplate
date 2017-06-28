import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import routes from '../routes'

const Main = ({store, history}) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

Main.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Main
