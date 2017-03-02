'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import Products from './components/Products'
import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'

import store from './store'
import Jokes from './components/Jokes'
import Navbar from './components/Navbar'
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

const onLoadSingleProduct = function(route) {
  var id = route.params.id; 
  const action = loadSingleProduct(id)
  store.dispatch(action)
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={onLoadProducts}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={ProductsContainer} />
        <Route path="/products/:id" component={ProductContainer} onEnter={onLoadSingleProduct} />  
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
