import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  product: require('./product').default,
  filteredProducts: require('./products').default
})

export default rootReducer
