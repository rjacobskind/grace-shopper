'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory, Link} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {RouterToUrlQuery} from 'react-url-query'

import ProductsContainer from './containers/ProductsContainer'
import SearchContainer from './containers/SearchContainer'
import ProductContainer from './containers/ProductContainer'
import ShoppingCartContainer from './containers/ShoppingCartContainer'

import { loadCartItems } from './reducers/shoppingCart'

import store from './store'
import Login from './components/Login'
import GoogleLogin from './components/GoogleLogin'
import WhoAmI from './components/WhoAmI'
import { loadProducts} from './reducers/products'
import { loadSingleProduct } from './reducers/product'

const Root = connect(
  ({ auth }) => ({ user: auth })
  ) (
  ({ user, children }) =>

    <div>
      <div id="navbar">
      <Link to={'/products'}><h1 id="title">Poppin' Potions</h1></Link> 
      <div id="nav">
        <nav>
          <SearchContainer/>

          <Link to="/cart">Shopping Cart</Link>
          {user ? <WhoAmI /> : <div><Login /></div>}
        </nav>
      </div> 
      </div> 
        {children}
      </div>
)

const onLoadProducts = function () {
  const action = loadProducts()
  store.dispatch(action)
}


const onLoadSingleProduct = function(route) {
  var id = route.params.id;
  const action = loadSingleProduct(id)
  store.dispatch(action)
}

const onLoadShoppingCart = function () {
  const action = loadCartItems()
  store.dispatch(action)
}

const onLoadUserShoppingCart = function (userID) {
  const action = loadCartItems(userId)
  store.dispatch(action)
}


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <RouterToUrlQuery>
      <Route path="/" component={Root}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={ProductsContainer} onEnter={onLoadProducts} />
        <Route path="/products/:id" component={ProductContainer} onEnter={onLoadSingleProduct} />
        <Route path="/products/category/:category" component={ProductsContainer} />
        <Route path="/cart" component={ShoppingCartContainer} onEnter={onLoadShoppingCart} />
        <Route path="/cart/:userId" component={ShoppingCartContainer} onEnter={onLoadUserShoppingCart} />
      </Route>
      </RouterToUrlQuery>
    </Router>
  </Provider>,
  document.getElementById('main')
)
