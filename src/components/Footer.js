import React from 'react';

function Footer(props) {
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.label}</a>
            </div>
        </nav>
    );
}

export default Footer;