import React, {useEffect} from "react";
import { connect } from "react-redux";

import Product from "../../components/Product";

import {Container, FlexWrapper, SideBar, Wrapper, Error} from "./ProductsPage.styles";
import {loadCategories, loadCurrentCategory, loadProducts} from "../../redux/Shopping/shopping-actions";
import Loading from "../../components/Loading";



const ProductsPage = ({products, categories, currentCategory, isFetching, loadCurrentCategory, loadProducts, loadCategories}) => {
    window.scroll(0,0);
    useEffect(() => {
        loadProducts();
        loadCategories();
    }, [loadCategories, loadProducts]);

    useEffect(()=> {
        if(!currentCategory.title)
            loadCurrentCategory(categories[0]);
    }, [categories, currentCategory.title, loadCurrentCategory]);


    return (
        <>
            {isFetching ?
                <Loading/>
                :
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
                                <Error><h1>Упсс... товаров пока нет.</h1></Error>
                            }
                        </Wrapper>
                    </FlexWrapper>
                    : ""}
            </Container>
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        categories: state.shop.categories,
        currentCategory: state.shop.currentCategory,
        isFetching: state.shop.isFetching
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