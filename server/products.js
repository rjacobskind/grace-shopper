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
	.get('/:category', (req, res, next) =>
		Product.findAll({ where: {
			category: req.params.category
		}})
		.then(arrayOfProducts => res.json(arrayOfProducts))
		.catch(next)
	)

