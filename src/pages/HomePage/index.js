import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import HeroImage from "../../components/HeroImage";
import {
    Btn,
    BtnContainer,
    Category,
    CategoryContainer,
    Container,
    Info,
    InfoContainer,
    ServiceContainer
} from "./HomePage.styles";
import HomeImg from "../../assets/Vector_23.png";
import ServiceImg from "../../assets/banya.jpg";
import {loadCategories, loadCurrentCategory} from "../../redux/Shopping/shopping-actions";




const HomePage = ({categories, loadCategories, loadCurrentCategory, ...props}) => {
    useEffect(() => {
        window.scroll(0,0);
        loadCategories();
        console.log(props);
    }, []);

    const clickHandler = (category) => {
        loadCurrentCategory(category);
        props.history.push('/goods');
    }

    return (
        <Container>
            <HeroImage
                image={HomeImg}
                title="Бытовка и Пиломатериалы"
                text="Мы работаем по проверенным технологиям и
                выбираем только лучшие материалы для
                производства бытовок."
            />
            <CategoryContainer>
                {categories?.slice(0,12).map((category)=>(
                    <Category key={category.id} onClick={() => clickHandler(category)}>{category.title}</Category>
                ))}
            </CategoryContainer>
            <InfoContainer>
                <Info>
                    <h3>ЦЕНЫ ОТ ПРОИЗВОДИТЕЛЯ</h3>
                    <p>
                        Стоимость вагончиков от
                        производителя ниже чем в
                        компаниях-посредниках.
                    </p>
                </Info>
                <Info>
                    <h3>ВЫСОКИЙ СРОК СЛУЖБЫ</h3>
                    <p>
                        Вы можете быть уверены в
                        качестве и долговечности
                        конструкций.
                    </p>
                </Info>
                <Info>
                    <h3>БЫСТРАЯ ДОСТАВКА</h3>
                    <p>
                        Доставка и установка от 4000 рублей
                        — Казань, Татарстан и другие регионы.
                    </p>
                </Info>
            </InfoContainer>
            <ServiceContainer image={ServiceImg}>
                <h3>Услуги от профессионалов</h3>
                <p>
                    Наша компания предлагает услуги по распилу древесины по размерам заказчика.
                </p>
                <p>
                    Мы осуществляем услугу после того, как вы оплатите полную его стоимость.
                    Распил материала выполняется только по прямой поперек материала.
                    Точность распила материалов составляет ±1 см.
                    Единица товара оплачивается полностью, даже если вам нужна лишь его часть.
                    Важно помнить, что распиленный товар, надлежащего качества, возврату и обмену не подлежит.
                </p>
                <p>
                    Для того что бы рассчитать стоимость распила конкретного заказа свяжитесь с менеджером
                    позвоните нашим менеджерам по телефонам
                    <span>+7 (999) 164-25-90</span> и <span>+7 (996) 047 51 77 </span>
                     или закажите онлайн на нашем сайте.
                </p>
                <BtnContainer>
                    <Btn onClick={() => props.history.push('/service')}>
                        Все услуги
                    </Btn>
                </BtnContainer>
            </ServiceContainer>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.shop.categories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => dispatch(loadCategories()),
        loadCurrentCategory: (category) => dispatch(loadCurrentCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));