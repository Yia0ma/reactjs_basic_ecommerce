import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><div>Cart</div></Link>
        </header>
    );
};

export default Header;