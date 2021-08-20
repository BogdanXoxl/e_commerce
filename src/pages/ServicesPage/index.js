import React, {useEffect} from "react";
import {connect} from "react-redux";

import ServiceItem from "../../components/ServiceItem";
import {Container, Error} from "./ServicesPage.styles";
import {loadServices} from "../../redux/Shopping/shopping-actions";



const ServicesPage = ({services, loadServices}) => {
    useEffect(() => {
        loadServices();
    }, []);

    return (
        <Container>
            {services.length ?
                (
                    <>
                        <h2>Услуги от профессионалов - залог успеха в любом деле</h2>
                        {
                            services.map((service) => (
                                <ServiceItem key={service.id} service={service}/>
                            ))
                        }
                    </>
                )
                : (<Error> <h1>Услуг нет</h1></Error>)
            }
        </Container>
    );
};


const mapStateToProps = (state) => {
    return {
        services: state.shop.services
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadServices: () => dispatch(loadServices())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);