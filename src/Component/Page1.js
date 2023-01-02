import React from 'react'
import './Page1.css'
import glass from '../images/main2.jpg'
import toit from '../images/TOIT.png'
import beer from '../images/beer.png'
import beer2 from '../images/beer2.png'
import menu from '../images/menu.png'
import logo from '../images/cap-logo.png';
import { BsArrowDown } from "react-icons/bs";

function Page1() {
    return (
        <div className='main-div'>
            <img src={glass}>
            </img>
            <div className='navbar'>
                <div><img src={menu}></img></div>
                <div className='nav-title'>MENU</div>

                <div className='midlogo'><img src={logo}></img></div>
                <div className='menubar'>
                    <li>Kurdix</li>
                    <li>Reservation</li>
                    <li>Brewery toor</li>
                    <li style={{ border: '2px solid white' }}>Find my Beer</li>

                </div>
            </div>
            <div className='toit'>   <img src={toit}></img> </div>
            <div className='beer'>  <b>BEER</b></div>
            <div className='downarrow'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowDown style={{ fontSize: '30px' }} /> <h5>SCROLL DOWN</h5></div>
        </div>
    )
}

export default Page1