'use strict'

const db = require('APP/db')
const Product = db.model('product')

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Product.findAll()
		.then(arrayOfProducts => res.json(arrayOfProducts))
		.catch(next)
	)

	//.get(/:id, returns a specific product)

