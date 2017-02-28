'use strict'

const Sequelize = require('Sequelize') 
const db = require('APP/db')

const Product = db.define('product', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	image: {
		type: Sequelize.STRING,
		defaultValue: 'APP/public/default_potion.png',
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	category: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		defaultValue: [],
	},
	inventoryAmount: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
})

module.exports = Product
