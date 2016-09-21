import { createStore } from 'redux'

export default function configureStore(initialState = { todos:[] } ) {
	return createStore(reducer, initialState)
}