import React from 'react'
import image from "../../Assets/117.jpg"

const ProductSection = () => {
  return (
    <div>
         <div className='contain-product'>
                    <div className='name_category2'>
                        <h4>TOP DEALS</h4>
                    </div>
                    <div className='card-grid'>
                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <h5>Product Name</h5>
                            <p className='price2'>$20.99</p>
                        </div>  


                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <h5>Product Name</h5>
                            <p className='price2'>$20.99</p>
                        </div>

                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <h5>Product Name</h5>
                            <p className='price2'>$20.99</p>
                        </div>

                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <h5>Product Name</h5>
                            <p className='price2'>$20.99</p>
                        </div>


                        <div className='card1'>
                            <img className='product-image1' src={image} alt="" />
                            <h5>Product Name</h5>
                            <p className='price2'>$20.99</p>
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
  )
}

export default ProductSection