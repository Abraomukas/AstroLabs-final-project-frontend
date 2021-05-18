import React from 'react';

import './../App.css';

import Card from './../components/Card';
import Footer from './../components/Footer';
import Header from './../components/Header';
import NavBar from './../components/NavBar';

let headerLinks = [
  'Home',
  'About',
  'Contact'
];

let footerLinks = [
  'Home',
  'About',
  'Contact',
  'FAQs',
  'Subscribe',
  'T&C'
];


const personnel = ['Our doggos', 'Our humans'];

const carouselStyleOne = {
  "width": "100%",
  "height": "350px",
  "backgroundPosition": "center",
  "backgroundSize": "cover",
  "backgroundImage": "url('./images/carousel-one.jpg')"
}

const carouselStyleTwo = {
  "width": "100%",
  "height": "350px",
  "backgroundPosition": "center",
  "backgrounSize": "cover",
  "backgroundImage": "url('./images/carousel-two.jpg')"
}

const carouselStyleThree = {
  "width": "100%",
  "height": "350px",
  "backgroundPosition": "center",
  "backgroundSize": "cover",
  "backgroundImage": "url('./images/carousel-three.jpg')"
}

function MainScreen() {
  return (
    <div className="App">

      {/* ### NavBar ### */}
      <NavBar logo="./images/logo.png" headerSites={headerLinks} personnel={personnel}></NavBar>

      {/* ### Header ### */}
      <Header />

      {/* ### Carousel ### */}

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={carouselStyleOne} className="carousel-image"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={carouselStyleTwo} className="carousel-image"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={carouselStyleThree} className="carousel-image"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ### Cards section ### */}
      <div className="container my-5">
        <div className="row">

          <Card imageUrl="./images/card-doggos.jpg" caption="Meet our doggos"></Card>
          <Card imageUrl="./images/card-humans.jpg" caption="Meet our humans"></Card>

        </div>
      </div>

      {/* ### Footer ### */}
      <Footer label="Footer" />
    </div>
  );
}

export default MainScreen;
