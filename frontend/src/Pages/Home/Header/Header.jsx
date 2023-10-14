import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../Images/logo.png';
import Logoreg from '../../../Images/Logo-reg.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div className="sticky top-0 fixed z-50">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head p-2 flex items-end align-end justify-end">
                <Navbar.Brand href="/home">
                    <img src={Logoreg} alt="Logo-reg" style={{ width: '300px', height: '100px' }} />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/claim" className='list-item text-decoration-none'>Claim</Link>
                            <Link to="/voting" className='list-item text-decoration-none'>Voting</Link>
                    
                            {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">Login</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    
    );
};

export default Header;
