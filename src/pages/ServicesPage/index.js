import React from "react";
import {connect} from "react-redux";

import ServiceItem from "../../components/ServiceItem";
import {Container} from "./ServicesPage.styles";



const ServicesPage = ({services}) => {

    return (
        <Container>
            <h2>Услуги</h2>
            {services.map((service) => (
                <ServiceItem key={service.id} {...service}/>
            ))}
        </Container>
    );
};


const mapStateToProps = (state) => {
    return {
        services: state.shop.services
    };
};
export default connect(mapStateToProps)(ServicesPage);