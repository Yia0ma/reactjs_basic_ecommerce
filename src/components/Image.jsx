import React from "react";

const Image = ({className, img}) => {
    return (
        <div className="img">
            <img src={img.url} alt=""/>
        </div>
    );
};

export default Image;