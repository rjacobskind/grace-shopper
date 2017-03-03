import React from 'react'
import { Link } from 'react-router'
import { filterProducts } from '../reducers/products'

export default class NavBar extends React.Component {
	constructor(props) {
    super()

    this.state = {
      category: '',
    }

    this.onCategorySubmit = this.onCategorySubmit.bind(this);
  }

  onCategorySubmit (event) {
    this.setState({
      Category: event.target.value,
    })
  }

	render() {
    console.log('state', this.state);
    return (
      <div>
        <form id="search-cat-form">
          <label id="cat-label">
            Shop: <select
              id="categories"
              name="Category"
              value={this.state.category}
              onChange={this.onCategorySubmit}
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
    )
	}
}
