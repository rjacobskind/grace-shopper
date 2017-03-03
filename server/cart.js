'use strict'

const db = require('APP/db')
const Product = db.model('product')
const CartProduct = db.model('cartProduct')

module.exports = require('express').Router()
  .post('/:productId', (req, res, next) =>
		CartProduct.create(req.body)
		.then(cartItem => {
			//cartItem.setUser() //possibly need to create session stuff to get this info
			cartItem.setProduct(req.params.productId)
      if (req.user){
        cartItem.setUser(req.user)
      }

			else if (req.session.sessionId){
				cartItem.sessionId = req.session.sessionId
			}
      console.log(cartItem, "CART ITEM")
		})
    .then(updatedCartItem => res.send(updatedCartItem))
    .catch(next)
	)
