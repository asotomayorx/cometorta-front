import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Clientes campañas</span>
            </Link>
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary">Añadir</button>
                </Link>
            </div>
        </nav>
    );
    }; 