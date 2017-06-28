import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'

import Main from './containers/Main'
import configureStore from './store/config'

const preloadedState = {}
const store = configureStore(preloadedState)
const history = syncHistoryWithStore(createBrowserHistory(), store)

render(
  <Main store={store} history={history} />,
  document.getElementById('main')
)
