import FilteredProducts from '../components/FilteredProducts';
import { connect } from 'react-redux';
import {loadFilteredProducts} from '../reducers/products'


const mapStateToProps = (state, ownProps) => {
  return {
    category: ownProps.params.category,
    products: state.products.filter(function (product) {
      return product.category === ownProps.params.category
    }),
  };
};

// const mapDispatchToProps = function(dispatch, ownProps){
//   return {
//     onLoadFilteredProducts: function(){
//       const category = ownProps.params.category;
//       const thunk = loadFilteredProducts(category);
//       dispatch(thunk);
//     },
//     onFilterSubmit: function (event) {
//       event.preventDefault()
//       const category = {
//         category: event.target.value,
//       }
//     }
//   }
// }

const FilteredProductsContainer = connect(mapStateToProps)(FilteredProducts)

export default FilteredProductsContainer
