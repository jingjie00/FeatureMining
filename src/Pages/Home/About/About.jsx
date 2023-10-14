import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import insurance from '../../../Images/insurance_welcome.png';
//import dontoAnimated from '../../../Images/cleaner.png';
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={insurance} alt="insurance" className="img-fluid donto" style={{ width: '600px', height: '600px' }} />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1 style={{ fontSize: '60px' }}>Welcome to a Family</h1>
                                <p>Welcome to a Family: Where Your Insurance Journey Begins with Trust, Support, and Community. At our community-driven insurance platform, we're more than just a policy provider – we're your trusted partners on the path to secure and meaningful protection. Our dedicated team tailors insurance coverage to your unique needs while fostering a sense of community and trust. Discover insurance that's more than just a policy – it's a promise of security, support, and genuine care.</p>
                                <a href='/page/about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>500</span>
                                    <span>+</span>
                                    <p>Happy Customers</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>50</span>
                                    <span>+</span>
                                    <p>Qualified Developers</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>10</span>
                                    <span>+</span>
                                    <p>Years Experience</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Insurance Awards</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;