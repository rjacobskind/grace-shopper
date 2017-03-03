'use strict'

const db = require('APP/db')
const Product = db.model('product')
const CartProduct = db.model('cartProduct')
var seshId = 1;

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
		if (!req.session.sessionId){
			req.session.sessionId = seshId
			seshId++
		}
		console.log(req.session, "******");
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
	})

	.get('/:id', (req, res, next) => {
		var id = req.params.id;
		Product.findById(parseInt(id))
		.then(singleProduct => {
			res.json(singleProduct)
		})
		.catch(next)
	})
	.post('/:id', (req, res, next) =>
		CartProduct.create(req.body)
		.then(cartItem => {
			//cartItem.setUser() //possibly need to create session stuff to get this info
			cartItem.setProduct(req.params.id)
		})
	)
