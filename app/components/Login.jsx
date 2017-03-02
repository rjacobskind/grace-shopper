import React from 'react'

export const Login = ({ login }) => (
  <form id="loginForm" onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input id="username" name="username" placeholder="username" />
    <input id="password" name="password" type="password" placeholder="password" />
    <input id="submit" type="submit" value="Login" />
  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)


