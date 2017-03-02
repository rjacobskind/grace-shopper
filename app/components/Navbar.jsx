import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) => {
    return (
        <div>
            <form id="search-cat-form">
                <label id="cat-label">
                    Shop: <select id="categories">
                            <option>Select Category</option>
                            <option value="/heart">Heart</option>
                            <option value="/mind">Mind</option>
                            <option value="/body">Body</option>
                            <option value="/misc">Miscellaneous</option>
                        </select>
                        <button type="submit">Button</button>
                </label>
                <label id="search-label">
                    Search:
                    <input id="search-bar" name="search" type="text" placeholder="search..."/>
                </label>
                <input id="search-button" name="search_submit" type="submit" value="go"/>
            </form>
        </div>
    )
}

export default Navbar;
