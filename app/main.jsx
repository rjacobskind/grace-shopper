'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'

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


const onLoadSingleProduct = function(route) {
  var id = route.params.id;
  const action = loadSingleProduct(id)
  store.dispatch(action)
}


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={ProductsContainer} onEnter={onLoadProducts} >
          <Route path="/products/:category" component={ProductsContainer} />
          <Route path="/products/:id" component={ProductContainer} onEnter={onLoadSingleProduct} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
