import React, {useEffect} from "react";
import { connect } from "react-redux";

import Product from "../../components/Product";

import {Container, FlexWrapper, SideBar, Wrapper, Error} from "./ProductsPage.styles";
import {loadCategories, loadCurrentCategory, loadProducts} from "../../redux/Shopping/shopping-actions";



const ProductsPage = ({products, categories, currentCategory, loadCurrentCategory, loadProducts, loadCategories}) => {
    useEffect(() => {
        loadProducts();
        loadCategories();
    }, []);

    useEffect(()=> {
        if(!currentCategory.title)
            loadCurrentCategory(categories[0]);
    }, [categories]);


    return (
        <Container>
            <h1>Пиломатериалы от пиловочника - лучшие из лучших</h1>
            {categories.length > 1?
                <FlexWrapper>
                    <SideBar>
                        <ul>
                            <li className="hidden-el">Категории</li>
                            {categories.map((category) =>
                                <li
                                    key={category.id+category.title}
                                    className={category.id === currentCategory.id? "active": ""}
                                    onClick={() =>  loadCurrentCategory(category)}
                                >{category.title}</li>
                            )}
                        </ul>
                    </SideBar>
                    <Wrapper>
                        {products.length? products.filter(product => product.categoryID === currentCategory.id)
                            .map((product) => <Product key={product.id + "category:" + product.categoryID} productData={product}/>):
                            <Error><h1></h1></Error>
                        }
                    </Wrapper>
                </FlexWrapper>
                : ""}
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
        loadCurrentCategory: (item) => dispatch(loadCurrentCategory(item)),
        loadProducts: () => dispatch(loadProducts()),
        loadCategories: () => dispatch(loadCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);