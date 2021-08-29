import * as actionTypes from "./shopping-types";
import {IMMUTABLE_TYPES, TYPES_OF_GOODS} from "./shopping-types";


const _cartFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(typeof cart === 'undefined' || cart === null){
        localStorage.setItem('cart', JSON.stringify([]));
        return [];
    }
    else
        return cart;
}

const INITIAL_STATE = {
    products: [],
    services: [],
    categories: [{id: 0}],
    prices: [],
    searchItems: [],
    cart: _cartFromLocalStorage(),
    currentItem: null,
    currentCategory: {},
    isFetching: false,
}

const shopReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type){
        case actionTypes.ADD_TO_CART:
            let item;
            //get the items from the products array
            switch(payload.type){
                case TYPES_OF_GOODS.good:
                    item = state.products.find(prod => prod.id === payload.id);
                    break;
                case TYPES_OF_GOODS.service:
                    item = state.services.find(serv => serv.id === payload.id);
                    break;
                default:
                    return state;
            }

            //check if item is in cart already
            const isInCart = state.cart.find(item => item.id === payload.id && item.type === payload.type);

            return {
                ...state,
                cart: isInCart?
                    state.cart.map(
                        item => (item.id === payload.id && !IMMUTABLE_TYPES.includes(item.type)?
                            {...item, qty: item.qty+1}
                            : item)
                    ):
                    [...state.cart, {...item, qty: 1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart:
                    state.cart.filter(item => !(item.id === payload.id && item.type === payload.type))
            };
        case actionTypes.ADD_ORDER_TO_DATABASE:
            return {
                ...state,
                cart: []
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: IMMUTABLE_TYPES.includes(payload.type)? [...state.cart] :
                    state.cart.map(item =>
                        item.id === payload.id && item.type === payload.type
                            ? { ...item, qty: +payload.qty }
                            : item
                    )
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: payload
            };
        case actionTypes.LOAD_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: payload
            };
        case actionTypes.LOAD_CATEGORIES_FROM_DATABASE:
            return {
                ...state,
                categories: payload
            };
        case actionTypes.LOAD_PRODUCTS_FROM_DATABASE:
            return {
                ...state,
                products: payload
            };
        case actionTypes.LOAD_SERVICES_FROM_DATABASE:
            return {
                ...state,
                services: payload
            };
        case actionTypes.LOAD_PRICES_FROM_DATABASE:
            return {
                ...state,
                prices: payload
            };
        case actionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: payload
            };
        case actionTypes.LOAD_PRODUCTS_FOR_SEARCHING:
            const products = state.products.filter((product) => (
                product?.title.toLowerCase().includes(payload.toLowerCase())
                ||
                product?.description?.toLowerCase().includes(payload.toLowerCase())
                ||
                product?.sizes?.find(i => i?.size.toLowerCase().includes(payload.toLowerCase()))
                ||
                product?.material?.toLowerCase().includes(payload.toLowerCase())
            ));
            return {
                ...state,
                searchItems: products,
            };
        default:
            return state;
    }
};

export default shopReducer;