'use strict'

const db = require('APP/db')
const Product = db.model('product')
const CartProduct = db.model('cartProduct')

module.exports = require('express').Router()
	.get('/', function(req, res, next){
		console.log("INSIDE CART"); 
	})
	.post('/:productId', function(req, res, next){
		console.log("in post!")
		CartProduct.findOne({
			where: {
				product_id: req.params.productId, 
				$or: [
					{sessionId: req.session.sessionId}, 
					{user_id: req.user}
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
					console.log("updated cart item", updatedCartItem); 
					res.send(updatedCartItem)
				})
				.catch(next)
			} else {
				console.log("in here!")
				console.log("Cart item is", cartItem); 
				console.log("req.body", req.body)
				return cartItem.update({
					quantity: req.body.quantity
				})
				.then(updatedCartItem => {
					console.log("updated cart item", updatedCartItem); 
					res.send(updatedCartItem)
				})
				.catch(next)


				}
		})

	}) 







  // .post('/:productId', function(req, res, next){
  // 		console.log("========HITTING THIS ROUTE!!!!!======")
		// CartProduct.create(req.body)
		// .then(function(cartItem){
		// 	cartItem.setProduct(req.params.productId);
		//     if (req.user){
		//       cartItem.setUser(req.user)
		//     } else if (req.session.sessionId){
		// 		cartItem.update({sessionId: req.session.sessionId})
		// 	}
  //     		//console.log("now the cart item is ", cartItem); 
		// })
  //   	.then(updatedCartItem => res.send(updatedCartItem))
  //   	.catch(next)
  //  	}) 
