import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const mainReducer = (state = initialState, action) => {
    
    if(action.type === "ADD_TO_BASKET") {
        return addToBasket(state, action); 
    }

	return state;
};

function addToBasket(state, action) {
    var newState = Object.assign({}, state);
    newState.basket.total += action.item.price; 
    var existingItems = newState.basket.items.filter((item) => {
        return item.sku === action.item.sku;
    });
    if (existingItems.length) {
        existingItems[0].qty++;
    } else {
        newState.basket.items.push({sku: action.item.sku, "qty": 1});
    }
    return newState;
}

const initialState = {
    title : "This is a React-router redux SPA",
    products : [
    {
        sku: "001",
        name: "Red Shine Pistol",
        img: "build/images/p250.png",
        desc: "Glorious and shiny",
        price: 1.99
    },
    {
        sku: "002",
        name: "Red Shine Pistol",
        img: "build/images/p250.png",
        desc: "Glorious and shiny",
        price: 1.99
    },
    {
        sku: "003",
        name: "Red Shine Pistol",
        img: "build/images/p250.png",
        desc: "Glorious and shiny",
        price: 1.99
    },
    {
        sku: "004",
        name: "Red Shine Pistol",
        img: "build/images/p250.png",
        desc: "Glorious and shiny",
        price: 1.99
    }
    ],
    basket : {
        total: 0,
        items: []
    }
};

let store;

store = createStore(mainReducer, initialState, compose(
		applyMiddleware(thunk)
	));

export default store;