import React from 'react'
import './Chat.css'

const image = "https://i.ytimg.com/vi/rIEA3Eq8j5Y/maxresdefault.jpg";

function Footer() {

    return (
        <div className="chatWrapper">
            <div className="chatContainer">
                <img src={image} alt="desucalls"/>
            </div>
            <div className="disclaimer">
                <input placeholder="Enter message..."/>
            </div>
        </div>
    )

}

export default Footer