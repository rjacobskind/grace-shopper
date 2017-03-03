import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import {productsActionCreator, initialState} from '../reducers/products'

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.products) {
    return { products: state.products }
  } else {
    return { products: ownProps.products }
  }
}

export default connect(mapStateToProps)(Products);
