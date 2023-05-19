import React from 'react'
import Navbar from '../navbar/Navbar';
import SideSlideSection from '../sidebar/Side-Slide-Section';
import SlideWidget1 from '../SlideBarWidgets/slidewidget-1/SlideWidget1';
import Footer from '../footer/Footer';
import "./homepage.css"
import Slide2 from '../SlideBarWidgets/slidewidget-2/Slide2';
import ProductSection from '../homepageproducts/ProductSection';
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <SideSlideSection/>
      <SlideWidget1/>
      {/* <Slide2/> */}
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default HomePage;