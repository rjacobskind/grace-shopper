import React, {Component} from 'react';


export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      quantity: 1
    }
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event){
    event.preventDefault();
    this.props.handleSubmit(this.props.productId, {quantity: this.state.quantity})
  }


  render(){
    var handleSubmit = this.props.handleSubmit;
    var productId = this.props.productId;
    return (
      <form onSubmit={(event) => {
                this.submitHandler(event)}} >
				<h4>Quantity</h4>
        <select onChange={(event) => this.setState({quantity: event.target.value})}>
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

