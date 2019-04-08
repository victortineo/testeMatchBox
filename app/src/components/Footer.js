import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text">
                <span className="footer__text footer__text--ligth">front-end test</span> / <a className="footer__text footer__text--link" href="http://matchboxbrasil.com" rel="noopener noreferrer" target="_blank">matchboxbrasil.com</a>
            </p>
        </div>
    )  
}

export default Footer