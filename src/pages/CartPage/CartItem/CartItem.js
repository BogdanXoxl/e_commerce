import React, {useState} from "react";
import {connect} from "react-redux";

import {adjustQty, removeFromCart} from "../../../redux/Shopping/shopping-actions";

import styles from "./CartItem.module.css";
import NoImage from "../../../assets/no_image.jpg";

const CartItem = ({item, isImmutable,  adjustQty, removeFromCart}) => {

    const onChangeQty = (e) => {
        const value = Number(e.target.value);
        adjustQty(item.id, item.type, value);
    }


  return (
      <div className={styles.cartItem}>
        <img
            className={styles.cartItem__image}
            src={NoImage}
            alt={item.title}
        />
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>{item.title}</p>
          <p className={styles.details__desc}>{item.description}</p>
          <p className={styles.details__price}>{item.price}</p>
        </div>
        <div className={styles.cartItem__actions}>
            {!isImmutable &&
              <div className={styles.cartItem__qty}>
                <label htmlFor="qty">Qty</label>
                <input min="1" type="number" id="qty" name="qty" value={item.qty} onChange={onChangeQty}/>
              </div>
            }
          <button className={styles.actions__deleteItemBtn} onClick={() => removeFromCart(item.id, item.type)}>
            <img
                src="https://image.flaticon.com/icons/svg/709/709519.svg"
                alt=""
            />
          </button>
        </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (itemID, typeOfItem, value) => dispatch(adjustQty(itemID, typeOfItem, value)),
        removeFromCart: (itemID, typeOfItem) => dispatch(removeFromCart(itemID, typeOfItem))
    };
};


export default connect(null, mapDispatchToProps)(CartItem);
