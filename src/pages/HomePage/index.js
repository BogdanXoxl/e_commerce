import React, {useEffect, useState} from "react";
import {Container} from "./HomePage.styles";
import Grid from "../../components/Grid";
import Thumb from "../../components/Thumb";

import NoImg from '../../assets/no_image.jpg'
import HomeImg from "../../assets/home.jpg"
import HeroImage from "../../components/HeroImage";



const HomePage = () => {
    window.scroll(0,0);
    const [topGoods, setTopGoods] = useState([]);
    const [topServices, setTopServices] = useState([]);

    useEffect(() => {
        // setTopGoods([...topGoods, ...GoodsData.slice(0,5)]);
        // setTopServices([...topServices, ...ServiceData.slice(0,5)]);
    }, []);

    return (
        <Container>
            <HeroImage
                image={HomeImg}
                title="Home image"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Ad amet eos laudantium magni nam, odit quaerat reprehenderit
                  sapiente similique voluptatibus."
            />
            <Grid header={"Пиломатериалы"}>
                {topGoods.map((item) => (
                    <Thumb image={NoImg} movieId={`goods/${item.category}/${item.title}`} key={item.id} clickable/>
                ))}
            </Grid>
            <Grid header={"Услуги"}>
                {topServices.map((item) => (
                    <Thumb image={NoImg} key={item.id}/>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;