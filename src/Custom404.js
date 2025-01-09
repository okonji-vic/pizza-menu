import React from "react";
import { Link } from "react-router-dom";
import './Custom404.css';

const Custom404 = () => {
    return (
        <div className="div">
        <h1 id="h1">404 - Page Not Found</h1>
        <Link to="/">
                <button>Go back to home</button>
        </Link>
        </div>
    );
    };

export default Custom404;