/**
 *
 * Preparing the current store state before sending to components [PROD]
 *
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
// Local imports
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore)

export default function configureStore(initialState) {
	return createStoreWithMiddleware(
		rootReducer,
		initialState
	)
}