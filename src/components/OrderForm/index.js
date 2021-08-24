import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import * as Yup from 'yup';
import Swal from 'sweetalert2'

import {addOrder} from "../../redux/Shopping/shopping-actions";

import {Bullet, Button, Error, Form, Input, Price, Summary} from "./OrderForm.styles";
import {yupResolver} from "@hookform/resolvers/yup";
import parsePhoneNumberFromString from "libphonenumber-js";

const schema = Yup.object().shape({
    username: Yup.string().matches(/^([^0-9]*)$/, "Имя не может содержать цифры!").required("Имя - обязательное поле!"),
    email: Yup.string().email('Некорректный email!').required("Email - обязательное поле!"),
    tel: Yup.string().required("Без номера телефона, мы не сможем до вас дозвониться!")
});

const normalizePhoneNumber = (value) => {
    console.log(value);
    const phoneNumber = parsePhoneNumberFromString(value, 'RU');
    if(phoneNumber)
        return phoneNumber.formatInternational()
    return value;
};

const OrderForm = ({cart, addOrder}) => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const [totalPrice,setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [name, setName] = useState("товар");

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

    const onHandleSubmit = (data) => {
        if(totalItems) {
            addOrder({
                ...data,
                price: totalPrice,
            }, cart);
            reset();
            Swal.fire({
                title: 'Спасибо за заказ!',
                text: 'В ближайшее время вам позвонит наш сотрудник для уточнения деталей заказа.',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        }else
        {}//some code
    };

    return (
        <Summary>
            <Price>Итого: {totalItems} {name} на {totalPrice} ₽</Price>
            <Form onSubmit={handleSubmit(onHandleSubmit)}>
                <Bullet>
                    <li>
                        <Input type="text" name="username"
                               placeholder="Имя"
                               {...register('username')}
                        />
                        <Error>{errors?.username?.message}</Error>
                    </li>
                    <li>
                        <Input type="email" name="email"
                               placeholder="Email"
                               {...register('email')}
                        />
                        <Error>{errors?.email?.message}</Error>
                    </li>
                    <li>
                        <Input type="tel"
                               name="tel"
                               placeholder="Телефон"
                               {...register('tel')}
                               onChange={(e) => e.target.value = normalizePhoneNumber(e.target.value)}/>
                        <Error>{errors?.tel?.message}</Error>
                    </li>
                </Bullet>
                <Button type="submit">
                    Оформить заказ
                </Button>
            </Form>
        </Summary>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (userData, Cart) => dispatch(addOrder(userData, Cart))
    };
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);