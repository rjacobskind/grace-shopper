'use strict'

const Sequelize = require('sequelize') 
const db = require('APP/db')

const Order = db.define('order', {
	status: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isIn: [['Created', 'Processing', 'Cancelled', 'Completed']]
		}
	},
	address: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
})

module.exports = Order;

