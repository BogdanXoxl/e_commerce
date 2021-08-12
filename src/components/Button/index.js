import React from "react";

import  "./button.css";



const Button = ({text, callback ,color}) => {
        const stl = color?{
                background: color.bg,
                borderTopColor: color.bg,
                color: color.color
        }: {};
        return (
            <button className="bt more-bt" onClick={callback}
                style={stl}>
                <span className="fl"></span>
                <span className="sfl"></span>
                <span className="cross"></span>
                <i></i>
                <p>{text}</p>
            </button>
        );
};


export default Button;