import * as actionTypes from "./shopping-types";
import firebase from "../../firebase/index";

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
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: true});
        const item = await firebase.getProductById(id);
        dispatch({type: actionTypes.LOAD_CURRENT_ITEM, payload: item});
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: false});
    }
};


export const loadCategories = () => {
    return async (dispatch) => {
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: true});
        const categories = await firebase.getCategories();
        dispatch({type: actionTypes.LOAD_CATEGORIES_FROM_DATABASE, payload: categories});
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: false});
    }
};

export const loadProducts = () => {
    return async (dispatch) => {
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: true});
        const products = await firebase.getProducts();
        dispatch({type: actionTypes.LOAD_PRODUCTS_FROM_DATABASE, payload: products});
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: false});
    }
};

export const loadServices = () => {
    return async (dispatch) => {
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: true});
        const services = await firebase.getServices();
        dispatch({type: actionTypes.LOAD_SERVICES_FROM_DATABASE, payload: services});
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: false});
    }
};

export const loadPrices = () => {
  return async (dispatch) => {
      dispatch({type: actionTypes.SET_IS_FETCHING, payload: true});
      const prices = await firebase.getPrices();
      dispatch({type: actionTypes.LOAD_PRICES_FROM_DATABASE, payload: prices});
      dispatch({type: actionTypes.SET_IS_FETCHING, payload: false});
    }
};

export const addOrder = (userData, Cart) => {
    firebase.addOrder(userData, Cart);
    return {
        type:actionTypes.ADD_ORDER_TO_DATABASE
    };
};



export const search = (searchItem) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: true});
        await dispatch(loadProducts());
        dispatch({type: actionTypes.LOAD_PRODUCTS_FOR_SEARCHING, payload: searchItem});
        dispatch({type: actionTypes.SET_IS_FETCHING, payload: false});
    }
}
