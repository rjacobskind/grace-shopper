import React, { Component } from 'react';

export default function (props) {
  console.log('*********PROPS***********', props)
  return (
  	<div>
  		<h1>{ props.product.name}</h1>
  		<img src={props.product.image} height="400"/>
  		<ul>
  			<li>${Math.round(props.product.price / 100).toFixed(2)}</li>
  			<li>{ props.product.description }</li>
  		</ul>
			<form onSubmit={}>
				<h4>Quantity</h4>
				<select>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
  			<button type="submit">Add to Cart</button>
			</form>
  	</div>
  )
}
