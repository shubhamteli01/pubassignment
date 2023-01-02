import React from 'react'
import rectangle1 from '../images/Rectangle 21.png'
import rectangle2 from '../images/Rectangle 22.png'
import rectangle3 from '../images/Rectangle 23.png'
import rectangle4 from '../images/Rectangle 24.png'

function ImageBar() {
    return (
        <div className='image-row'>
            <div><img src={rectangle1}></img></div>
            <div><img src={rectangle2}></img></div>
            <div><img src={rectangle3}></img></div>
            <div><img src={rectangle4}></img></div>
        </div>
    )
}

export default ImageBar