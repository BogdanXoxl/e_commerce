import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import CartItem from "../../components/CartItem/CartItem";

import {IMMUTABLE_TYPES} from "../../redux/Shopping/shopping-types";
import {Bullet, Button, Container, Form, Input, Price, Summary, Wrapper} from "./CartPage.styles";
import {addOrder} from "../../redux/Shopping/shopping-actions";



const CartPage = ({cart, addOrder}) => {
    const [totalPrice,setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [name, setName] = useState("товар");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((el) => {
            items+= el.qty;
            price += el.qty * (el.price? el.price: 0);
        });
        if(items%10 === 1 && items !== 11)
            setName('товар');
        else if(items%10 < 5 && items%10 > 0  && !(items < 21 && items > 10))
            setName('товара');
        else
            setName('товаров');

        setTotalItems(items);
        setTotalPrice(price);

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setTel("");
        setEmail("");
        setUsername("");
        addOrder({
            username,
            email,
            tel,
            price: totalPrice,
        }, cart);
    }


    return (
        <Container>
            <Wrapper>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} isImmutable={IMMUTABLE_TYPES.includes(item.type)}/>
                ))}
            </Wrapper>

            <Summary>
                <Price>Итого: {totalItems} {name} на {totalPrice} ₽</Price>
                <Form onSubmit={onHandleSubmit}>
                    <Bullet>
                        <li>
                            <Input type="text" name="username"
                                   placeholder="Имя" value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                                   required/>
                        </li>
                        <li>
                            <Input type="email" name="email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Email" value={email}
                                   required/>
                        </li>
                        <li>
                            <Input type="tel" name="tel"
                                   onChange={(e) => setTel(e.target.value)}
                                   placeholder="Телефон"
                                   value={tel} required/>
                        </li>
                    </Bullet>
                    <Button type="submit">
                        Оформить заказ
                    </Button>
                </Form>
            </Summary>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (userData, Cart) => dispatch(addOrder(userData, Cart))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
