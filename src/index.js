import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
} from 'redux'
import {
  Provider,
} from 'react-redux'

// App Component
import App from './containers/App'

// Reducer
import reducer from './reducers/reducer'

// style
import './index.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
