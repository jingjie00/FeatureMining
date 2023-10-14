import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Achivement.css';

const Achivement = () => {
    return (
        <section className="achivement-wrap text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                        <h1 style={{ fontSize: '60px' }}>Our Achievement</h1>
                        </div>
                        <div className="achivement-txt">
                            <p className="w-75">Smiling comes naturally to Dr. Tan, author of ‘inShield’. He has has wholeheartedly embraced the innovation of blockchain insurance, transforming the protection and security of thousands of clients.</p>
                            <div className="more-tool">
                            <Link to="/login"><button  className="theme-btn btn-fill">Apply Now</button></Link>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="watchBtn"><button className="theme-btn btn-unfill"><FontAwesomeIcon className="play-btn" icon={faPlayCircle} /><span>Watch Video</span></button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Row className="achivement-funfact text-white">
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>500+</span>
                                    <p>Happy Customers</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>50+</span>
                                    <p>Qualified Developers</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>10+</span>
                                    <p>Years Experience</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>25+</span>
                                    <p>Insurance Awards</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achivement;