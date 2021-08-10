import React from "react";
import {Button, Container, Content, Control, Info, ProductImage, Stars} from "./ServiceItem.styles";
import NoImage from "../../assets/no_image.jpg";

const ServiceItem = (props) => {
    return (
        <>
            <Container>

                <Content>

                    <h1>{props.title.toUpperCase()}</h1>
                    <Stars>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </Stars>

                    <p className="information">{props.description}</p>

                    <Control>
                        <Button>
                            <span className="price">{props.price}</span>
                            <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span className="buy">Подробнее</span>
                        </Button>
                    </Control>
                </Content>

                <ProductImage>
                    <img src={props.img || NoImage} alt=""/>
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
}

export default ServiceItem;