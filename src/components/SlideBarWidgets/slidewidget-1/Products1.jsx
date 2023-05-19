import React from 'react'
import image1 from "../img/1.jpg"
import image2 from "../img/14.jpg"
import image3 from "../img/114.jpg"
const Products1 = (props) => {
    return (
        <div>
            <div className='card'>
                <img className='product-image' src={image1} alt="" />
                <h5>Product Name</h5>
                <p className='price22'>$20.99</p>
            </div>

           
        </div>
    )
}

export default Products1