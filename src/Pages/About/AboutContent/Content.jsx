import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                        <h1 style={{ fontSize: '60px' }}>Our Dental Practice</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Since its inception, our inShield team has proudly embraced cutting-edge technology and modern methodologies. Our dedicated team, led by experts like John and Michael, is committed to providing a personalized and reassuring insurance experience that sets us apart from the rest. Explore insurance with us like you've never seen before.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;