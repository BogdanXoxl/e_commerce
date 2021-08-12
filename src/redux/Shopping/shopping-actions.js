import * as actionTypes from "./shopping-types";

export const addToCart = (itemID, typeOfItem) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            type: typeOfItem
        }
    };
};

export const removeFromCart = (itemID, typeOfItem) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
            type: typeOfItem
        }
    };
};

export const adjustQty = (itemID, typeOfItem, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            type: typeOfItem,
            qty: value
        }
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};

export const loadCurrentCategory= (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_CATEGORY,
        payload: item,
    };
};