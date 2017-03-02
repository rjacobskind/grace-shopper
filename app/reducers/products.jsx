import axios from 'axios'

export const getProducts = products => ({
	type: 'GET PRODUCTS',
	allProducts: products,
})

export const loadProducts = function () {
  return function (dispatch) {
    fetch('/api/products')
    .then(function (res) {
			// console.log('products', res)
      return res.json();
    })
    .then(function (products) {
      const action = getProducts(products); // this should dispatch to our store as set products to be all the products fetched via this api request
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};

export default function (state = [], action) {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case 'GET PRODUCTS':
			newState = action.allProducts
			break

		default:
			return state
	}

	return newState
}
