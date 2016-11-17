import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const mainReducer = (state = initialState, action) => {
	return state;
};

const initialState = {
    title : "This is a React-router redux SPA",
    products : [
    {
        sku: "1234",
        name: "Some product 1"
    },
    {
        sku: "2234",
        name: "Some product 2"
    },
    {
        sku: "3234",
        name: "Some product 3"
    }
    ]
};

let store;

store = createStore(mainReducer, initialState, compose(
		applyMiddleware(thunk)
	));

export default store;