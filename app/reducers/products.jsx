import axios from 'axios'

export const getProducts = products => ({
	type: 'GET PRODUCTS',
	products: products,
})

export const loadProducts = () => {
  return (dispatch) => {
    fetch('/api/products')
    .then((res) =>  res.json())
    .then((products) => dispatch(getProducts(products))) // this should dispatch to our store as set products to be all the products fetched via this api request
    .catch(console.error)
  }
}

export default function (state = [], action) {
	let newState = state.slice()

	switch (action.type) {
		case 'GET PRODUCTS':
			newState = action.products
			break

		default:
			return state
	}

	return newState
}
