import ProductsContainer from '../containers/ProductsContainer'
import React from 'react'

export default function filteredProducts (props) {
	const category = props.category
	const products = props.filteredProducts

	return (
		<div>
			<h3>{category} Potions</h3>
			<ProductsContainer products={products} category={category} />
		</div>
	)
}
