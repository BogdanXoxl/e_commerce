import React, {useEffect} from "react";
import {connect} from "react-redux";

import Product from "../../components/Product";

import {Container} from "./SearchPage.styles";
import Loading from "../../components/Loading";

const SearchPage = ({products,isLoading}) => {

    useEffect(() => {
        window.scroll(0,0);
    },[products, isLoading]);

    return (
        <>
            {isLoading?
                <Loading/>
                :
                <Container>
                    <h3>Результаты поиска:</h3>
                    {products.length? products.map((product) =>
                            <Product key={product.id + "category:" + product.categoryID} productData={product}/>)
                        :
                        <h1>Ничего не найдено!</h1>
                    }
                </Container>
            }
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.searchItems,
        isLoading: state.shop.isFetching
    };
};

export default connect(mapStateToProps)(SearchPage);