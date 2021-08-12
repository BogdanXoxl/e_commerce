import * as actionTypes from "./shopping-types";
import {ServiceData, GoodsData, CategoryData} from "../../testData";
import {IMMUTABLE_TYPES, TYPES_OF_GOODS} from "./shopping-types";

const INITIAL_STATE = {
    products: [...GoodsData],
    services: [...ServiceData],
    categories: [...CategoryData],
    cart: [], // {id, title, description, price, img, qty}
    currentItem: null,
    currentCategory: CategoryData[0],
    total_pages: 0,
    page: 0,
}

const shopReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type){
        case actionTypes.ADD_TO_CART:
            let item;
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
            //get the items from the products array

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
        default:
            return state;
    }
};

export default shopReducer;