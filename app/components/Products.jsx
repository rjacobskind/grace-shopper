import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Products extends Component {
	constructor(props) {
		super(props)

		this.state = {
			category: ''
		}

		this.onFilterClick = this.onFilterClick.bind(this)
	}

	onFilterClick (category) {
		browserHistory.push('/products/category/' + category)
		this.setState({
			category: category
		})
	}

	render() {
		const props = this.props
		return (
		<div>
			<div id="searchForm">
				<form id="search-cat-form">
					<label id="cat-label">
						Categories: <select
							id="categories"
							name="Category"
							value={this.state.category}
							onChange={(event) => this.onFilterClick(event.target.value)}
							>
								<option value="">Show all</option>
								<option value="heart">Heart</option>
								<option value="mind">Mind</option>
								<option value="body">Body</option>
								<option value="misc">Miscellaneous</option>
							</select>
					</label>
				</form>
			</div>
			<div className="products">
				<ul>
					{props.products ? props.products.map(function(product){
						return (
							<ul className="product" key={product.id}>
								<Link to={`/products/${product.id}`}>
								<img src={product.image} height="250"/>
									<li className="product-name">{ product.name }</li>
									<li className="description">{ product.description }</li>
									<li className="price">${Math.round(product.price / 100).toFixed(2)}</li>
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

