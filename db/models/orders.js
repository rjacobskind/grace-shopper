'use strict'

import Sequelize from 'Sequelize'
import db from 'APP/db'

const Order = db.define('order', {
	status: {
		type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),
		allowNull: false,
	},
	address: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
})

module.exports = Order;
