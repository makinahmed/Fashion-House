import React from 'react';
import Banner from '../Banner/Banner';
import NewCollections from '../NewCollections/NewCollections';
import Panjabis from '../Panjabi/Panjabis';
import Sharees from '../Sharee/Sharees';
import Slider from '../Slider/Slider';
import ThreePieces from '../ThreePiece/ThreePieces';

const HomePage = () => {
    
    return (
        <div>
            <Slider></Slider>
            <NewCollections></NewCollections>
            <Banner></Banner>
            <Panjabis></Panjabis>
            <Sharees></Sharees>
            <ThreePieces></ThreePieces>
        </div>
    );
};

export default HomePage;