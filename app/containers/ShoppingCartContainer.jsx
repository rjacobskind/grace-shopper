import React from 'react'
import { connect } from 'react-redux'
import ShoppingCart from '../components/ShoppingCart'

const mapStateToProps = function (state, ownProps) {
	console.log(state)
	return state
}

export default connect(mapStateToProps)(ShoppingCart)
