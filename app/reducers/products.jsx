import axios from 'axios'

// export const initialState = [
// 		{
// 			name: 'Love Potion',
// 			description: 'For falling in love.',
// 			url: 'http://vignette3.wikia.nocookie.net/dungeonboss/images/3/3c/Heal_Potion_Icon.png/revision/latest?cb=20160510154959',
// 			price: 500,
// 			category: ['potion', 'love'],
// 			id: 1,
// 		},
// 		{
// 			name: 'Hate Potion',
// 			description: 'For falling in hate.',
// 			url: 'http://cdn.edgebee.com/static/shopr2/items/UP_mana_potion.png',
// 			price: 1000,
// 			category: ['potion', 'hate'],
// 			id: 2,
// 		},
// 	]

// I've renamed this action creator below, besides that it is identical:

// export const productsActionCreator = products => ({
// 	type: 'GET PRODUCTS',
// 	allProducts: products,
// })


// ~~~~~~~~ same as above action creator, just renamed ~~~~~~~~~~~~~~~~~~
export const getProducts = products => ({
	type: 'GET PRODUCTS',
	allProducts: products,
})

export const filterProducts = products => ({
  type: 'FILTER PRODUCTS',
  filteredProducts: products,
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

export const loadFilteredProducts = function (category) {
  return function (dispatch) {
    fetch('/api/products/' + category)
    .then(function (res) {
      return res.json()
    })
    .then(function (filteredProducts) {
      const action = filterProducts(filteredProducts)
      dispatch(action)
    })
    .catch(function (err) {
      console.error(err)
    })
  }
}

export default function (state = [], action) {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case 'GET PRODUCTS':
			newState = action.allProducts
			break

    case 'FILTER PRODUCTS':
      newState = action.filteredProducts
      break

		default:
			return state
	}

	return newState
}
