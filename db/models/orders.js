'use strict'

const Sequelize = require('sequelize') // EI: was getting a weird error from this being uppercase??
const db = require('APP/db')

const Order = db.define('order', {
	status: {
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),
    allowNull: false
  },
	address: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
})

module.exports = Order;
