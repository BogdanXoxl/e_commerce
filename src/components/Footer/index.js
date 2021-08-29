import React from "react";
import {Container, Content, ImageBlock, Text} from "./Footer.styles";

import PosImg from "../../assets/pos.png";
import TelImg from "../../assets/tel.png";
import MetroImg from "../../assets/Untitled-5_1.png";
import EclipseImg from "../../assets/Ellipse 4.png";

const Footer = () => {
    return (
        <Container>
            <Content>
                <Text image={PosImg}>
                    Россия, Республика Татарстан, Казань,
                    Теплично-Комбинатская улица
                </Text>
                <Text image={TelImg}>
                    <a href="tel:+7 (999) 164-25-90">+7 (999) 164-25-90</a>
                    <a href="tel:+7 (999) 164-25-90">+7 (996) 047-51-77</a>
                </Text>
                <Text image={MetroImg} imgE={EclipseImg}>
                    <span>Авиастроительная</span> <span>Северный вокзал</span>
                    <span>Яшьлек</span>
                </Text>
                <ImageBlock>
                    <div>
                        <a href="https://www.instagram.com/pilovo4nik_bitovki43" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://wa.me/+79991642590" target="_blank"><i className="fab fa-whatsapp"></i></a>
                        <a href="mailto:priora.danil@yandex.ru" target="_blank"><i className="far fa-envelope"></i></a>
                    </div>
                </ImageBlock>
            </Content>
        </Container>
    );
};

export default Footer;