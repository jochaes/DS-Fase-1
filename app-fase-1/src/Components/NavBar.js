import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useAuth0} from '@auth0/auth0-react'

import {Link } from "react-router-dom";

/** 
 * Barra de navegacion que aparece en la parte superior de la pantalla 
 */
const NavBar = () => {
    const {isAuthenticated} = useAuth0()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Breeds</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to="/search">Search</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to="/profile">Profile</Link>
                </li>

            </ul>
            {/*Si no está autenticado, carga el bóton de iniciar sesion */}
                {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
            </div>
        </div>
    </nav>
  );
};

export default NavBar;