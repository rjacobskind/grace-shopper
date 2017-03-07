import axios from 'axios'

export const getProduct = product => ({
	type: 'GET SINGLE PRODUCT',
	product: product,
})

export const loadSingleProduct = (id)  => {
  return (dispatch) => {
    axios.get(`/api/products/${id}`)
    .then(res => res.data)
    .then(product => dispatch(getProduct(product))) // this should dispatch to our store as set single product to be all the product fetched via this api request)
    .catch(console.error) 
  }
}

export default function (state = {}, action) {

	switch (action.type) {
		case 'GET SINGLE PRODUCT':
      return Object.assign({}, state, action.product)
			break

		default:
			return state
	}

	return newState
}
