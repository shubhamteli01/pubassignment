import React from 'react'
import './Page2.css'
import img1 from '../images/img_1.png'
import img2 from '../images/img_2.png'
import img3 from '../images/img_3.png'
function Page2() {
    return (
        <div className='main-div'>
            <div className='commom-card'>
                <h1><span>BA</span>RS</h1>
                <p>lorem lpsom doller dummy text should be here</p>
                <img src={img1}></img>
            </div>
            <div className='commom-card'>
                <h1><span>BE</span>ARS</h1>
                <p>lorem lpsom doller dummy text should be here</p>
                <img src={img2}></img>
            </div>
            <div className='commom-card'>
                <h1><span>BREW</span>ERY</h1>
                <p>lorem lpsom doller dummy text should be here</p>
                <img src={img3}></img>
            </div>

        </div>
    )
}

export default Page2