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
  		<button type="button">Add to Cart</button>
  	</div> 
  )
}
