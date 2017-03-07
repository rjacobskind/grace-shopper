import axios from 'axios'

export const addCartProduct = product => ({
	type: 'ADD CART PRODUCT',
	cartProduct: product,
})

export const loadCart = cart => ({
  type: 'LOAD_CART',
  cart: cart,
})

export const addProductToCart = function (productId, quantityObj) {
  //return function (dispatch) { 
    axios.post(`/api/cart/${productId}`, quantityObj)
    .then(function (res) {
      return res.data
    })
    .then(function (prod) {
      const action = addCartProduct(prod); // this should dispatch to our store as set our newly created cart product in our cart state
     // dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    })
  //};
}

export const loadUserCart = function(userId){
  axios.get(`/api/cart/${userId}`)
    .then(function(res){
      return res.data
    })
    .then(function(cart){
      const action = loadCart(cart)
    })
    .catch(function(err){
      console.error(err)
    })
}


//This is the reducer for the shopping cart component of state.
//Its state is an array, and holds each product of a user's cart.
//The action 'ADD CART PRODUCT' adds a product to this state array.

export default function (state = [], action) {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case 'ADD CART PRODUCT':
			newState = [ ...newState, action.cartProduct ]
			break

    case 'LOAD_CART':
      newState = action.cart
      break

		default:
			return state
	}

	return newState
}
