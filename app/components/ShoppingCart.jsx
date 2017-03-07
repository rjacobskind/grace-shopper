import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';


const ShoppingCart = function (props) {

	var arr = [];
	for (var i = 0; i < props.cart.length; i++) {
		arr.push(props.cart[i].product_id)
	}
	const cartProductInfo = props.products.filter(function(product){
		if (arr.indexOf(product.id) !== -1){
			var id = product.id;
			for (var j = 0; j < props.cart.length; j++){
				if (props.cart[j].productId === id){
					var quant = props.cart[j].quantity;
				}
			}
		}

		//return arr.indexOf(product.id) !== -1
	})

	cartProductInfo.forEach(function (product) {
		product.cartQuantity =
	})

	return(
		<div>
			<div id="table">
				<div id="header">
					<div id="name"><h2>Product</h2></div>
					<div id="quantity"><h2>Quantity</h2></div>
					<div id="price"><h2>Price</h2></div>
				</div>
				<div id="body">
					{props.cart ? cartProductInfo.map(function (product) {
						return (
							<div className="row" key={product.id}>
								<div className="product-info">
									<h2>{product.name}</h2>
								</div>
								<div className="product-quantity">
									<p>{product.quantity}</p>
								</div>
								<div className="product-price">
									<p>{Math.round(product.price / 100).toFixed(2)}</p>
								</div>
							</div>
						)
					}) : null}
				</div>
			</div>
		</div>
	)
}

export default ShoppingCart
