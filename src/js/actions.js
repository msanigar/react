import store from './store'

export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const UPDATE_FORM = "UPDATE_FORM";

export function addToBasket(item) {
    return { type: ADD_TO_BASKET, item: item};
}

export function removeFromBasket(item) {
	return { type: REMOVE_FROM_BASKET, item: item};
}

export function updateForm(event) {
    return { type: UPDATE_FORM, event: event};
}