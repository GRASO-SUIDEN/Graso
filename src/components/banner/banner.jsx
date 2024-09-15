import React from 'react';
import Header from './header/header';
import './Banner.css'
import image1 from "../assets/image.png";
import image3 from "../assets/Sponge 1.png";
import image4 from "../assets/Sponge 2.png";
import image5 from "../assets/Sponge 3.png";
import Footer from './footer/footer';
import SideNav from './sideNav/sidenav';

const Banner = () => {
  return (
    <div className='outer-banner'>

    <div className="banner">
        <Header/>
        <SideNav/>

        <div className='main-content'>
        <div className="text">
          <h1>Making Real Estate More Accessible to All</h1>
          <p>Bringing a better and faster means for developers to raise funds,
            while giving individual investors fractional ownership of real world assets.</p>
            <div className='button-holder'>
    <button className='invest-btn'>Invests</button>
    <button className='develop-btn'>Develop</button>
   </div>
        </div>

        <div className="sponge-box-image1"><img src={image1} alt="sponge 1" /></div>
        <div className="sponge-box-image3"><img src={image3} alt="sponge 3" /></div>
        <div className="sponge-box-image4"><img src={image4} alt="sponge 4" /></div>
        <div className="sponge-box-image5"><img src={image5} alt="sponge 5" /></div>

      </div>
      </div>
      <Footer/>
        </div>



  )}

export default Banner;
