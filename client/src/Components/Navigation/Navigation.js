import React from 'react'
import desucallslogo from '../../Icons/cuckoo-logo.svg'
import '../Navigation/Navigation.css'

const Navigation = () => {
    return (
        <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoImg">
                                    <img src={desucallslogo} alt="Cuckoo Logo"/>
                                </div>
                                <div className="logoText">
                                    desucalls
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="githubStar">
                        <a href="https://www.instagram.com/crk667/" target="_blank" rel="noopener noreferrer">Follow me</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navigation