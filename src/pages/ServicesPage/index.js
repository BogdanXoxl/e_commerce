import React, {useEffect} from "react";
import {connect} from "react-redux";

import ServiceItem from "../../components/ServiceItem";
import {Container} from "./ServicesPage.styles";
import {loadServices} from "../../redux/Shopping/shopping-actions";
import Loading from "../../components/Loading";



const ServicesPage = ({services, isFetching, loadServices}) => {
    window.scroll(0,0);
    useEffect(() => {
        loadServices();
    }, [loadServices]);

    return (
        <>
            {isFetching ?
                <Loading/>
                :
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
                : ""
            }
        </Container>
            }
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        services: state.shop.services,
        isFetching: state.shop.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadServices: () => dispatch(loadServices())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);