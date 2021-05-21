import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="./images/logo.png" width="36" alt="App logo"/>
                </Link>
                <Link className="navbar-brand" to="/">Tinder for doggos</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            props.headerSites.map(
                                (linkObj, index) => {
                                    return <li key={index} className="nav-item">
                                        <Link className="nav-link active" to={linkObj.path}>{linkObj.label}</Link>
                                    </li>
                                }
                            )
                        }
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Our services
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    props.dropdown.map(
                                        (linkObj, index) => {
                                            //TODO include the new pages
                                            return <li key={index}><Link className="dropdown-item" to={linkObj.path}>{linkObj.label}</Link></li>
                                        }
                                    )
                                }
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Fetch</button>
                    </form>

                </div>

                <Link className="btn btn-outline-success" to="/register-human" role="button">Sign up</Link>
            </div>
        </nav>
    );
}

export default NavBar;
