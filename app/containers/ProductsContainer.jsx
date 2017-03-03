import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import { loadFilteredProducts } from '../reducers/products'

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  if (!ownProps.products) {
    return { products: state.products }
  } else {
    return {

      products: ownProps.products,
      category: ownProps.category,
    }
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    onFilterChange: function (event) {

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
