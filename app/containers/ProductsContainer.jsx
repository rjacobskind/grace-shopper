import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Products);
