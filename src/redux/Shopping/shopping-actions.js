import * as actionTypes from "./shopping-types";
import firebase from "../../firebase/index";
import {ADD_ORDER_TO_DATABASE} from "./shopping-types";

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

export const loadCurrentItemById = (id) => {
    return async (dispatch) => {
        const item = await firebase.getProductById(id);
        dispatch({type: actionTypes.LOAD_CURRENT_ITEM, payload: item});
    }
};

export const loadCurrentCategoryByTitle = (title) => {
    return async (dispatch) => {
        const category = await firebase.getCategoryByTitle(title);
        dispatch({type: actionTypes.LOAD_CURRENT_CATEGORY, payload: category});
    }
};

export const loadCategories = () => {
    return async (dispatch) => {
        const categories = await firebase.getCategories();
        dispatch({type: actionTypes.LOAD_CATEGORIES_FROM_DATABASE, payload: categories});
    }
};

export const loadProducts = () => {
    return async (dispatch) => {
        const category = await firebase.getProducts();
        dispatch({type: actionTypes.LOAD_PRODUCTS_FROM_DATABASE, payload: category});
    }
};

export const loadServices = () => {
    return async (dispatch) => {
        const services = await firebase.getServices();
        dispatch({type: actionTypes.LOAD_SERVICES_FROM_DATABASE, payload: services});
    }
};

export const loadPrices = () => {
  return async (dispatch) => {
      const prices = await firebase.getPrices();
      dispatch({type: actionTypes.LOAD_PRICES_FROM_DATABASE, payload: prices});
    }
};

export const addOrder = (userData, Cart) => {
    firebase.addOrder(userData, Cart);
    return {
        type:actionTypes.ADD_ORDER_TO_DATABASE
    };
};
