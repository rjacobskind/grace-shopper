import { connect } from 'react-redux'
import ShoppingCart from '../components/ShoppingCart'

const mapStateToProps = (state, ownProps) => {
	console.log('state', state)
	return state
}

export default connect(mapStateToProps)(ShoppingCart)
