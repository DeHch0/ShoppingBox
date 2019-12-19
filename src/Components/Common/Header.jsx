import React from 'react';
import './header-style.css';

const Header = () => {
    return (
        <div className="header-container">
        <div className="left">
            <h1>Welcome to Shopify !</h1>

            <p>Find most beautifull clothes for you !</p>
            <div className="button">
                <button>Find Our Products</button>
            </div>
        </div>

        <div className="right">
            <h3>BestSeller</h3>

            <div className="advertizer">
                <img src="https://media.hypedc.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/3/6/36957906_wht_hy01.jpg" alt=""/>
                <button className="adv-button">Shop Now !</button>
            </div>
        </div>

        
            
        </div>
    
    )
}         

export default Header;