import React from 'react';

const headerStyle = {
    "color": "white",
    "marginTop": "20px",
    "marginBottom": "40px"
}

function Header(props) {

    return (

        <div className="container">
            <div className="page-header" style={headerStyle}>
                <h1 className="display-1">Never bark at the wrong tree again</h1>
            </div>
        </div>
    );

}

export default Header;