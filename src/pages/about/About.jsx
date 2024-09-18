import React from "react";
import Header from "../../components/banner/header/header";
import './about.css';
import Footer from "../../components/banner/footer/footer";

const About = () => {
    return (
      <div className="about-body">
        <div className="about-body2">
          <Header />
          <div className="main-about">
            <div className="text-about">
              <h1>Graso is a leading decentralized platform to empower real estate</h1>
              <p>
                Bringing a better and faster means for developers to raise
                funds, while giving individual investors fractional ownership of
                real world assets.
              </p>
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
         
    );

}

export default About;