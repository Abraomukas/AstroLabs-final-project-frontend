import React from 'react';

import NavBar from './../components/NavBar';

let headerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
];

let footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'T&C', path: '/terms-and-conditions' }
];

const personnel = ['Our doggos', 'Our humans'];

function AboutScreen() {
    return (
        <div>
            {/* ### NavBar ### */}
            <NavBar logo="./images/logo.png" headerSites={headerLinks} dropdown={personnel}></NavBar>
            <h1>About Us</h1>
        </div>
    );
}

export default AboutScreen;