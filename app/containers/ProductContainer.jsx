import {connect} from 'react-redux'; 
import Product from '../components/Product';

const mapStateToProps = (state, ownProps) => {
 console.log("STATE", state); 
  return {
    product: state  
	}
}

export default connect(mapStateToProps)(Product);
