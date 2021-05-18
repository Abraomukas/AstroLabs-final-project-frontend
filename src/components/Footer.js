import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Tinder for doggos</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            props.footerSites.map(
                                (linkObj, index) => {
                                    return <li key={index} className="nav-item">
                                        <Link className="nav-link active" to={linkObj.path}>{linkObj.label}</Link>
                                    </li>
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Footer;
