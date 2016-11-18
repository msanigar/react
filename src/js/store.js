import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const mainReducer = (state = initialState, action) => {
    
    if(action.type === 'ADD_TO_BASKET') {
        return addToBasket(state, action); 
    }

    if(action.type === 'REMOVE_FROM_BASKET') {
        return removeFromBasket(state, action);
    }

	return state;
};

function addToBasket(state, action) {
    var newState = Object.assign({}, state);
    var existingItem = returnExistingItemFromBasket(newState, action.item.sku);
    
    if (existingItem) {
        existingItem.qty++;
    } else {
        newState.basket.items.push({
            sku: action.item.sku, 
            qty: 1, 
            price: action.item.price
        });
    }

    newState.basket.total = calculatePrice(newState);

    return newState;
}

function removeFromBasket(state, action) {
    var newState = Object.assign({}, state);
    let existingItem = returnExistingItemFromBasket(newState, action.item.sku);
    
    if (existingItem) {
        if (existingItem.qty > 1) {
            existingItem.qty--;
        } else {
            var indexInArray = newState.basket.items.indexOf(existingItem);
            if (indexInArray > -1) {
                newState.basket.items.splice(indexInArray, 1);
            }
        }

        newState.basket.total = calculatePrice(newState);
    }

    return newState;
}

function returnExistingItemFromBasket(state, sku) {
    var existingItems = state.basket.items.filter((item) => {
        return item.sku === sku;
    });
    
    return existingItems.length && existingItems[0];
}

function calculatePrice(state) {
    let total = 0;

    for (let i = 0; i < state.basket.items.length; i++) {
        let item = state.basket.items[i];
        total += item.price * item.qty;
    }
    return total
}

const initialState = {
    title : 'This is a React-router redux SPA',
    products : [
    {
        sku: '001',
        name: 'Red Shine Pistol',
        img: 'build/images/p250.png',
        desc: 'Glorious and shiny',
        price: 1.99
    },
    {
        sku: '002',
        name: 'Red Shine Pistol',
        img: 'build/images/p250.png',
        desc: 'Glorious and shiny',
        price: 2.59
    },
    {
        sku: '003',
        name: 'Red Shine Pistol',
        img: 'build/images/p250.png',
        desc: 'Glorious and shiny',
        price: 3.19
    },
    {
        sku: '004',
        name: 'Red Shine Pistol',
        img: 'build/images/p250.png',
        desc: 'Glorious and shiny',
        price: 1.54
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