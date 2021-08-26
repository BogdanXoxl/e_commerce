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
    Wrapper,
    SizeButton,
    Description,
    BtnContainer, IMGContainer, Sort, Info
} from "./ProductInfoPage.styles";

import NoImage from "../../assets/board.png";
import Loading from "../../components/Loading";



const ProductInfoPage = ({item, inCart, isFetching, addToCart, loadCurrentItemById, loadCurrentItem, ...props}) => {
    window.scroll(0,0);
    useEffect(() => {
        window.scroll(0,0);
        if(!item){
            loadCurrentItemById(props.match.params.id);
        }
        return () => loadCurrentItem(null);
    }, []);

    return (
        <>
            {isFetching ?
                <Loading/>
                :
                <Container>
                <Wrapper>
                    <Info>
                        <h1>{item?.title}</h1>
                        <BtnContainer>
                            {item?.sizes?.length ?
                                <span>Размеры:</span>
                                :""}

                            {item?.sizes && item?.sizes?.map(({size}) => (
                                <SizeButton key={size}>{size}</SizeButton>
                            ))}
                        </BtnContainer>
                        <Sort>{item?.sort && `Сорт: ${item?.sort}`}</Sort>
                    </Info>
                    <Description>
                        {item && parse(item?.description || '')}
                        <BtnWrapper>
                            <p>Цена: {item?.price} руб.</p>
                            {inCart(item)?
                                <Button
                                    text="Перейти к оформлению"
                                    callback={() => props.history.push('/cart')}
                                    color={{color: "#fff", bg: "#fe7200"}}
                                />
                                :
                                <Button text="В корзину"
                                        callback={() => addToCart(item?.id, item?.type)}
                                />
                            }

                        </BtnWrapper>
                    </Description>
                    <IMGContainer>
                        <Image src={item?.image?.src || NoImage}/>
                    </IMGContainer>
                </Wrapper>
            </Container>
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        item: state.shop.currentItem,
        inCart: (item) => state.shop.cart.find(el => el?.id === item?.id && el?.type === item?.type),
        isFetching: state.shop.isFetching
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