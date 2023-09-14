import React from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import BannerComponent from '../../components/Banner/BannerComponent';
import './AboutPage.css';

function AboutPage() {
  return (
    <>
      <TopNav />
      <BannerComponent text='' imageSrc="/src/assets/image-section2.png" />
      <div className="aboutContainer">

      </div>
      <FooterComponent />
    </>
  );
}

export default AboutPage;
