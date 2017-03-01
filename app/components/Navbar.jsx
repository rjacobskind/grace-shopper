import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) => {
    return (
        <form>
            <label>
                Select:<select> 
                        <option value="heart">Heart</option>
                        <option value="mind">Mind</option>
                        <option value="body">Body</option>
                    </select>
            </label>
            <label>
                Search: 
                <input id="search-bar" name="search" type="text" placeholder="search..."/>
            </label>
            <input id="search-button" name="search_submit" type="submit" value="go"/>
        </form>
    )
}

export default Navbar;