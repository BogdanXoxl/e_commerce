import React, {useEffect} from "react";
import { Redirect, useHistory} from "react-router-dom";
import {connect} from "react-redux";

import {addToCart} from "../../redux/Shopping/shopping-actions";

import Button from "../../components/Button"
import {
    BtnWrapper,
    Container,
    Image,
    Info,
    Wrapper,
    SizeButton,
    Description,
    BtnContainer
} from "./ProductInfoPage.styles";

import NoImage from "../../assets/no_image.jpg";



const ProductInfoPage = ({item, inCart, addToCart}) => {
    const history = useHistory();


    useEffect(() => {window.scroll(0,0)}, []);
    return (
            <Container>
                {
                    !item ?
                    <Redirect to="/404"/>
                    : (
                        <Wrapper>
                            <h1>{item.title}</h1>
                            <span className="category">{`/${item.category}`}</span>
                            <div>
                                <Info>
                                    <BtnContainer>
                                        {item.sizes.length ?
                                            <span>Размеры:</span>
                                            :""}

                                        {item.sizes.map(({size, id}) => (
                                            <SizeButton key={id}>{size}</SizeButton>//onClick
                                        ))}
                                    </BtnContainer>
                                    <span>Сорт: {item.sort}</span>
                                    <Description>
                                        {item? item.description: ""}
                                    </Description>
                                </Info>
                                <BtnWrapper>
                                    <p>Цена: {item? item.price: ''} руб.</p>
                                    {inCart?
                                        <Button
                                            text="Перейти к оформлению"
                                            callback={() => history.push('/cart')}
                                            color={{color: "#fff", bg: "#fe7200"}}
                                        />
                                            :
                                        <Button text="В корзину"
                                                callback={() => addToCart(item.id, item.type)}
                                        />
                                    }

                                </BtnWrapper>
                            </div>
                        </Wrapper>
                )}
                        <Image src={item? item.image || NoImage : null}/>
            </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        item: state.shop.currentItem,
        inCart: state.shop.cart.find(el => el.id === state.shop.currentItem.id && el.type === state.shop.currentItem.type)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, type) => {return dispatch(addToCart(id, type))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoPage);