import store from './store'

export const ADD_TO_BASKET = "ADD_TO_BASKET";

export function addToBasket(item) {
    return { type: ADD_TO_BASKET, item: item };
}