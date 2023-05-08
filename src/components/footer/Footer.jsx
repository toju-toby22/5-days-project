import React from 'react'
import "./footer.css"
import image from "./img/download.png"
import image2 from "./img/2.png"
const Footer = () => {
    return (
        <div>


            <div className='upsection'>
                <div>
                    <img className='jumia' src={image} alt="" />
                </div>

                <div>
                    <p className='new'>NEW TO JUMIA</p>
                    <p className='subscribe'>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <div className='email_btn'>
                        <div className='email-container'>
                            <input className='input_email' type="email" placeholder='Enter E-mail Address'/>
                        </div>
                        <button className='btns'>MALE</button>
                        <button className='btns'>FEMALE</button>
                    </div>
                </div>


                <div className='download'>
                    <div className='app'>
                        <img className='logo' src={image2} alt="" />
                        <p>DOWNLOAD JUMIA FREE APP</p>
                    </div>

                    <div className='apple_play'>
                        <span className='apple'>
                        <i class='bx bxl-apple'></i>
                            <div>
                                <p>Download on the<br/>
                                App Store
                                </p>
                
                            </div>
                        </span>

                        <span className='apple'>
                        <i class='bx bxl-play-store'></i>
                            <span>
                            <p>Download on the<br/>
                                App Store
                                </p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>


            <div className="downsection">

                <div>
                    <ul className="footer_list">
                        <li className="head">LET US HELP YOU</li>

                        <li className='list'>Help Center</li>
                        <li className='list'>Contact Usr</li>
                        <li className='list'>Delivery options and timelines</li>
                        <li className='list'>How to return a product on Jumia?r</li>
                        <li className='list'>Corporate and bulk purchasesr</li>
                        <li className='list'>Report a Product</li>
                        <li className='list'>Ship your package anywhere in Nigeria</li>
                        <li className='list'>Dispute Resolution Policy</li>
                        <li className='list'>Returns and Refunds Policy</li>
                    </ul>
                </div>


                <div>

                    <ul className="footer_list">
                        <li className="head">ABOUT JUMIA</li>

                        <li className='list'>Jumia careers</li>
                        <li className='list'>Jumia Express</li>
                        <li className='list'>Terms and Conditions</li>
                        <li className='list'>Privacy Notice</li>
                        <li className='list'>Cookie Notice</li>
                        <li className='list'>Jumia Global</li>
                        <li className='list'>Official Stores</li>
                        <li className='list'>Flash Sales</li>
                        <li className='list'>Jumia Anniversary 2023</li>
                    </ul>
                </div>



                <div>

                    <ul className="footer_list">
                        <li className="head">MAKE MONEY WITH JUMIA</li>

                        <li className='list'>Sell on Jumia</li>
                        <li className='list'>Become a Sales Consultant</li>
                        <li className='list'>Become a Logistics Service Partner</li>
                        <li className='list'>Join the Jumia DA Academy</li>
                        <li className='list'>Join the Jumia KOL Program</li>
                    </ul>
                </div>




                <div>

                    <ul className="footer_list">
                        <li className="head">JUMIA INTERNATIONAL</li>

                        <li className='list'>Algeria</li>
                        <li className='list'>Egypt</li>
                        <li className='list'>Ghana</li>
                        <li className='list'>Ivory Coast</li>
                    </ul>
                </div>

                
            </div>


        </div>
    )
}

export default Footer