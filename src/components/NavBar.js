import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./images/logo.png" width="36" />
                </a>
                <a className="navbar-brand" href="#">Tinder for doggos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Personnel
                        </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    props.dropdown.map(
                                        (page, index) => {
                                            return <li key={index}><Link className="dropdown-item" to="#">{page}</Link></li>
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

                <button className="btn btn-outline-success" type="submit">Login</button>
            </div>
        </nav>


    );
}

export default NavBar;