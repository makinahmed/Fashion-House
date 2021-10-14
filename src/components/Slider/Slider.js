import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImage from '../../images/img-5.png';
import secondImage from '../../images/img-4.jpeg';
import thirdImage from '../../images/img-3.jpg';
import fourthImage from '../../images/img-1.jpg';
import fifthImage from '../../images/img-2.jpg';
import './Slider.css';
const Slider = () => {
    return (
        <>
            <Carousel className="carousel">
                <Carousel.Item>

                    <img
                        className="d-block vh-100 vw-100"
                        src={thirdImage}
                        alt="First slide"
                    />
                    <div className="carousel-caption">
                        <Carousel.Caption >
                            <h1>Premium</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  vh-100 vw-100"
                        src={firstImage}
                        alt="Second slide"
                    />
                    <div className="carousel-caption">
                        <Carousel.Caption>
                            <h1>Pohela Boishakh</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  vh-100 vw-100"
                        src={fourthImage}
                        alt="Third slide"
                    />
                    <div className="carousel-caption">
                        <Carousel.Caption >
                            <h1>Eid Specials</h1>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  vh-100 vw-100"
                        src={fifthImage}
                        alt="Third slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption>
                            <h1>Puja Specials</h1>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;