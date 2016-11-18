import store from './store'

export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export function addToBasket(item) {
    return { type: ADD_TO_BASKET, item: item };
}

export function removeFromBasket(item) {
	return { type: REMOVE_FROM_BASKET, item: item};
}