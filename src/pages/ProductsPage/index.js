import React, {useEffect} from "react";
import { connect } from "react-redux";

import Product from "../../components/Product";

import {Container, FlexWrapper, SideBar, Wrapper} from "./ProductsPage.styles";
import {loadCurrentCategory} from "../../redux/Shopping/shopping-actions";



const ProductsPage = ({products, categories, currentCategory, loadCurrentCategory}) => {

    useEffect(() => {
        //get item from server with category === currentCategory
    }, [currentCategory]);

    return (
        <Container>
            <h1>Пиломатериалы от пиловочника - лучшие из лучших</h1>
            <FlexWrapper>
                <SideBar>
                    <ul>
                        <li className="hidden-el">Категории</li>
                        {categories.map((category) =>
                            <li
                                className={category.id === currentCategory.id? "active": ""}
                                onClick={() => {console.log( category.id=== currentCategory.id); return loadCurrentCategory(category)}}
                            >{category.title}</li>
                        )}
                    </ul>
                </SideBar>
                <Wrapper>
                    {products.filter(product => product.categoryID === currentCategory.id)
                        .map((product) => <Product productData={product}/>)}
                </Wrapper>
            </FlexWrapper>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        categories: state.shop.categories,
        currentCategory: state.shop.currentCategory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCurrentCategory: (item) => dispatch(loadCurrentCategory(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);