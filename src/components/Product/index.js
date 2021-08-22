import React from "react";
import { Link , useHistory} from "react-router-dom";
import {connect} from "react-redux";

import {addToCart, loadCurrentItem} from "../../redux/Shopping/shopping-actions";

import NoImage from "../../assets/logo.png";
import {Container, Image, IMGContainer, Title} from "./Product.styles";
import Button from "../Button";

const Product = ({productData, inCart, addToCart, loadCurrentItem}) => {
    const history = useHistory();

    return (
            <Container>
                <Link to={`${productData.type}/${productData.id}`} onClick={() => loadCurrentItem(productData)}>
                    <IMGContainer>
                        <Image src={productData.image && productData.image.src? productData.image.src : NoImage}/>
                    </IMGContainer>
                    <Title>{productData.title}</Title>
                </Link>
                {inCart(productData)?
                    <Button
                        text="Перейти к оформлению"
                        callback={() => history.push('/cart')}
                        color={{color: "#fff", bg: "#fe7200"}}
                    />
                    :
                    <Button text="В корзину"
                            callback={() => addToCart(productData.id, productData.type)}
                    />
                }

            </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, type) => dispatch(addToCart(id, type)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

const mapStateToProps = (state) => {
    return {
        inCart: (item) => state.shop.cart.find(el => el.id === item.id && el.type === item.type)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
