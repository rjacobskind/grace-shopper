import { connect } from 'react-redux'
import ShoppingCart from '../components/ShoppingCart'

const mapStateToProps = (state, ownProps) => {

	const cartProductIds = []
	for (let i = 0; i < state.cart.length; i++) {
		cartProductIds.push(state.cart[i].product_id)
	}

	const cartProducts = state.products.filter(function (product) {
		return cartProductIds.indexOf(product.id) !== -1
	})

	const cartProductQuantities = state.cart.map(function (product) {
		return product.quantity
	})


	return {
		cartProducts: cartProducts,
		cartProductQuantity: cartProductQuantities
	}
}

export default connect(mapStateToProps)(ShoppingCart)
