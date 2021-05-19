import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';


let headerLinks = [
    { label: 'Benefits', path: '/' },
    { label: 'Success stories', path: '/' }
];

const personnel = ['Our doggos', 'Our humans'];

let footerLinks = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'T&C', path: '/terms-and-conditions' }
];

function LayoutRoute(props) {
    return (
        <div>
            <NavBar logo="./images/logo.png" headerSites={headerLinks} dropdown={personnel} />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer label="Footer" footerSites={footerLinks} />
        </div>
    );
}

export default LayoutRoute;
