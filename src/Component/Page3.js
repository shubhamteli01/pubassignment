import React from 'react'
import './Page3.css'
import page3 from '../images/page3.jpg'
import arrow from '../images/Arrow 6.png'
import { BsArrowRight } from "react-icons/bs";
import cap from '../images/cap.png';
import caplogo from '../images/cap-logo.png';
import sanmica from '../images/sanmica.png';





function Page3() {
    return (
        <div className='page3'>
            <div className='page3-text'>
                <div className='title'>ABOUT US</div>
                <div className='page3-title'>
                    <h1>WE ARE TO IT.</h1>
                    <h1 style={{ marginTop: '-30px' }}>YOU SHOULD BE TOO..</h1>
                </div>


                <h4>To this brew pub brewing a revolutionery culture. We started as a sweet little.
                    Bengulure brewing culture with comprise of some bodacious brews, fabulus food and
                    a supreme brew-pub experience
                </h4>

                <div className='two-elements'>
                    <h3>EXPLORE</h3><img src={arrow}></img>
                </div>
            </div>
            <div className='page3-img'>
                <img src={page3}></img>
            </div>
            {/* <div className='footer-text'>TOIT BREWERY</div> */}
        </div >

    )
}

export default Page3