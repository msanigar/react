import store from './store'

export function addToBasket(number) {
    return { type: ADD_TO_BASKET,
	    payload: {
	    	basket: 1
	    }
	}
}

store.subscribe(() => {
    console.log("Store changed", store.getState())
})

store.dispatch({type: "ADD_TO_BASKET", payload: 1})