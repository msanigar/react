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

    if(action.type === 'UPDATE_PAY') {
        return updatePay(state, action);
    }

    if(action.type === 'VALIDATE_FORM') {
        return validateForm(state, action);
    }

    if(action.type === 'CLEAR_BASKET') {
        return clearBasket(state, action);
    }

	return state;
};

function updateForm(state, action) {
        var newState = Object.assign({}, state);
        var value = action.event.target.value;
        var field = action.event.target.getAttribute('data-contacttype');
        var required = action.event.target.getAttribute('data-required') ? true : false;
        var elm = action.event.target;

        const fnameValidation = 'Magic';
        const snameValidation = 'Bob';
        const emailValidation = 'magic.bob@email.com';
        const phoneValidation = '01010 101 010';
        const addr1Validation = '10 Spooner Street';
        const addr2Validation = 'Quahog';
        const pcodeValidation = '01010';
        const cityValidation = 'Rhode Island';

        switch (field) {
            case "fname":
                isValidContact("fname", fnameValidation, value, required, elm)
                break;
            case "sname":
                isValidContact("sname", snameValidation, value, required, elm)
                break;
            case "email":
                isValidContact("email", emailValidation, value, required, elm)
                break;
            case "phone":
                isValidContact("phone", phoneValidation, value, required, elm)
                break;
            case "addr1":
                isValidContact("addr1", addr1Validation, value, required, elm)
                break;
            case "addr2":
                isValidContact("addr2", addr2Validation, value, required, elm)
                break;
            case "pcode":
                isValidContact("pcode", pcodeValidation, value, required, elm)
                break;
            case "city":
                isValidContact("city", cityValidation, value, required, elm)
                break;
        }

        function isValidContact(fieldType, validationType, value, required, elm) {
            if (value === validationType) {
                newState.validation.contact[fieldType] = true;
            } else {
                newState.validation.contact[fieldType] = false;
            }
            if(required) {
                var needsError = value ? false : true;
                var hasError = hasClass(elm, "error");

                if(needsError && !hasError) {
                    addClass(elm, "error");
                } else if (!needsError && hasError) {
                    removeClass(elm, "error");
                }
            }
        }       

        newState.contact[field] = value;

        return newState;  
}

function updatePay(state, action) {
    var newState = Object.assign({}, state);
    var value = action.event.target.value;
    var field = action.event.target.getAttribute('data-paymenttype');

    const cardValidation = '4111111111111';
    const cardName = 'Magic Bob';
    const cardExpiry = '01/20';
    const cardCcv = '123';

    switch (field) {
        case "card":
            isValidPayment("card", cardValidation, value)
        case "name":
            isValidPayment("name", cardName, value)
        case "date":
            isValidPayment("date", cardExpiry, value)
        case "ccv":
            isValidPayment("ccv", cardCcv, value)
    }

    function isValidPayment(fieldType, validationType, value) {
        if (value === validationType) {
            newState.validation.payment[fieldType] = true;
        } else {
            newState.validation.payment[fieldType] = false;
        }
    } 

    newState.payment[field] = value;

    return newState;
    
}

function addToBasket(state, action) {
    var newState = Object.assign({}, state);
    var existingItem = returnExistingItemFromBasket(newState, action.item.sku);
    var basketItems = state.basket.items;
    
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

    if(basketItems.length > 0) {
        newState.validation.basket = true;
    } else {
        newState.validation.basket = false;
    }
    newState.basket.total = calculatePrice(newState);

    return newState;
}

function removeFromBasket(state, action) {
    var newState = Object.assign({}, state);
    let existingItem = returnExistingItemFromBasket(newState, action.item.sku);
    var basketItems = state.basket.items;
    
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

    if(basketItems.length > 0) {
        newState.validation.basket = true;
    } else {
        newState.validation.basket = false;
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

function clearBasket(state) {
    var newState = Object.assign({}, state);
    newState.basket.items = [];
    newState.basket.total = 0;
    return newState;
}

// utils - need moving out

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        if ( !this.hasClass(el, className) ) {
            el.className += className + ' ';
        }
    }
}

function removeClass(el, className) {
    if (!el instanceof HTMLElement && typeof className !== 'string') {
        throw new Error('The element passed in to removeClass is not a valid HTML element');
    }

    if (el.classList) {
        el.classList.remove(className);
    } else {
        console.log("%cNo classes on this element.", "color:green; background-color:yellow");
    }
}

function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        var r = new RegExp(`(?:\\s|^)${className}(?:\\s|$)`);
        return r.test(el.className);
    }
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
    contact : {},
    payment : {},
    validation : {
        basket : false,
        contact : {
            fname: false
        },
        payment : {
            card: false
        }
    }
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