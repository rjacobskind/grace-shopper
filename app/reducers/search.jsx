import axios from 'axios'

export const searchQuery = text => ({
    type: 'SEARCH_QUERY',
    text: text
})

export default function (state = {}, action){
    var newState = Object.assign({}, state)

    switch(action.type){
        case 'SEARCH_QUERY':
            newState.search = action.text
            break

            default:
                return state
    }
    return newState
}


