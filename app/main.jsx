'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
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
          {user ? <WhoAmI /> : <div><Login /> <GoogleLogin /> <Navbar /></div>}
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
      <Route path="/" component={Root} onEnter={onLoadProducts}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/products/:category" component={FilteredProductsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
