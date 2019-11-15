import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import './index.css'
import configreStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'

/*
 * It can be useful to pass initial state into the store here
 * if you're server rendering or intializing your Redux store
 * with data from localStorage
 */
const store = configreStore()

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
)
