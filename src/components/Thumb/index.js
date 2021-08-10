import React from "react";
import {Image} from "./Thumb.styles";
import {Link, useRouteMatch} from "react-router-dom";

const Thumb = ({image, movieId, clickable}) => {
    const {url} = useRouteMatch();
    return (
        <div>
            {clickable ? (
                <Link to={`${url !== "/"? url: ""}/${movieId}`}>
                    <Image src={image} alt='movie-thumb'/>
                </Link>
            ) : (
                <Image src={image} alt='movie-thumb'/>
            )}
        </div>
    );
};

export default Thumb;