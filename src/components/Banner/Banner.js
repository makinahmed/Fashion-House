import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="position-relative my-5">
            <div className="banner-text">
                <h2>Trending Now</h2>
                <p className="checkout">Checkout Our Latest Collection</p>
                <a href="/" className="banner-btn">New Arrival</a>
            </div>
            <img className="w-100 banner-img" src="https://rollingstoneindia.com/wp-content/uploads/2019/06/Laisfita-main-960x616.jpg" alt="" />
        </div>
    );
};

export default Banner;