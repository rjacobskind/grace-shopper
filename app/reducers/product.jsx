import axios from 'axios'

export const initialState = {
			name: 'Love Potion',
			description: 'For falling in love.',
			price: 500,
			category: ['potion', 'love'],
		}
	

export const getProduct = product => ({    
	type: 'GET SINGLE PRODUCT', 
	singleProduct: product, 
})

export const loadProduct = function (id) {
  return function (dispatch) {
    fetch(`/api/products/${id}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (product) {
      const action = getProduct(product); // this should dispatch to our store as set single product to be all the product fetched via this api request
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};


export default function (state = initialState, action) {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case 'GET SINGLE PRODUCT':
			newState = action.singleProduct
			break

		default:
			return state
	}

	return newState
}