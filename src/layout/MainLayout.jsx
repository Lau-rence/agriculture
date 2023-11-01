import React from 'react';
import TopInfo from '../components/TopInfo';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import AccordionList from '../components/AccordionList';
import OurProjects from '../components/OurProjects';
import Carousel from '../components/Carousel';
import Vision from '../components/Vision';
import OurSector from '../components/OurSector';
import Media from '../components/Media';
import Newsfeed from '../components/Newsfeed';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import NavbarChakra from '../components/NavbarChakra';

const MainLayout = () => {
  return (
    <>
      <TopInfo />
      <NavbarChakra />
      <Hero />
      <AboutUs />
      <Carousel />
      <OurProjects />
      <AccordionList />
      <Vision />
      <OurSector />
      <Media />
      <Newsfeed />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainLayout;
