import axios from 'axios'

export const productsActionCreator = products => ({
	type: 'GET PRODUCTS',
	allProducts: products,
})

export const initialState = [
		{
			name: 'Love Potion',
			description: 'For falling in love.',
			price: 500,
			category: ['potion', 'love'],
		},
		{
			name: 'Hate Potion',
			description: 'For falling in hate.',
			price: 1000,
			category: ['potion', 'hate'],
		},
	]

export default function (state = initialState, action) {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case 'GET PRODUCTS':
			newState = action.products
			break

		default:
			return state
	}

	return newState
}
