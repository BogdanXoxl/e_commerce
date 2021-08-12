import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import CartItem from "./CartItem/CartItem";

import styles from "./Cart.module.css";
import {IMMUTABLE_TYPES} from "../../redux/Shopping/shopping-types";



const CartPage = ({cart}) => {
    const [totalPrice,setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((el) => {
            items+=el.qty;
            price += el.qty * el.price;
        });

        setTotalItems(items);
        setTotalPrice(price);

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
    return (
        <div className={styles.cart}>
            <div className={styles.cart__items}>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} isImmutable={IMMUTABLE_TYPES.includes(item.type)}/>
                ))}
            </div>
            <div className={styles.cart__summary}>
                <h4 className={styles.summary__title}>Cart Summary</h4>
                <div className={styles.summary__price}>
                    <span>TOTAL: ({totalItems} items)</span>
                    <span>$ {totalPrice}</span>
                </div>
                <button className={styles.summary__checkoutBtn}>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(CartPage);
