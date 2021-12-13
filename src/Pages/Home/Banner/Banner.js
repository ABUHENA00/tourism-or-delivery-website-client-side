import React from 'react';
import{ Carousel }from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.png'
import banner2 from '../../../Images/Banner/banner2.png'
import banner3 from '../../../Images/Banner/banner3.png'

const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hotel Font Side</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className="text-dark">
                    <h3>Center Side</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className="text-primary">
                    <h3>Backing Side</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;