import React from 'react'
import './Page6.css'
import { BsArrowRight, BsArrowUp } from "react-icons/bs";
import left from '../images/left.png'
import mid from '../images/middle.png'
import right from '../images/right.png'
import midlogo from '../images/cap-logo.png';

function Page6() {
    return (
        <div className='footer' >


            <div className='footer-text' >
                <h5><BsArrowRight />&nbsp;&nbsp;&nbsp;&nbsp;ABOUT</h5>
                <h5><BsArrowRight />&nbsp;&nbsp;&nbsp;&nbsp;BEER</h5>
                <h5><BsArrowRight />&nbsp;&nbsp;&nbsp;&nbsp;FOOD</h5>
                <h5><BsArrowRight />&nbsp;&nbsp;&nbsp;&nbsp;SHOP</h5>
                <h5><BsArrowRight />&nbsp;&nbsp;&nbsp;&nbsp;CONTACT</h5>
                <br></br>
                <h5>&copy;&nbsp;&nbsp;Copyright 2021 </h5>
            </div>
            <div className='footer-text-mid' >
                <h5 style={{ fontSize: '30px' }}>< BsArrowUp /></h5>
                <h5 style={{ marginTop: '-50px' }}>Top</h5>

            </div>
            <div className='footer-text2' >
                <h6>298 100 Ft Rd,</h6>
                <h6>Indira nagar ||  stage</h6>
                <h6>Bengluru 56003B</h6>
                <h6>Karnataka</h6>
                <br></br>
                <h6>+91 9019713388</h6>
                <h6>toitblr@toit.in</h6>
                <br></br>
                <h5>All Rights Reserved </h5>
            </div>
            <img className='left' src={left}></img>
            <img className='mid' src={mid}></img>
            <img className='mid-logo' src={midlogo}></img>
            <img className='right' src={right}></img>


        </div>
    )
}

export default Page6