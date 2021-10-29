import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../images/banner-1.png';
import img2 from '../../images/banner-2.png';
import img3 from '../../images/banner-3.png';
import Offer from './Offer/Offer';

const Home = () => {
    const [ offers, setOffers ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/offers')
        .then(res => res.json())
        .then(data => setOffers(data));
    }, []);

    return (
        <Container fluid className="px-0">
            <Carousel fade variant="dark" interval={1000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

            <Container className="py-5">
                <h2 className="fs-2 fw-bold pb-5"><span className="border-0 border-bottom border-3 border-danger">ALL OFFERS</span></h2>
                <div className="d-flex flex-wrap justify-content-around my-5">
                    {
                        offers.map(offer => <Offer key={offer.id} offer={offer}></Offer>)
                    }
                </div>
            </Container>

        </Container>
    );
};

export default Home;