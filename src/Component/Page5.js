import React from 'react'
import './Page5.css'
import { BsArrowRight } from "react-icons/bs";
import cap from '../images/cap.png';
import caplogo from '../images/cap-logo.png';
import sanmica from '../images/sanmica.png';

function Page5() {
    return (
        <>
            <div className='main-div'>
                <div className='first-half'></div>
                <h1>WANT TO PURCHASE OUR MERCHANDISE</h1>
                <h4>There are many varitions of passangers of lorun lapsum availale but the majority
                    ,butmajority have suffered alternation in some form, by injected humoer or randomised
                    words which dont even look slightly belivable.
                </h4>
                <button> SHOP NOW <BsArrowRight /></button>
                <div className='second-half'><img className='sanmica-img' src={sanmica}></img></div>
                {/* <img className='cap' src={cap}></img>
                <img className='cap-logo' src={caplogo}></img> */}
                <div className='cap'><img src={cap}></img></div>
                <div className='cap-logo'><img src={caplogo}></img></div>

            </div>

        </>

    )
}

export default Page5