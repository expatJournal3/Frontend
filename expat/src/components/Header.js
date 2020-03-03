import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    

    return (
        <div className="header">
            <Link to="/" className="title">Expat App</Link>
            <nav className="nav-links">
                <Link className="nav-link" to ="/login">Login</Link>
               
            </nav>
        </div>
    )
}