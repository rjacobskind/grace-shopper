export const addCartProduct = product => ({
	type: 'ADD CART PRODUCT',
	cartProduct: product,
})


/* 
This is the reducer for the shopping cart component of state. 
Its state is an array, and holds each product of a user's cart. 
The action 'ADD CART PRODUCT' adds a product to this state array.
*/
export default function (state = [], action) {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case 'ADD CART PRODUCT':
			newState = [ ...newState, action.cartProduct ]
			break

		default:
			return state
	}

	return newState
}
