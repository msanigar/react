import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';



const mainReducer = (state = initialState, action) => {
    
    if(action.type === 'ADD_TO_BASKET') {
        return addToBasket(state, action); 
    }

    if(action.type === 'REMOVE_FROM_BASKET') {
        return removeFromBasket(state, action);
    }

    if(action.type === 'UPDATE_FORM') {
        return updateForm(state, action);
    }

	return state;
};

function updateForm(state, action) {
    var newState = Object.assign({}, state);
    var value = action.event.target.value;
    var field = action.event.target.getAttribute('data-contacttype');

    newState.contact[field] = value;

    return newState;
    
}

function addToBasket(state, action) {
    var newState = Object.assign({}, state);
    var existingItem = returnExistingItemFromBasket(newState, action.item.sku);
    
    if (existingItem) {
        existingItem.qty++;
    } else {
        newState.basket.items.push({
            sku: action.item.sku, 
            name: action.item.name,
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
        name: 'Ghost Bolt Rifle',
        img: 'build/images/bolt.png',
        desc: 'Perfect for the desert or the tundra.',
        price: 4.13
    },
    {
        sku: '003',
        name: 'Chieftain Shotgun',
        img: 'build/images/pump.png',
        desc: 'Guarantees you the tribe leader role. ',
        price: 12.29
    },
    {
        sku: '004',
        name: 'Tempered AK47',
        img: 'build/images/ak.png',
        desc: 'A tempered metal AK47',
        price: 28.03
    }
    ],
    basket : {
        total: 0,
        items: []
    },
    contact : {}
};

let store;
const persistedState = loadState(initialState);
store = createStore(mainReducer, persistedState, compose(
		applyMiddleware(thunk)
	));

store.subscribe(() => {
    saveState(store.getState());
})

export default store;