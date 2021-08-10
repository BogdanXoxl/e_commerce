import React, {useEffect, useState} from "react";
import {Container} from "./ServicesPage.styles";
import {ServiceData} from "../../testData";
import ServiceItem from "../../components/ServiceItem";
import Spinner from "../../components/Spinner";

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setServices(ServiceData);
            setIsLoading(false);
        }, 500);
        window.scroll(0,0);
    }, []);


    return (
        <Container>
            <h2>Услуги</h2>
            {services.map((service) => (
                <ServiceItem key={service.id} {...service}/>
            ))}
            {isLoading && <Spinner/>}
        </Container>
    );
};

export default ServicesPage;