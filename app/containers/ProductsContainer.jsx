import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import {productsActionCreator, initialState} from '../reducers/products'

const mapStateToProps = (state, ownProps) => {
  console.log('products props', ownProps)

  return {
    products: ownProps.products,
  }
}

export default connect(mapStateToProps)(Products);
