import React from "react";
import {Container, Content, Items, Social, FooterStyles} from "./Footer.styles";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <FooterStyles>
            <Container>
                <hr/>
                <br/>
                <Content>
                    <Items>
                        <a href="#" className="logo">Skrapp.io</a>
                        <p> Skrapp.io is an Email Finder for B2B sales and email marketing. We are collecting and
                            crafting public data to provide an
                            advanced prospecting tool to help professionals launch performant email outreach
                            campaigns.</p>
                        <Social>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>
                        </Social>
                    </Items>
                    <Items>
                        <ul>
                            <li><Link to="/about">О нас</Link></li>
                            <li><Link to="/price">Цены</Link></li>
                            <li><Link to="/about">Контакты</Link></li>
                        </ul>
                    </Items>
                    <Items>
                        <h3>Support</h3>
                            Строительство
                            <br/>
                            +7 846 300-26-22 <br/>
                            443079,<br/> Самара Мяги, 24А
                            Пиломатериалы <br/>
                            +7 846 379-07-41
                            443022, Самара Заводское шоссе, 12В
                    </Items>
                </Content>
                <hr/>
                <p className="end">Copyright © 2021. All rights reserved.</p>
            </Container>
        </FooterStyles>
    );
};

export default Footer;