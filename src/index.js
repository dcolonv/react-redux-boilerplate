import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Main from './containers/Main'
import configureStore from './store/config'

const preloadedState = {}
const store = configureStore(preloadedState)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Main store={store} history={history} />,
  document.getElementById('main')
)
