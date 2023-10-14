import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'
import logoreg from '../../../Images/Logo-reg.png'; 

const Footer = () => {
    return (
      <div className="footer-bg">
        <Container>
          <Row className="text-white">
            <Col xs={6} md={3}>
              <div className="single-footer-widget">
                <div className="widget-title">
                  <h2>Services</h2>
                </div>
                <div className="widget-content">
                  <NavLink className="footer-link">Claim Insurance</NavLink>
                  <NavLink className="footer-link">Apply For Insurance</NavLink>
                  <NavLink className="footer-link">About Us</NavLink>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="single-footer-widget">
                <div className="widget-title">
                  <h2>Our Address</h2>
                </div>
                <div className="widget-content">
                  <NavLink className="footer-link">8th Floor, 51-53, Lebuh Ampang</NavLink>
                  <NavLink className="footer-link">Kuala Lumpur, 50100</NavLink>
                  <NavLink className="footer-link">03-2078-1376</NavLink>
                </div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="single-footer-widget">
                <div className="widget-content">
                  <img src={logoreg} alt="Logo" style={{backgroundColor:'white'}} />
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}></Col>
          </Row>
        </Container>
        <div className="footer-copy-right text-center text-white">
          <p className='mb-0'>&copy; 2023 - <span className="developer">FeatureMining</span> | All Rights Reserved</p>
        </div>
      </div>
    );
  };
export default Footer;