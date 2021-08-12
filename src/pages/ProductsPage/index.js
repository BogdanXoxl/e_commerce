import React from "react";
import { connect } from "react-redux";

import Product from "../../components/Product";

import {Container, FlexWrapper, SideBar, Wrapper} from "./ProductsPage.styles";
import {Link} from "react-router-dom";

const data = [
     "Доска обрезная",
     "Доска строганная сухая",
     "Брус",
     "Брусок",
     "Доска пола",
     "Вагонка",
     "Блок Хаус",
     "Имитация бруса",
     "Масла для дерева",
     "Террасная доска",
     "Палубная доска",
]


const ProductsPage = ({products, cart, currentCategory}) => {

    return (
        <Container>
            <h1>Пиломатериалы от пиловочника - лучшие из лучших</h1>
            <FlexWrapper>
                <SideBar>
                    <ul>
                        <li className="hidden-el">Категории</li>
                        <li className="active">Some text</li>
                        {data.map((category) => <li>{category}</li>)}
                    </ul>
                </SideBar>
                <Wrapper>
                    {products.map((product) => <Product productData={product}/>)}
                </Wrapper>
            </FlexWrapper>


                {/*{products.map((product) => (*/}
                {/*    <Product*/}
                {/*        key={product.id}*/}
                {/*        productData={product}*/}
                {/*        inCart={cart.find(item => item.id === product.id && item.type === product.type)}*/}
                {/*    />*/}
                {/*))}*/}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        cart: state.shop.cart,
        currentCategory: state.shop.currentCategory
    };
};

export default connect(mapStateToProps)(ProductsPage);