import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <Link to={"/"} className="thin text-3xl hover:font-bold">
            Home
        </Link>
    );
};

export default HomeButton;
