import React from 'react'
import './Page4.css'
import page4 from '../images/page4.jpeg'
import page4right from '../images/page4right.png'
import page4left from '../images/page4left.png'
import dog from '../images/dog.png'
import page4logo from '../images/page4logo.png'
import love from '../images/Love.png'
import comeby from '../images/come-by.png'

function Page4() {
    return (
        <div className='main-page'>

            <img className='left-image' src={page4left}></img>
            <img className='right-image' src={page4right}></img>
            <div className='dog-image'> <img style={{ height: '100%', width: '100%' }} src={dog}></img></div>
            <img className='logo-image' src={page4logo}></img>
            <img className='comeby-image' src={comeby}></img>
            <img className='love-image' src={love}></img>
            {/* <img className='mid-logo' src={page4}></img> */}

        </div>
    )
}

export default Page4