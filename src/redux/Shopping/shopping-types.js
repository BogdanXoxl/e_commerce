export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = 'ADJUST_QTY';
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';
export const LOAD_CURRENT_CATEGORY = 'LOAD_CURRENT_CATEGORY';

export const LOAD_PRODUCTS_FROM_DATABASE = "LOAD_PRODUCTS_FROM_DATABASE";
export const LOAD_CATEGORIES_FROM_DATABASE = "LOAD_CATEGORIES_FROM_DATABASE";
export const LOAD_SERVICES_FROM_DATABASE = "LOAD_SERVICES_FROM_DATABASE";
export const LOAD_PRICES_FROM_DATABASE = "LOAD_PRICES_FROM_DATABASE";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const LOAD_PRODUCTS_FOR_SEARCHING = "LOAD_PRODUCTS_FOR_SEARCHING";

export const ADD_ORDER_TO_DATABASE = "ADD_ORDER_TO_DATABASE";

//types of goods in cart
export const TYPES_OF_GOODS = {
    service: "service",
    good: "good"
}

export const IMMUTABLE_TYPES = [TYPES_OF_GOODS.service];