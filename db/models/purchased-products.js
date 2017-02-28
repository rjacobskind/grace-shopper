'use strict'

const Sequelize = require('Sequelize')
const db =require('APP/db')

const PurchasedProducts = db.define('purchasedProducts', {
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 1
	},
})

module.exports = PurchasedProducts
