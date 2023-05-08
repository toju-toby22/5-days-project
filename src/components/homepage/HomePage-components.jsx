import React from 'react'
import Navbar from '../navbar/Navbar';
import SideSlideSection from '../sidebar/Side-Slide-Section';
import SlideWidget1 from '../SlideBarWidgets/slidewidget-1/SlideWidget1';
import Footer from '../footer/Footer';
import "./homepage.css"
const HomePage = () => {
  return (
    <div className='bodypage'>
      <Navbar/>
      <SideSlideSection/>
      <SlideWidget1/>
   
      <Footer/>
    </div>
  )
}

export default HomePage;