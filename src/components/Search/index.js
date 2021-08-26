import React, {useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {Wrapper, Input, Button} from "./Search.styles";
import {search} from "../../redux/Shopping/shopping-actions";


const Search = ({search, ...props}) => {

    const [value, setValue] = useState('');
    const submitEvent = (e) => {
        e.preventDefault();
        if(value){
            search(value);
            setValue('');
            props.history.push('/search');
        }
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

const mapDispatchToProps = (dispatch) => {
    return {
        search: (text) => dispatch(search(text))
    };
};

export default connect(null, mapDispatchToProps)(withRouter(Search));