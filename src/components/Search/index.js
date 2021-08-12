import React, {useState} from "react";
import "../../assets/font-awesome/css/font-awesome.min.css";

import {Wrapper, Input, Button} from "./Search.styles";


const Search = (props) => {

    const submitEvent = (e) => {
        e.preventDefault();
    }


    return (
        <Wrapper onSubmit={submitEvent} >
            <Input type="text" placeholder="Найти..."/>
            <Button type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
        </Wrapper>
    );
};

export default Search;