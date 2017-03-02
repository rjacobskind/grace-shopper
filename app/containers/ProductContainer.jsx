import {connect} from 'react-redux'; 
import Product from '../components/Product';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product 
	}
}

export default connect(mapStateToProps)(Product);
