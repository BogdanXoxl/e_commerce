import React from "react";
import LogoSvg from "../../assets/logo.svg"
import {Container, Wrapper, Logo, Nav, NavLinkStyled, ButtonContainer, Button} from "./Header.styles";
import Search from "../Search";
import {Link} from "react-router-dom";


const Header = () => {

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
                    <Button bg={"green"} to="/profile">
                        <i className="fas fa-shopping-basket"></i>
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                     <Button to="/auth">Войти</Button>
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
}

export default Header;