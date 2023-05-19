import React from 'react'
import jumialogo from "./download.png"
import { GrCart } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

import "./navbar.css"
import { Link } from 'react-router-dom'
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
import { GrMenu } from "react-icons/gr";


import { useState } from 'react';
// import Sliderbar from './Slider';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='header'>

            <div className="nav_container">
                <nav className="container">
                    <div className='menu-icon' onClick={() => setOpenMenu((prev) => !prev)}>
                        <GrMenu/>
                    </div>

                    <Link to="/">
                        <div >
                            <img className="logo" src={jumialogo} alt="" />
                        </div>
                    </Link>


                    <div className="search_bar">

                        <form className='search-form'>
                            <div>
                                <input className='searchbar__text' type="text" placeholder='Search Products brands and categories' />
                            </div>
                        </form>
                        <button className="search_button">Search</button>

                    </div>



                    <div className='icon-link' >
                        <AiOutlineUser />
                        <GrCart />

                    </div>

                    <div className='account-cart-help'>




                        <div className="buttons">
                            <AiOutlineUser />
                            <div className='button_account'>Account</div>
                            <BiChevronDown />
                        </div>





                        <div className="buttons">
                            <FiHelpCircle />
                            <div className='button_account'>Help</div>
                            <BiChevronDown />
                        </div>




                        <Link to="/Cart">
                            <div className="buttons">
                                <GrCart />
                                <div className='button_account'>Cart</div>
                            </div>
                        </Link>


                    </div>
                </nav>
            </div>

            {

                openMenu && (
                    <div className='dropdown'>
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
                    </div>
                )
            }
        </div>
    )
}

export default Navbar


