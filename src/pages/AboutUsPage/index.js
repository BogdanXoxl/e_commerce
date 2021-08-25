import React, {useEffect, useState} from "react";
import {Container, Content, Item, NotFound} from "./AboutUs.styles";
import parse from "html-react-parser";
import firebase from "../../firebase/index";

const AboutUsPage = () => {
    window.scroll(0,0);
    const [content, setContent] = useState([]);
    useEffect(() => {
        window.scroll(0,0);
        firebase.getAboutUs().then((items) => setContent([...items]));
    }, []);
    return (
        <Container>
            {content.length?
                <Content>
                    {content?.map(item =>
                        <Item key={item?.key}>{parse(item?.text)}</Item>
                    )}
                </Content>
                :
                <NotFound>About us</NotFound>
            }
        </Container>
    );
};

export default AboutUsPage;