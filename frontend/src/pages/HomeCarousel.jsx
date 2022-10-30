import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../style/HomeCarousel.css";

const HomeCarousel = () => {
    return (
        // interval={1000} => interval 
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/carousal1.png')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/carousal2.png')}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../images/carousal3.png')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3> */}
                    {/* <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};


export default HomeCarousel;