import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ceo from '../../../Images/ceo.jpeg';
import './Testimonial.css';

const Testimonial = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="testimonial-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                        <h1 style={{ fontSize: '60px' }}>Testimonials</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} lg={4} sm={12}>
                        <div className="client-box text-center" data-aos="fade-right">
                            <div className="client-img">
                                <img src={ceo} alt="" style={{ width: '450px', height: '250px' }}/>
                            </div>
                            <h3 className="mt-4">Aliceano Colby</h3>
                            <span>CEO of Prime IT</span>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="review-item text-start" data-aos="zoom-out">
                            <h2>Awesome Work</h2>
                            <br></br>
                            <p>“They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met.”</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;