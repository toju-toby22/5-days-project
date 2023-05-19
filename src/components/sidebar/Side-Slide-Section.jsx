import React from 'react'
import { CiApple } from "react-icons/ci";
import { GiLipstick } from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiRadio2Line } from "react-icons/ri";
// import { IoShirtOutline } from "react-icons/Io";
import { GiBabyFace } from "react-icons/gi";
import { GrGamepad } from "react-icons/gr";
import { CiDumbbell } from "react-icons/ci";
import { GrCar } from "react-icons/gr";
import { CgMenuRound } from "react-icons/cg";
import Sliderbar from './Slider';
import "./side-slide-section.css"
import { Link } from 'react-router-dom';

const SideSlideSection = () => {
    return (

        <div>
            <div className='contnaer'>
                <div className='side'>
                    <div className="side-bar">

                    <Link className='cate' to="/Supermarket">
                        <ul className="list">
                            <li className="section-list">
                                <CiApple /> <span>SuperMarket</span>
                            </li>
                        </ul>
                    </Link>



                        <ul className="list">
                            <li className="section-list">
                                <GiLipstick /> <span>Health & Beauty</span>
                            </li>
                        </ul>





                        <ul className="list">
                            <li className="section-list">
                            <GiLipstick /> <span>Home & Office</span>
                            </li>
                        </ul>





                        <ul className="list">
                            <li className="section-list">
                                <SlScreenSmartphone /> <span>Phones & Tablets</span>
                            </li>
                        </ul>




                        <ul className="list">
                            <li className="section-list">
                                <HiOutlineDesktopComputer /> <span>Computing</span>
                            </li>
                        </ul>




                        <ul className="list">
                            <li className="section-list">
                                <RiRadio2Line /> <span>Electronics</span>
                            </li>
                        </ul>


                        <ul className="list">
                            <li className="section-list">
                            <RiRadio2Line /> <span>Fashion</span>
                            </li>
                        </ul>



                        <ul className="list">
                            <li className="section-list">
                                <GiBabyFace /> <span>Baby Products</span>
                            </li>
                        </ul>



                        <ul className="list">
                            <li className="section-list">
                                <GrGamepad /> <span>Gaming</span>
                            </li>
                        </ul>



                        <ul className="list">
                            <li className="section-list">
                                <CiDumbbell /> <span>Sporting Goods</span>
                            </li>
                        </ul>



                        <ul className="list">
                            <li className="section-list">
                                <GrCar /> <span>Automobile</span>
                            </li>
                        </ul>



                        <ul className="list">
                            <li className="section-list">
                                <CgMenuRound /> <span>Other Categories</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="slides">

                <Sliderbar/>

                </div>
            </div>
            
        </div>
    )
}

export default SideSlideSection;