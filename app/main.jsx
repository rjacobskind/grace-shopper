'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import Products from './components/Products'
import ProductsContainer from './containers/ProductsContainer'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import { loadProducts } from './reducers/products'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

const onLoadProducts = function () {
  const action = loadProducts()
  store.dispatch(action)
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp} onEnter={onLoadProducts}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={ProductsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
