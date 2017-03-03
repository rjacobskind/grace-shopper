import React, {Component} from 'react';


export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      quantity: null
    }
  }


  render(){
    console.log(this.props, "QUANTPROPS");
    return (
      <form onSubmit={() => this.props.handleSubmit(this.props.productId, this.state.quantity)}>
				<h4>Quantity</h4>
        <select onChange={() => this.setState({quantity: event.target.value})}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
  			<button type="submit">Add to Cart</button>
			</form>
    )
  }
}
