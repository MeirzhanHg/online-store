import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'

import App from 'components/app/App'

import './firebase'
import 'assets/styles/style.scss'

import Layout from 'components/layout/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </Provider>
)