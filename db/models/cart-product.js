'use strict'

const Sequelize = require('Sequelize') 
const db = require('APP/db')

const CartProduct = db.define('cartProduct', {
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
})

module.exports = CartProduct
