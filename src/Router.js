import React from "react";
import { Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import ServicesPage from "./pages/ServicesPage";
import PricePage from "./pages/PricePage";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import {GlobalStyles} from "./GlobalStyles";

const Router = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact render={() => <HomePage/>} />

                <Route path="/goods" exact render={() => <ProductsPage/>} />
                <Route path="/good/:id" exact render={() => <ProductInfoPage/>} />
                <Route path="/service" exact render={() => <ServicesPage/>} />
                <Route path="/price" render={() => <PricePage/>} />
                <Route path="/about" render={() => <AboutUsPage/>} />
                <Route path="/cart" render={() => <CartPage/>} />

                <Route render={() => <NotFoundPage/>} />
            </Switch>
            <Footer/>
            <GlobalStyles/>
        </>
    );
};

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(Router);