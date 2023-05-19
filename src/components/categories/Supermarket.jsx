import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./css/categories.css"
import image from "./img/18.jpg"
const Supermarket = () => {
    return (
        <div className='category-cover'>
            <Navbar />

            <div className='cover'>
                <div>
                    <h2 className='name_category'>Groceries</h2>
                </div>


                <div className='contain-product'>
                    <div className='name_category2'>
                        <h4>TOP DEALS</h4>
                    </div>
                    <div className='card-grid'>
                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <div className='descname'>
                                <h5>Product Name</h5>
                                <p className='price2'>$20.99</p>
                            </div>
                        </div>


                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <div className='descname'>
                                <h5>Product Name</h5>
                                <p className='price2'>$20.99</p>
                            </div>
                        </div>

                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <div className='descname'>
                                <h5>Product Name</h5>
                                <p className='price2'>$20.99</p>
                            </div>
                        </div>

                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <div className='descname'>
                                <h5>Product Name</h5>
                                <p className='price2'>$20.99</p>
                            </div>
                        </div>


                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <div className='descname'>
                                <h5>Product Name</h5>
                                <p className='price2'>$20.99</p>
                            </div>
                        </div>

                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <div className='descname'>
                                <h5>Product Name</h5>
                                <p className='price2'>$20.99</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Supermarket;