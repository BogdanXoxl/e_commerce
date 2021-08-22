import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import parse from "html-react-parser";

import {addToCart, loadCurrentItemById, loadCurrentItem} from "../../redux/Shopping/shopping-actions";

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

import NoImage from "../../assets/logo.png";



const ProductInfoPage = ({item, inCart, addToCart, loadCurrentItemById, loadCurrentItem, ...props}) => {
    useEffect(() => {
        window.scroll(0,0)
        if(!item){
            loadCurrentItemById(props.match.params.id);
        }
        return () => loadCurrentItem(null);
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
                                            <SizeButton key={size}>{size}</SizeButton>
                                        ))}
                                    </BtnContainer>
                                    <span>Сорт: {item.sort}</span>
                                    <Description>
                                        {item && item.description? parse(item.description): ""}
                                    </Description>
                                </Info>
                                <BtnWrapper>
                                    <p>Цена: {item? item.price: ''} руб.</p>
                                    {inCart(item)?
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
        inCart: (item) => state.shop.cart.find(el => el.id === item.id && el.type === item.type)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, type) =>  dispatch(addToCart(id, type)),
        loadCurrentItemById: (id) => dispatch(loadCurrentItemById(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductInfoPage));