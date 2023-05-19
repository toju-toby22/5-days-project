import React from 'react'
import Sliderbar from '../../sidebar/Slider'
import "./slide2.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './product';
import image1 from "../img/1.jpg"
import image2 from "../img/14.jpg"
import image3 from "../img/114.jpg"
import { Link } from 'react-router-dom';


const Slide2 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    const productData = [
        {
            id:1,
            imageurl: image1,
            name: "Product-name1",
            price:"$20.29",
        },

        {
            id:2,
            imageurl: image2,
            name: "Product-name2",
            price:"$20.29",
        },



        {
            id:3,
            imageurl:image3,
            name: "Product-name3",
            price:"$20.29",
        },

        {
            id:1,
            imageurl: image1,
            name: "Product-name1",
            price:"$20.29",
        },

        {
            id:2,
            imageurl: image2,
            name: "Product-name2",
            price:"$20.29",
        },



        {
            id:3,
            imageurl:image3,
            name: "Product-name3",
            price:"$20.29",
        },

        {
            id:1,
            imageurl: image1,
            name: "Product-name1",
            price:"$20.29",
        },

        {
            id:2,
            imageurl: image2,
            name: "Product-name2",
            price:"$20.29",
        },



        {
            id:3,
            imageurl:image3,
            name: "Product-name3",
            price:"$20.29",
        },
    ]


    const products2 = productData.map(item => (
            <Products name={item.name} image={item.imageurl} price={item.price}/>
    ))
    return (
        <div className='contain'>
            {/* <Sliderbar/> */}

            <div>
                <div>
                    <h2 className='top'>Top selling</h2>
                </div>
                <Carousel responsive={responsive}>
                  <Link className='link' to="/ProductPage">{products2}</Link>
                </Carousel>;
            </div>
        </div>
    )
}

export default Slide2