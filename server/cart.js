'use strict'

const db = require('APP/db')
const Product = db.model('product')
const CartProduct = db.model('cartProduct')

module.exports = require('express').Router()
	.post('/:productId', (req, res, next) => {
		if (!req.user) return next()

		CartProduct.findOrCreate({
			where: {
				product_id: req.params.productId,
				user_id: req.user.id
			}
		})
		.spread((cartItem, bool) => {
				cartItem.setProduct(req.params.productId)
				cartItem.setUser(req.user)
				return cartItem.update({quantity: req.body.quantity})
				})
				.then(updatedCartItem => {
					res.send(updatedCartItem)
				})
				.catch(next)
	})

	.post('/:productId', (req, res, next) => {
			CartProduct.findOrCreate({
				where: {
					product_id: req.params.productId,
					sessionId: req.session.sessionId
				}
			})
			.spread((cartItem, bool) => {
				cartItem.setProduct(req.params.productId)
				return cartItem.update({quantity: req.body.quantity})
			})
			.then(updatedCartItem => {
				res.send(updatedCartItem)
			})

			.catch(next)
	})
	.get('/', (req, res, next) => {
		if (req.params.userId) {
			CartProduct.findAll({
				where: {
					user_id: req.params.userId,
				},
			})
			.then(shoppingCart => res.send(shoppingCart))
			.catch(next)
		} else {
			CartProduct.findAll({
				where: {
					sessionId: req.session.sessionId,
				},
			})
			.then(shoppingCart => res.send(shoppingCart))
			.catch(next)
		}
	})

