import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Products extends Component {
	constructor(props) {
		super(props)

		this.onFilterClick = this.onFilterClick.bind(this)
	}

	onFilterClick (category) {
		browserHistory.push('/products/' + category)
	}

	render() {
		const props = this.props
		console.log(props)
		return (
		<div>
			<div id="searchForm">
				<form id="search-cat-form">
					<label id="cat-label">
						Shop: <select
							id="categories"
							name="Category"
							value={props.category}
							onChange={() => this.onFilterClick(props.category)}
							>
								<option>Select Category</option>
								<option value="heart">Heart</option>
								<option value="mind">Mind</option>
								<option value="body">Body</option>
								<option value="misc">Miscellaneous</option>
							</select>
					</label>
					<label id="search-label">
						Search:
						<input id="search-bar" name="search" type="text" placeholder="search..." />
					</label>
					<input id="search-button" name="search_submit" type="submit" value="go" />
				</form>
			</div>

			<div id="products">
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
		</div>
		)
	}
}

export default Products

