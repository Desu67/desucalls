import React from 'react'
import desucallslogo from '../../Icons/cuckoo-logo.svg'
import './Watermark.css'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={desucallslogo} alt="Cuckoo Logo"/>
            <span className="logoText">desucalls</span>
        </div>
    )
}

export default Watermark