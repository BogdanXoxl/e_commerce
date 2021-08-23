import React from "react";
import {connect} from "react-redux";


import CartItem from "../../components/CartItem/CartItem";

import {IMMUTABLE_TYPES} from "../../redux/Shopping/shopping-types";
import {Container, Wrapper} from "./CartPage.styles";
import OrderForm from "../../components/OrderForm";



const CartPage = ({cart}) => {
    return (
        <Container>
            <Wrapper>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} isImmutable={IMMUTABLE_TYPES.includes(item.type)}/>
                ))}
            </Wrapper>
            <OrderForm/>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    };
};


export default connect(mapStateToProps)(CartPage);
