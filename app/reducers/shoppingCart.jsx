import axios from 'axios'
import { loadProducts } from './products'

export const addCartProduct = product => ({
	type: 'ADD CART PRODUCT',
	cartProduct: product,
})

export const loadCart = products => ({
	type: 'LOAD CART ITEMS',
	cartProducts: products,
})


export const addProductToCart = (productId, quantityObj) => {
  //return function (dispatch) {
    axios.post(`/api/cart/${productId}`, quantityObj)
    .then(res => res.data)
    .then(prod => addCartProduct(prod))  // dispatch(addCartProduct(prod))
    .catch(console.error)
  //}
}

export const loadCartItems = (userId) => {
	return (dispatch) => {
		if (userId) {
			axios.get(`/api/cart/${userId}`)
			.then(res => res.data)
			.then((products) => dispatch(loadCart(products)))
			.catch(console.error)
		} else {
			axios.get('/api/cart/')
			.then(res => res.data)
			.then((products) => dispatch(loadCart(products)))
			.catch(console.error)
		}
	}
}

//This is the reducer for the shopping cart component of state.
//Its state is an array, and holds each product of a user's cart.
//The action 'ADD CART PRODUCT' adds a product to this state array.

export default function (state = [], action) {
	let newState = state.slice()

	switch (action.type) {
		case 'ADD CART PRODUCT':
			newState = [ ...newState, action.cartProduct ]
			break

		case 'LOAD CART ITEMS':
			newState = action.cartProducts
			break

		default:
			return state
	}

	return newState
}
