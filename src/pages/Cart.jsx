import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./css/Cart.css"
import Footer from '../components/footer/Footer'
import logo from "./1.jpg"
import { RiDeleteBin6Line } from "react-icons/ri";


const Cart = () => {
    return (
        <div>
            <Navbar />

            <div className='cart-box'>
                <div className='flex'>
                    <div className='logo_box'>
                        <img className='cart' src={logo} alt="" />
                    </div>
                    <div>
                        <h4>Your Cart is Empty</h4>
                    </div>
                    <div>
                        <p>Browse our categories and discover our best deals!</p>
                    </div>
                    <div>
                        <button className='start'>
                            Start Shopping
                        </button>
                    </div>
                </div>
            </div>


            <div className='cont'>
                <div className='cart-box2'>
                    <div className='cart-cont'>

                        <h3>Cart (1)</h3>


                        <div className='product'>
                            <div className='product_image'>
                                <img src="" alt="" />
                                <div>
                                    <p>Aveeno Daily Moisturizing Body Lotion 500ml</p>
                                    <span>Seller: Jumia</span>
                                    <p>2 units left</p>
                                </div>
                            </div>

                            <div>
                                <h3>₦ 14,850</h3>
                            </div>
                        </div>

                        <div className='remove'>
                            <div className='remove-btn'>
                                <RiDeleteBin6Line/>
                                <p>REMOVE</p>
                            </div>

                            <div className="add-reduce">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>

                    </div>




                    <div className="checkoutbox">
                        <div className='summary'>
                            <h4>CART SUMMARY</h4>
                        </div>
                        <div>
                            <div className='sub'>
                                <p>Subtotal
                                    <br />
                                    Delivery fees not included yet.
                                </p>
                                <h4>₦ 14,850</h4>
                            </div>
                        </div>
                       <div className='btn'>
                       <button className='checkbtn'>
                            CHECKOUT (₦ 14,850)
                        </button>
                       </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Cart