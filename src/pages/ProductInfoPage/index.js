import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import parse from "html-react-parser";

import {addToCart, loadCurrentItemById} from "../../redux/Shopping/shopping-actions";

import Button from "../../components/Button"
import {
    BtnWrapper,
    Container,
    Image,
    Info,
    Wrapper,
    SizeButton,
    Description,
    BtnContainer, IMGContainer
} from "./ProductInfoPage.styles";

import NoImage from "../../assets/no_image.jpg";



const ProductInfoPage = ({item, inCart, addToCart, loadCurrentItemById, ...props}) => {
    useEffect(() => {
        console.log(props);
        window.scroll(0,0)}, []);

    useEffect(() => {
        if(!item){
            loadCurrentItemById(props.match.params.id);
        }
    }, []);

    return (
            <Container>
                {
                    !item ?
                   ""
                    : (
                        <Wrapper>
                            <h1>{item.title}</h1>
                            <div>
                                <Info>
                                    <BtnContainer>
                                        {item.sizes && item.sizes.length ?
                                            <span>Размеры:</span>
                                            :""}

                                        {item.sizes && item.sizes.map(({size}) => (
                                            <SizeButton key={size}>{size}</SizeButton>//onClick
                                        ))}
                                    </BtnContainer>
                                    <span>Сорт: {item.sort}</span>
                                    <Description>
                                        {item && item.description? parse(item.description): ""}
                                    </Description>
                                </Info>
                                <BtnWrapper>
                                    <p>Цена: {item? item.price: ''} руб.</p>
                                    {inCart?
                                        <Button
                                            text="Перейти к оформлению"
                                            callback={() => props.history.push('/cart')}
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
                        <IMGContainer>
                            <Image src={item && item.hasOwnProperty('image')? item.image.src : NoImage}/>
                        </IMGContainer>
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
        addToCart: (id, type) =>  dispatch(addToCart(id, type)),
        loadCurrentItemById: (id) => dispatch(loadCurrentItemById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductInfoPage));