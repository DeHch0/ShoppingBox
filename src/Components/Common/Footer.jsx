import React from 'react';
import './footer-style.css'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
        <div className="footer">
    
            <div className="footer-left-box">
                <h4>About Company</h4>
                <ul>
                    <li className="footer-link"><Link to='/'>Home</Link></li>
                    <li className="footer-link"><Link to='/about'>About</Link></li>
                    <li className="footer-link"><Link to='/male/all'>Men</Link></li>
                    <li className="footer-link"><Link to='/women/all'>Women</Link></li>
                </ul>
            </div>
    
            <div className="footer-center-box">
                <h4>Contacts</h4>
                <div className="email">blankemail@empty.bg</div>
                <div className="phone">0987656787</div>
                <div className="socials">
                    <span className="facebook">F</span>
                    <span className="instagram">I</span>
                    <span className="google">G+</span>
                    <span className="twitter">T</span>
                </div>
            </div>
    
            <div className="footer-right-box">
                <h4>Adress</h4>
                    <span className="adress" >102 The Super Street,<br/> Sofia,<br/> Bulgaria</span>
                </div>
            </div>
        
    </footer>
    )
}

export default Footer