import React, {createRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import LogoSvg from "../../assets/logo.png";
import {
    Container,
    Wrapper,
    Logo,
    Nav,
    NavLinkStyled,
    ButtonContainer,
    Button,
    SearchContainer,
    ToggleBtn
} from "./Header.styles";
import Search from "../Search";



const Header = ({cart}) => {

    const hrefs = [
        {path: '/', title: 'ДОМОЙ'},
        {path: '/goods', title: 'ПИЛОМАТЕРИАЛЫ'},
        {path: '/service', title: 'УСЛУГИ'},
        {path: '/price', title: 'ЦЕНЫ'},
        {path: '/about', title: 'О НАС'},
    ]

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const ref = createRef();
    const toggleBtn = (e) => {
        ref.current.classList.toggle('active');
    }

    return (
        <Container>
            <Wrapper>
                <Link to="/"><Logo src={LogoSvg}/></Link>
                <Nav ref={ref}>
                    {hrefs.map((item) => (
                        <NavLinkStyled key={item.path} to={item.path} exact  activeClassName="active"
                                       onClick={() => ref.current?.classList.remove('active')}>
                            {item.title}</NavLinkStyled>
                    ))}
                </Nav>
                <SearchContainer>
                    <Search placeholder="Найти..."/>
                </SearchContainer>
                <ButtonContainer>
                    <Button bg={"green"} to="/cart">
                        <i className="fas fa-shopping-basket"></i>
                    </Button>
                    {cart.length? <span>{cart.length}</span>: null}
                </ButtonContainer>
                <ToggleBtn onClick={toggleBtn}>
                    <i className="fas fa-bars"/>
                </ToggleBtn>
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