import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import "./css/ProductPage.css"
import ProductImage from "../Assets/115.jpg"

const ProductPage = () => {
    return (
        <div>
            <Navbar />

            <div className="product">


                <div className="product-description">

                    <div className="productbox">
                        <div className="product-image">
                            <img className='image' src={ProductImage} alt="" />
                        </div>



                        <div className="description">
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
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
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


                    <div className="add-to-cart">
                        <div className='cart'>
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


                            <div className='btn'>
                                <button className='checkbtn'>
                                    CHECKOUT (₦ 14,850)
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