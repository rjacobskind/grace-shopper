import React from 'react'
import { connect } from 'react-redux'
import Products from '../components/Products'

const mapStateToProps = (state, ownProps) => {
  console.log('!!!!!!!', state);
  console.log('????', ownProps)
  var searchQuery = ownProps.location.query.search

  if (ownProps.location.query.search){
    var names = checkName(state.products, searchQuery);
    var descriptions = checkDescription(state.products, searchQuery);
    var categories = checkCategory(state.products, searchQuery);
    var result = names.concat(descriptions).concat(categories)
    return {products: result}
  }
  
  
  if (!ownProps.params.category) {
    return { products: state.products }
  } else {
    return {
      products: state.products.filter(function (product) {
        return product.category === ownProps.params.category
      }),
      category: ownProps.category,
    }
  }
}

export default connect(mapStateToProps)(Products)


function checkName(arr, z){
  return arr.filter(function(product){
    return product.name.indexOf(z) !== -1
  })
}


function checkDescription(arr, z){
  return arr.filter(function(product){
    return product.description.indexOf(z) !== -1
  })
}

function checkCategory(arr, z){
  return arr.filter(function(product){
    return product.category.indexOf(z) !== -1
  })
}