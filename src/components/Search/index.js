import React, {useState} from "react";

import {Wrapper, Input, Button} from "./Search.styles";


const Search = (props) => {

    const [value, setValue] = useState('');
    const submitEvent = (e) => {
        e.preventDefault();
    }

    const onClickHandler = () => {

    }


    return (
        <Wrapper onSubmit={submitEvent} >
            <Input type="text" placeholder="Найти..." value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
        </Wrapper>
    );
};

export default Search;