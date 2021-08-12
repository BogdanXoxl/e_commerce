import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import LogoSvg from "../../assets/logo.svg"
import {Container, Wrapper, Logo, Nav, NavLinkStyled, ButtonContainer, Button} from "./Header.styles";
import Search from "../Search";




const Header = ({qty}) => {

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
                    {qty? <span>{qty}</span>: null}
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return{
        qty: state.shop.cart.length,
    };
};


export default connect(mapStateToProps)(Header);