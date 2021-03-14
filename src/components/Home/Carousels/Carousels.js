import React from 'react';
import './Corousels.css';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.jpg';
import carousel2 from '../../../images/carousel-2.jpg';
import carousel3 from '../../../images/carousel-3.jpg';
import carousel4 from '../../../images/carousel-4.jpg';
import carousel5 from '../../../images/carousel-5.jpg';

const Carousels = () => {
    return (
        <div className="text-center carousel-bg">
            <div style={{height:'50px'}}></div>
            <h1 style={{color: 'white', marginBottom: '50px'}}>Here are some of <span style={{color:'green'}}>our service</span></h1>
            <Carousel className="d-flex justify-content-center">
                <Carousel.Item>
                    <img
                        className="d-block img-fluid carouselImg"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block img-fluid carouselImg"
                        src={carousel2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid carouselImg"
                        src={carousel3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid carouselImg"
                        src={carousel4}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid carouselImg"
                        src={carousel5}
                        alt="First slide"
                    />
                </Carousel.Item>
                

            </Carousel>
            <div style={{height:'50px', marginBottom:'50px'}}></div>
        </div>
    );
};

export default Carousels;