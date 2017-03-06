import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import {replaceInUrlQuery, configureUrlQuery, pushUrlQuery, addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import {searchQuery} from '../reducers/search'

configureUrlQuery({history: browserHistory})



class Search extends Component {
    
    static propTypes = {
        search: PropTypes.string,
        onChangeSearch: PropTypes.func
    }
    
    constructor(props){
        super(props)
         this.state = {'searchQuery': ''}
         
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
    }
   

handleChange (event){
    this.setState({'searchQuery': event.target.value})
}

handleSubmit(event){
    event.preventDefault()
    var searchText = pushUrlQuery({search: this.state.searchQuery})
    searchQuery(searchText)
}

render(){
console.log('PROPS', this.props)
return (
<form onSubmit={this.handleSubmit}>
    <label id="search-label">
	    Search:
	        <input 
                id="search-bar" 
                name="search" 
                type="text" 
                placeholder="search..." 
                value={this.state.searchQuery} 
                onChange = {this.handleChange}
            />
    </label>
	    <input 
            id="search-button" 
            name="search_submit" 
            type="submit" value="go" 
            onClick= {() => this.props.onChangeSearch('testing')}
        />
</form>
)
}

}

const urlPropsQueryConfig = {
    search: {
        type: UrlQueryParamTypes.string
    },

}

// mapStateToProps = () => {

// }


export default addUrlProps({urlPropsQueryConfig})(Search)