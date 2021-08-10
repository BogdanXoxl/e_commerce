import React, {useState} from "react";
import {
    Body,
    BtnWrapper,
    Container,
    Image,
    Info,
    Wrapper,
    Button,
    SizeButton,
    Description
} from "./ProductInfoPage.styles";

import NoImage from "../../assets/no_image.jpg";
import "./button.css";


const InitialInfo = {
    title: "LOLKEK",
    category: "thumbs",
    promo: "/path",
    sort: "A",
    material: "",
    price: 500,
    sizes: [],
    availability: true,
    description: "Lorem ipsum dolor sit amet, " +
        "consectetur adipisicing elit. " +
        "Consequatur consequuntur debitis " +
        "dicta, esse explicabo facilis itaque " +
        "maiores nisi obcaecati possimus quas " +
        "quis sapiente vero. Architecto illum ipsam " +
        "libero minima modi?\n"
}

const ProductInfoPage = () => {
    const [info, setInfo] = useState(InitialInfo);

    return (
        <Container>
            <Wrapper>
                <h1>{info.title || "Title"}</h1>
                <span className="category">{`/${info.category || "Category"}`}</span>
                <Body>
                    <Info>
                        <h2>Размеры:</h2>
                        {info.sizes.map((size) => (
                            <SizeButton>{size}</SizeButton>//onClick
                        ))}
                        <span>Сорт: {info.sort}</span>
                        <Description>
                            {info.description}
                        </Description>
                    </Info>
                    <BtnWrapper>
                        <p>Цена: {info.price}</p>
                        <button className="bt more-bt" href="javascript:void(0)">
                            <span className="fl"></span>
                            <span className="sfl"></span>
                            <span className="cross"></span>
                            <i></i>
                            <p>В корзину</p>
                        </button>
                    </BtnWrapper>
                </Body>
            </Wrapper>
            <Image src={NoImage}/>
        </Container>
    );
};

export default ProductInfoPage;