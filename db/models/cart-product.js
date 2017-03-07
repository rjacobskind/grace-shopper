'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const CartProduct = db.define('cartProduct', {
	quantity: {
		type: Sequelize.INTEGER
	},
	sessionId: {
		type: Sequelize.STRING,
		allowNull: true
	}
})

module.exports = CartProduct
