import React from 'react'
import image1 from "../img/1.jpg"
import image2 from "../img/14.jpg"
import image3 from "../img/114.jpg"
const Products = (props) => {
    return (
        <div>
            <div className='card'>
                <img className='product-image' src={props.image} alt="" />
                <h2>Product Name</h2>
                <p className='price'>$20.99</p>
            </div>

           
        </div>
    )
}

export default Products