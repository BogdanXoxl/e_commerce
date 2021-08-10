import React, {useState} from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PricePage from "./pages/PricePage";
import ProductInfoPage from "./pages/ProductInfoPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ServicesPage from "./pages/ServicesPage";
import CategoryPage from "./pages/CategoryPage";

import {GlobalStyles} from "./GlobalStyles";


const App = () => {

  return (
    <Router>
      <Header/>
        <Switch>
            <Route path="/" exact render={() => <HomePage/>} />

            <Route path="/goods" exact render={() => <CategoryPage/>} />
            <Route path="/goods/:category" exact render={() => <CategoryPage/>} />

            <Route path="/goods/:category/:id" render={() => <ProductInfoPage/>} />
            <Route path="/service/" exact render={() => <ServicesPage/>} />
            <Route path="/price" render={() => <PricePage/>} />
            <Route path="/about" render={() => <AboutUsPage/>} />
            <Route path="/basket/" render={() => <ProfilePage/>} />

            <Route path={`/admin${989823083}`} render={() => <ProfilePage/>} />
            <Route render={() => <NotFoundPage/>} />
        </Switch>
      <Footer/>
      <GlobalStyles/>
    </Router>
  );
}

export default App;
