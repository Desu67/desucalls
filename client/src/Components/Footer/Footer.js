import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <footer className="footerWrapper">
            <div className="footerContainer">
                <div className="disclaimer">
                    Debes permitir el acceso a video y audio para realizar llamadas.<br/>
                    Desucalls no almacena ningún dato en sus servidores.
                </div>
                <div className="self">
                    Made with <span role='img' aria-label='heart-emoji'>❤️</span> by <a href="https://www.instagram.com/crk667/" target="_blank" rel="noopener noreferrer">Desu</a>.
                </div>
            </div>
        </footer>
    )

}

export default Footer