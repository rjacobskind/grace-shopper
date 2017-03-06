'use strict'

const db = require('APP/db')
const Product = db.model('product')
const CartProduct = db.model('cartProduct')

module.exports = require('express').Router()
	.post('/:productId', function(req, res, next){
		CartProduct.findOne({
			where: {
				product_id: req.params.productId, 
				$or: [
					{sessionId: req.session.sessionId}, 
					{user_id: req.user.id}
					]
			}
		})
		.then(function(cartItem){
			if (!cartItem){
				CartProduct.create(req.body)
				.then(function(cartItem){
					cartItem.setProduct(req.params.productId);
				    if (req.user){
				      cartItem.setUser(req.user)
				    } else if (req.session.sessionId){
						return cartItem.update({sessionId: req.session.sessionId})
					}
				})
				.then(updatedCartItem => {
					res.send(updatedCartItem)
				})
				.catch(next)
			} else {
				return cartItem.update({
					quantity: req.body.quantity
				})
				.then(updatedCartItem => {
					res.send(updatedCartItem)
				})
				.catch(next)


				}
		})

	}) 

