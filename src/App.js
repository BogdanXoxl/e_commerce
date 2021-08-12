import React, {useEffect} from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PricePage from "./pages/PricePage";
import ProductInfoPage from "./pages/ProductInfoPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";

import {GlobalStyles} from "./GlobalStyles";
import CartPage from "./pages/CartPage";



const App = ({current}) => {


    useEffect(() => {
        window.scroll(0,0);
    }, []);


  return (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact render={() => <HomePage/>} />

            <Route path="/goods" exact render={() => <ProductsPage/>} />
            <Route path="/goods/:category" exact render={() => <ProductsPage/>} />

            <Route path="/product/:id" exact render={() => <ProductInfoPage/>} />
            <Route path="/service/" exact render={() => <ServicesPage/>} />
            <Route path="/price" render={() => <PricePage/>} />
            <Route path="/about" render={() => <AboutUsPage/>} />
            <Route path="/cart" render={() => <CartPage/>} />

            {/*<Route path={`/admin${989823083}`} render={() => <ProfilePage/>} />*/}
            <Route render={() => <NotFoundPage/>} />
        </Switch>
        <Footer/>
      <GlobalStyles/>
    </Router>
  );
};

export default App;
