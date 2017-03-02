import React, { Component } from 'react';
import { Link } from 'react-router';

export default function (props) {
	console.log(props)
  return (
	<div>
		<ul>
			{props.products ? props.products.map(function(product){
				return (
					<ul key={product.id}>
						<Link to={`products/${product.id}`}>
						<img src={product.image} height="250"/>
							<li>{ product.name }</li>
							<li>{ product.description }</li>
							<li>${Math.round(product.price / 100).toFixed(2)}</li>
						</Link>
					</ul>
				)
			}): null }
		</ul>
	</div>
  )
}

