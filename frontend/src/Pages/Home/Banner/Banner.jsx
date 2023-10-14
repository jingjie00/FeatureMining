import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import protection from '../../../Images/protection_family.png';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Community-Driven Insurance</h2>
                                <h1 className="">Where Community Shapes Insurance</h1>
                                <p className="mb-xs-5">Join our vibrant community-driven insurance platform where members come together to create a friendly, supportive environment. Our dedicated team works tirelessly to ensure you have the insurance coverage you deserve, all while fostering a sense of community and trust.</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/login"><button className="theme-btn btn-fill">Apply Now</button></Link>
                                    <button className='theme-btn bth-blank text-red-500 '>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right text-center text-lg-start mt-sm-5 relative">
                                <div className="animate-img">
                                </div>
                                <img src={protection} alt="" className="heroTeeth"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;