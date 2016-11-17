import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const mainReducer = (state = initialState, action) => {

    if(action.type === "ADD_TO_BASKET") {
        return Object.assign({}, state, {
        basket: action.payload
      })
    }
	return state;
};

const initialState = {
    title : "This is a React-router redux SPA",
    products : [
    {
        sku: "001",
        name: "Red Shine Pistol",
        img: "build/images/p250.png",
        desc: "Glorious and shiny",
        price: "$3.07"
    },
    {
        sku: "002",
        name: "Some product 2"
    },
    {
        sku: "003",
        name: "Some product 3"
    },
    {
        sku: "004",
        name: "Some product 4"
    }
    ],
    basket : 0
};

let store;

store = createStore(mainReducer, initialState, compose(
		applyMiddleware(thunk)
	));

export default store;