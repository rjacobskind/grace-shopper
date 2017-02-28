import axios from 'axios'

export default function (state = [], action) {
	const newState = Object.assign({}, state)

	switch (action.type) {
		case 'GET PRODUCTS':
			newState.products = action.products
			break

		default:
			return state;
	}

	return newState;
}
