import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import LogoSvg from "../../assets/logo.png";
import {Container, Wrapper, Logo, Nav, NavLinkStyled, ButtonContainer, Button} from "./Header.styles";
import Search from "../Search";



const Header = ({cart}) => {
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <Container>
            <Wrapper>
                <Link to="/"><Logo src={LogoSvg}/></Link>
                <Nav>
                    <NavLinkStyled to="/" exact  activeClassName="active">ДОМОЙ</NavLinkStyled>
                    <NavLinkStyled to="/goods" activeClassName="active">ПИЛОМАТЕРИАЛЫ</NavLinkStyled>
                    <NavLinkStyled to="/service" activeClassName="active">УСЛУГИ</NavLinkStyled>
                    <NavLinkStyled to="/price" activeClassName="active">ЦЕНЫ</NavLinkStyled>
                    <NavLinkStyled to="/about" activeClassName="active">О НАС</NavLinkStyled>
                </Nav>
                <Search placeholder="Найти..."/>
                <ButtonContainer>
                    <Button bg={"green"} to="/cart">
                        <i className="fas fa-shopping-basket"></i>
                    </Button>
                    {cart.length? <span>{cart.length}</span>: null}

                </ButtonContainer>
            </Wrapper>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart
    };
};





export default connect(mapStateToProps)(Header);