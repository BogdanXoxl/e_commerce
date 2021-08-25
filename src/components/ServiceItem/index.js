import React from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import parse from "html-react-parser";

import Button from "../Button";
import {addToCart} from "../../redux/Shopping/shopping-actions";

import {Container, Image, IMGContainer, Description, Title, Content, BtnContainer} from "./ServiceItem.styles";
import NoImage from "../../assets/logo.png";

const ServiceItem = ({service, inCart, addToCart, }) => {
    const history = useHistory();
    return (
        <Container>
            <Content>
                <Title>{service.title}</Title>
                <Description>
                    {service.description? parse(service.description): ''}
                </Description>
                {inCart(service)?
                    <BtnContainer>
                        <Button
                            text="Перейти к оформлению"
                            callback={() => history.push('/cart')}
                            color={{color: "#fff", bg: "#fe7200"}}
                        />
                    </BtnContainer>
                    :<BtnContainer>
                        <Button text="В корзину"
                                callback={() => addToCart(service.id, service.type)}
                        />
                    </BtnContainer>
                }
            </Content>
            <IMGContainer>
                <Image src={
                    service.image? service.image.src:
                        NoImage}/>
            </IMGContainer>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, type) => dispatch(addToCart(id, type))
    };
};

const mapStateToProps = (state) => {
    return {
        inCart: (item) => state.shop.cart.find(el => el.id === item.id && el.type === item.type)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItem);