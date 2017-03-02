import axios from 'axios'

export const addCartProduct = product => ({
	type: 'ADD CART PRODUCT',
	cartProduct: product,
})


export const addProduct = function () {
	var quantity = // to fill in 
  return function (dispatch) {
    axios.post(`/api/products/${id}`, quantity)
    .then(function (res) {
      return res.data;
    })
    .then(function (product) {
      const action = addCartProduct(product); // this should dispatch to our store as set our newly created cart product in our cart state
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};


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
