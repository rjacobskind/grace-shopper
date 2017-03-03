import FilteredProducts from '../components/FilteredProducts';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    category: ownProps.params.category,
    filteredProducts: state.products.filter(function (product) {
      return product.category === ownProps.params.category
    }),
  };
};

const FilteredProductsContainer = connect(mapStateToProps)(FilteredProducts)

export default FilteredProductsContainer
