'use strict'

import Sequelize from 'Sequelize'
import db from 'APP/db'

const CartProduct = db.define('cartProduct', {
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
})

module.exports = CartProduct
