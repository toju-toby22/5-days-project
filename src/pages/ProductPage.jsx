import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import "./css/ProductPage.css"
import ProductImage from "../Assets/115.jpg"
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const ProductPage = () => {
    return (
        <div>
            <Navbar />

            <div className="product">


                <div className="product-description">

                    <div className="productbox">
                        <div className="product-image-id">
                            <img className='image' src={ProductImage} alt="" />
                        </div>



                        <div className="descriptionbox">
                            <div className="first">
                                <span className='official'>Official Store</span>
                                <h4>Aveeno Daily Moisturizing Body Lotion 500ml</h4>
                                <span>Brand: Aveeno | Similar products from Aveeno</span>
                                <span>0 out of 5(No ratings available)</span>
                            </div>


                            <div className="second">
                                <h4>₦ 14,850</h4>
                                <p>2 units left</p>
                                <p>+ shipping from ₦ 10,750 to LEKKI-AJAH (SANGOTEDO)</p>

                                <div className="add-reduce">
                                    <button><AiOutlineMinus /></button>
                                    <p>1</p>
                                    <button><AiOutlinePlus /></button>
                                    <p>(1 item(s) added)</p>
                                </div>
                            </div>

                            <div className="third">
                                <h4>PROMOTIONS</h4>

                                <div>
                                    <p>Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</p>
                                </div>
                                <div>
                                    <p>Transfer up to N200,000 to any bank in Nigeria for FREE!</p>
                                </div>
                                <div>
                                    <p>Pay your electricity bills at zero extra cost on JumiaPay</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="add-to-cart2">
                        <div className='cart-delivery'>
                            <div className="deliery">
                                <h4>DELIVERY & RETURNS</h4>
                            </div>
                            <div className='deliery'>
                                <p>Free delivery on thousands of products in Lagos,
                                    Ibadan & Abuja Details</p>
                            </div>

                            <div className="location">
                                <h4>Choose your location</h4>
                            </div>

                            <div className='select-state'>
                                <select className='option' name="Lagos" id="">
                                    <option className='option' value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                </select>
                            </div>


                            <div className='select-state'>
                                <select className='option' name="Lagos" id="">
                                    <option value="Lagos">Abuja</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Lagos">Lagos</option>
                                </select>
                            </div>






                        </div>
                    </div>
                </div>




                <div className="product-description">

                    <div className="productbox2">
                        <div className='details'>
                            <h4>Product details</h4>
                        </div>

                        <div className='info-details'>
                            <p>Intensely nourish dry skin with prebiotic oat formula. T
                                he gentle daily lotion nourishes &
                                helps replenish skin's natural moisture barrier &
                                has clinically proven moisturization that lasts 24 hours.</p>
                            <ul>
                                <li>Clinically proven 24 hour moisturization</li>
                                <li>Daily lotion nourishes dry skin with moisture</li>
                                <li>Fragrance-free, non-greasy & non-comedogenic Good for Dry skin</li>
                            </ul>
                        </div>

                    </div>





                    <div>
                        <div className="add-to-cart2">
                            <div className='psv'>
                                <p>Product details</p>
                            </div>



                            <div className='psv'>
                                <p>Specifications</p>
                            </div>



                            <div className='psv'>
                                <p>Verified Customer Feedback</p>
                            </div>

                        </div>


                        <div className="add-to-cart22">

                            <div className='buy'>
                                <img className='png2' src={ProductImage} alt="" />
                                <div>
                                    <p>Aveeno Daily Moisturizing Bo</p>
                                    <h5>₦ 14,850</h5>
                                </div>
                            </div>

                            <div className='btn-cart'>
                                <button className='cart-btn'>
                                    ADD TO CART
                                </button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage