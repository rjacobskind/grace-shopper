import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'


const mapStateToProps = (state, ownProps) => {
   console.log('OWNPROPS',ownProps)
   console.log('STATE', state)

    return {
        search: state.search
    }
}



export default connect(mapStateToProps)(Search)