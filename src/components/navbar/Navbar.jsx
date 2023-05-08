import React from 'react'
import jumialogo from "./download.png"
import { GrCart } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

import "./navbar.css"
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <div className='header'>

            <div className="nav_container">
                <nav className="container">
                    <div className='menu-icon'>
                        <i class='bx bx-menu'></i>
                    </div>
                    <div >
                        <img className="logo" src={jumialogo} alt="" />
                    </div>


                    <div className="search_bar">

                        <form className='search-form'>
                            <div>
                                <input className='searchbar__text' type="text" placeholder='Search Products brands and categories' />
                            </div>
                        </form>
                        <button className="search_button">Search</button>

                    </div>

                  

                    <div className='icon-link' >
                        <i style={{ margin: "0px 10px 0px 10px" }} class='bx bx-user'></i>
                        <i class='bx bx-cart-alt' ></i>
                    </div>

                    <div className='account-cart-help'>



                    
                            <div className="buttons">
                               <AiOutlineUser/>
                                <div className='button_account'>Account</div>
                                <BiChevronDown/>
                            </div>
                        



                    
                            <div className="buttons">
                                <FiHelpCircle/>
                                <div className='button_account'>Help</div>
                                <BiChevronDown/>
                            </div>
                        



                            <Link to="/Cart">
                            <div className="buttons">
                                <GrCart/>
                                <div className='button_account'>Cart</div>
                            </div>
                            </Link>
                            
                        
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar


