import Products from '../components/Products';
import { connect } from 'react-redux';
import {loadFilteredProducts} from '../reducers/products'

const mapStateToProps = (state) => {
  return {
    filteredProducts: state.filteredProducts
  };
};

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    onLoadFilteredProducts: function(){
      const category = ownProps.params.category;
      const thunk = loadFilteredProducts(category);
      dispatch(thunk);
    }
  }
}

const FilteredProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default FilteredProductsContainer
