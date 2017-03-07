import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  product: require('./product').default,
  cart: require('./shoppingCart').default,
  search: require('./search').default
})

export default rootReducer
