import React, { Component } from 'react';
import { Link } from 'react-router';

export default function (products) {
  console.log('props', products)
  return (
    <p>Hello world</p>
  )
}


/* 

export default function (products) {
  console.log('props', products)
  return (
	<div>
		<h1>Our Poppin' Potions</h1> 
		<ul>
			{this.props.products ? this.props.products.map(function(product){
				return (
					<ul key={product.id}> 
						<Link to={`products/${product.id}`}>
						<img src={product.url} height="250"/>
							<li>{ product.name }</li>
							<li>{ product.description }</li>
							<li>${product.price}</li> 
						</Link>
					</ul> 
				)
			}): null }
		</ul> 
	</div> 
  )
}

*/ 