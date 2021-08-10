import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Grid from "../../components/Grid";
import Thumb from "../../components/Thumb";
import Spinner from "../../components/Spinner";

import NoImg from "../../assets/no_image.jpg";
import {Container} from "./Store.styles";
import {CategoryData, GoodsData} from "../../testData";



const CategoryPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {category} = useParams();
    const title = category || "Категории";


    useEffect( () => {
        setIsLoading(true);
        setTimeout(() => {

            if(category){
                setItems(GoodsData.filter((good) => (good.category === category)));
            }else{
                setItems(CategoryData);
            }

            setIsLoading(false);
        }, 100);
        window.scroll(0,0);
    }, [category]);


    return (
        <Container>
            <Grid header={title}>
                {items.map((item) => (
                    <Thumb image={NoImg} movieId={item.path || item.title} clickable key={item.id}/>
                ))}
            </Grid>
            {isLoading && <Spinner/>}
        </Container>
    );
};

export default CategoryPage;