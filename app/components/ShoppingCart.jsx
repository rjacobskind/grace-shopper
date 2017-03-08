import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';


const ShoppingCart = function (props) {
	const tableStyle = {
		textAlign: 'center',
	}

	return (
		<div>
			<table>
				<tbody style={tableStyle}>
				<tr id="header">
					<td id="name"><h2>Product</h2></td>
					<td id="quantity"><h2>Quantity</h2></td>
					<td id="price"><h2>Price</h2></td>
				</tr>
					{props.cartProducts ? props.cartProducts.map(function (product, index) {
						return (
							<tr className="row" key={product.id}>
								<td className="product-info">
									<img src={product.image} width="100" style={{float: 'left'}} />
									<h2><Link to={`/products/${product.id}`}></Link>{product.name}</h2>
								</td>
								<td className="product-quantity">
									<p>{props.cartProductQuantity[index]}</p>
								</td>
								<td className="product-price">
									<p>{(Math.round((product.price * props.cartProductQuantity[index]) / 100).toFixed(2))}</p>
								</td>
							</tr>
						)
					}) : null}
				</tbody>

			</table>
		</div>
	)
}

export default ShoppingCart
