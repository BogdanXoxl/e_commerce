import React from "react";
import {connect} from "react-redux";
import {Button, Container, Content, Control, Info, ProductImage, Stars} from "./ServiceItem.styles";
import NoImage from "../../assets/no_image.jpg";
import {addToCart} from "../../redux/Shopping/shopping-actions";

const ServiceItem = ({addToCard, ...item}) => {
    return (
        <>
            <Container>
                <Content>
                    <h1>{item.title.toUpperCase()}</h1>
                    <Stars>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </Stars>

                    <p className="information">{item.description}</p>

                    <Control>
                        <Button onClick={() => addToCard(item.id, item.type)}>
                            <span className="price">{item.price}</span>
                            <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span className="buy">Заказать</span>
                        </Button>
                    </Control>
                </Content>

                <ProductImage>
                    <img src={item.img || NoImage} alt=""/>
                        <Info>
                            <h2> Description</h2>
                            <ul>
                                <li><strong>Height : </strong>5 Ft</li>
                                <li><strong>Shade : </strong>Olive green</li>
                                <li><strong>Decoration: </strong>balls and bells</li>
                                <li><strong>Material: </strong>Eco-Friendly</li>

                            </ul>
                        </Info>
                </ProductImage>

            </Container>

        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCard: (id, type) => dispatch(addToCart(id, type))
    };
};

export default connect(null, mapDispatchToProps)(ServiceItem);