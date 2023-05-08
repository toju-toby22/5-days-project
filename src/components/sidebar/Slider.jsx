// import React from 'react'
import React, {Component } from 'react';

import Slider from "react-slick";
import "./slider.css"
import image1 from "./img/Desktop_Homepage_Slider1.png"
import image2 from "./img/Desktop_Homepage_Slider2.png"
import image3 from "./img/Desktop_Homepage_Slider3.jpg"
import image4 from "./img/Desktop_Homepage_Slider4.jpg"



const Sliderbar = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      cssEase: "linear",
      autoplay: true,
      fade: true,
      arrows:false
    };
    return (
      <div className='slide'>
        <Slider {...settings}>
          <div >
            <img className='image' src={image1} alt="" />
          </div>

          <div >
          <img className='image' src={image2} alt="" />
          </div>


          <div >
          <img className='image' src={image3} alt="" />
          </div>


          <div >
          <img className='image' src={image4} alt="" />
          </div>
          
          {/* <div>
            <h3>3</h3>
          </div>
          <div>
          <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    );
}

export default Sliderbar;