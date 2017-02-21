/**
 *
 * Preparing the current store state before sending to components [DEV]
 *
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
// Local imports
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore)

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(
		rootReducer,
		initialState,
		DevTools.instrument()
	)

	return store
}