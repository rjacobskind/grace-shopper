'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Navbar from './components/Navbar'
import Login from './components/Login'
import GoogleLogin from './components/GoogleLogin'
import WhoAmI from './components/WhoAmI'

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

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/potions" />
        <Route path="/potions" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
