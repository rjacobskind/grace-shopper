'use strict'

const db = require('APP/db')
const Product = db.model('product')

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Product.findAll({
			// This only fetches products that have an inventory amount that is not equal to 0 
			where: {
				inventoryAmount: {
					$ne: 0, 
				}
			}

		})
		.then(arrayOfProducts => res.json(arrayOfProducts))
		.catch(next)
	)
	//.post('/:id', (req, res, next) => 
		// come back to once we make form 

		//Product.create




		//)

	//.get(/:id, returns a specific product)

