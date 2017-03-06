import React from 'react';
import {connect} from 'react-redux';
import Product from '../components/Product.jsx';
import {addProductToCart} from '../reducers/shoppingCart';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCartProduct: addProductToCart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
