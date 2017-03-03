'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import Products from './components/Products'
import ProductsContainer from './containers/ProductsContainer'

import store from './store'
import Jokes from './components/Jokes'
import Navbar from './components/Navbar'
import Login from './components/Login'
import GoogleLogin from './components/GoogleLogin'
import WhoAmI from './components/WhoAmI'
import { loadProducts } from './reducers/products'
import FilteredProductsContainer from './containers/FilteredProductsContainer'

const Root = connect(
  ({ auth }) => ({ user: auth })
  ) (
  ({ user, children }) =>

    <div id="navbar">
      <h1 id="title">Poppin' Potions</h1>
      <div id="nav">
        <nav>
          {user ? <WhoAmI /> : <div><Login /> <GoogleLogin /></div>}
        </nav>
        {children}
      </div>
    </div>

)

const onLoadProducts = function () {
  const action = loadProducts()
  store.dispatch(action)
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/products" />
        <Route path="/products" onEnter={onLoadProducts} />
          <Route path="/products/:category" component={FilteredProductsContainer} onEnter={onLoadProducts} />
          <IndexRoute component={ProductsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
