import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'


const mapStateToProps = (state, ownProps) => {
    return {
        search: state.search
    }
}



export default connect(mapStateToProps)(Search)