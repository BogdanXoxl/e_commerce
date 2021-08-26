import React, {useEffect} from "react";
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
import Loading from "../../components/Loading";




const HomePage = ({categories, loadCategories, loadCurrentCategory, isFetching,  ...props}) => {
    useEffect(() => {
        window.scroll(0,0);
        loadCategories();
    }, [loadCategories]);

    const clickHandler = (category) => {
        loadCurrentCategory(category);
        props.history.push('/goods');
    }

    return (
        <>
            {isFetching ?
                <Loading/>
                :
                <Container>

                    <HeroImage
                        image={HomeImg}
                        title="Бытовка и Пиломатериалы"
                        text="Мы работаем по проверенным технологиям и
                выбираем только лучшие материалы для
                производства бытовок."
                    />
                    <CategoryContainer>
                        {categories?.slice(0, 12).map((category) => (
                            <Category key={category.id}
                                      onClick={() => clickHandler(category)}>{category.title}</Category>
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
                            Максимальная погрешность распила материалов составляет до 2 мм.
                            Все используемые в строительстве материалы производятся нашей компанией на собственной базе.
                            Для этого наша компания имеет современное оборудование для обработки древесины, резки и
                            гибки металла и т.д.
                            Это позволяет минимизировать сроки поставок, защищает нас от срывов поставок, и уменьшает
                            стоимость продукции.
                        </p>
                        <p>
                            Для того что бы рассчитать стоимость распила конкретного заказа свяжитесь с менеджером по
                            одному из телефонов
                            <span> <a href="tel:+79991642590">+7 (999) 164-25-90</a> </span> и <span> <a
                            href="tel:+79960475177">+7 (996) 047-51-77</a> </span>
                            или закажите онлайн на нашем сайте.
                        </p>
                        <BtnContainer>
                            <Btn onClick={() => props.history.push('/service')}>
                                Все услуги
                            </Btn>
                        </BtnContainer>
                    </ServiceContainer>
                </Container>
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.shop.categories,
        isFetching: state.shop.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => dispatch(loadCategories()),
        loadCurrentCategory: (category) => dispatch(loadCurrentCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));